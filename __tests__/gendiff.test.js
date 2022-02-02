import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const jsonFile1 = getFixturePath('file1.json');
const jsonFile2 = getFixturePath('file2.json');
const ymlFile1 = getFixturePath('file1.yml');
const ymlFile2 = getFixturePath('file2.yml');

const expected = readFileSync(getFixturePath('expected.txt'), 'utf-8');

test('gendiff test', () => {
  expect(genDiff(jsonFile1, jsonFile2)).toEqual(expected);
  expect(genDiff(ymlFile1, ymlFile2)).toEqual(expected);
});
