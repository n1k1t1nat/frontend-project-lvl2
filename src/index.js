import { readFileSync } from 'fs';
import path from 'path';
import parsers from './parsers.js';
import formatter from './formatters/index.js';
import getDiffTree from './getDiffTree.js';

const readFile = (filename) => readFileSync(path.resolve(process.cwd(), filename), 'utf-8');
const fileFormat = (filename) => path.extname(filename).slice(1);

const genDiff = (filepath1, filepath2, format) => {
  const file1format = fileFormat(filepath1);
  const file2format = fileFormat(filepath2);
  const fileContent1 = readFile(filepath1);
  const fileContent2 = readFile(filepath2);
  const data1 = parsers(file1format, fileContent1);
  const data2 = parsers(file2format, fileContent2);
  const diffTree = getDiffTree(data1, data2);
  return formatter(diffTree, format);
};
export default genDiff;
