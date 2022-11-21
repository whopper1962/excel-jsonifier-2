const questions = require('../lib/inquirer');
const {getFilesByExtensions} = require('../lib/getFiles');
const createXlsx = require('./create-xlsx');

const xlsx = require('../lib/xlsx');
const { saveXlsxFile } = require('../lib/xlsx');

// Settings
let jsonFileToConvert = '';
let creationMode = '';
let xlsxFileName = '';
let xlsxSheetName = '';
let workbook = {};
let xlsxObject = {};

let xlsxWorkSheet = {};

const NEW_FILE = 'Create new file';

module.exports = async function main () {
  await getJsonFileToConvert();
  await getSourceXlsxFile();
  await getXlsxInfo();
  await xlsx.createNewSheet(workbook, xlsxObject, xlsxSheetName, xlsxFileName);
};

async function getJsonFileToConvert () {
  const files = await getFilesByExtensions('../source-json', 'json');
  const {selectedJsonFileToConvert} = await questions.selectJsonFileToConvert(files);
  jsonFileToConvert = selectedJsonFileToConvert;
}

async function getSourceXlsxFile () {
  const {selectedCreaionMode} = await questions.selectSourceFileType(NEW_FILE);
  creationMode = selectedCreaionMode;
}

async function getXlsxInfo () {
  if (creationMode === NEW_FILE)  {
    xlsxSheetName = await configNewXlsxFile();
  } else {
    xlsxSheetName = await configExistingXlsxFile();
  }
}

async function configNewXlsxFile () {
  const {inputedXlsxFileName} = await questions.inputXlsxFileName();
  xlsxFileName = inputedXlsxFileName;
  xlsxSheetName = await getSheetName();
  workbook = await xlsx.createNewWorkbook();
  // xlsx.saveXlsxFile(workbook, xlsxFileName);
}

async function configExistingXlsxFile () {
  const xlsxFiles = await getFilesByExtensions('../source-xlsx/', 'xlsx');
  const {selectedXlsxFile} = await questions.selectExistingXlsxFile(xlsxFiles);
  xlsxFileName = selectedXlsxFile;
  workbook = await xlsx.readExistingXlsxFile('../source-xlsx/', selectedXlsxFile);
  // console.log(workbook);
  xlsxSheetName = await getSheetName();
  // worksheet = xlsx.createNewSheet(workbook, sheetName);
  // xlsx.saveXlsxFile(worksheet, selectedXlsxFile);
  // console.log(worksheet);
}

async function getSheetName () {
  const {inputedXlsxSheetName} = await questions.inputXlsxSheetName();
  if (creationMode !== NEW_FILE) {
    await checkSheetNameDuplication();
  }
  return inputedXlsxSheetName;
}

async function createFile () {
  xlsx.saveXlsxFile(worksheet, selectedXlsxFile);
}

async function checkSheetNameDuplication () {}