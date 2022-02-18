import fs from 'fs';
import path from 'path';
import parsers from './parsers.js';
import format from './getFormat.js';
import getDiff from './getDiff.js';

const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), filename.trim()), 'utf-8');
const fileFormat = (filename) => path.extname(filename).slice(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1format = fileFormat(filepath1);
  const file2format = fileFormat(filepath2);
  const fileContent1 = readFile(filepath1);
  const fileContent2 = readFile(filepath2);
  const data1 = parsers(file1format, fileContent1);
  const data2 = parsers(file2format, fileContent2);
  const innerTree = getDiff(data1, data2);
  return format(innerTree, formatName);
};
export default genDiff;
