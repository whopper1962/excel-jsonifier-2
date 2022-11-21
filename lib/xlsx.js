const xlsx = require('xlsx');
const utils = xlsx.utils;
const excelJs = require('exceljs');

module.exports = {
  // readXlsxFile(dir, fileName) {
  //   const xlsxObject = xlsx.readFile(`${__dirname}/${dir}/${fileName}`);
  //   return xlsxObject;
  // },
  createNewWorkbook () {
    const workbook = utils.book_new();
    return workbook;
    // utils.book_append_sheet(workbook, ws, sheetName);
    // saveXlsxFile(workbook, data, sheetName);
  },
  createNewSheet (workbook, data, sheetName, fileName) {
    const ws = utils.aoa_to_sheet(data);
    console.log('PASSED');
    utils.book_append_sheet(workbook, ws, sheetName);
    xlsx.writeFile(workbook, `${__dirname}/../source-xlsx/${fileName}`);
    // saveXlsxFile(workbook, fileName);
  },
  readExistingXlsxFile (path, fileName) {
    const workbook = xlsx.readFile(`${__dirname}/${path}/${fileName}`);
    // const worksheet = {};
    return workbook;
  },
  checkSheetNameDuplication (workbook, sheetName) {}
};