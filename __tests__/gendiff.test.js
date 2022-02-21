import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const tests = [
  ['file1.json', 'file2.json', 'expected_stylish.txt', 'stylish'],
  ['file1.yml', 'file2.yml', 'expected_stylish.txt', 'stylish'],
  ['file1.json', 'file2.json', 'expected_plain.txt', 'plain'],
];

describe('Gendiff test', () => {
  test.each(tests)('Compare files', (firstFile, secondFile, expectedResult, format) => {
    const fileBefore = getFixturePath(firstFile);
    const fileAfter = getFixturePath(secondFile);
    const getResult = readFile(expectedResult);
    const result = genDiff(fileBefore, fileAfter, format);
    expect(result).toEqual(getResult);
  });
});