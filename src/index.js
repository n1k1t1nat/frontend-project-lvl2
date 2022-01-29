import { readFileSync } from 'fs';
import _ from 'lodash';
import path from 'path';


const parser = (filepath) => {
    const data = readFileSync(path.resolve(filepath), 'utf8');
    return JSON.parse(data);
};

const genDiff = (filepath1, filepath2) => {
    const data1 = parser(filepath1);
    const data2 = parser(filepath2);
    
    const keys1 = _.keys(data1);
    const keys2 = _.keys(data2);
    const keys = _.union(keys1, keys2).sort();
    const result = keys.map((key) => {
        if (!_.has(data1, key)) {
          return `  + ${key}: ${data2[key]}`;
        }
        if (!_.has(data2, key)) {
          return `  - ${key}: ${data1[key]}`;
        }
        if (data1[key] !== data2[key]) {
          return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
        }
        return `    ${key}: ${data2[key]}`;
      });
    
      return `{\n${result.join('\n')}\n}`;
    };
export default genDiff;
