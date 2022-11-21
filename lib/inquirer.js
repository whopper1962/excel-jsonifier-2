const INQUIRER = require('inquirer');

module.exports = {
  async selectConversionMode () {
    const questions = [
      {
        type: 'list',
        message: 'Select mode',
        name: 'selectedMode',
        choices: [
          'XLSX to JSON',
          'JSON to XLSX'
        ]
      }
    ];
    return INQUIRER.prompt(questions);
  },
  async selectJsonFileToConvert (files) {
    const questions = [
      {
        type: 'list',
        message: 'Select JSON file to convert',
        name: 'selectedJsonFileToConvert',
        choices: files
      }
    ];
    return INQUIRER.prompt(questions);
  },
  async selectSourceFileType (newFile) {
    const questions = [
      {
        type: 'list',
        message: 'Create new xlsx file?',
        name: 'selectedCreaionMode',
        choices: [
          newFile,
          'Use existing file'
        ]
      }
    ];
    return INQUIRER.prompt(questions);
  },
  async selectExistingXlsxFile (files) {
    const questions = [
      {
        type: 'list',
        message: 'Select xlsx file',
        name: 'selectedXlsxFile',
        choices: files
      }
    ];
    return INQUIRER.prompt(questions);
  },
  async inputXlsxFileName () {
    let questions = [
      {
        type: 'input',
        name: 'inputedXlsxFileName',
        message: 'Input the file name',
        validate: (input) => {
          if (input.length === 0) {
            return 'The file name is required.';
          } else {
            return true;
          }
        },
      }
    ];
    return INQUIRER.prompt(questions);
  },
  async inputXlsxSheetName () {
    let questions = [
      {
        type: 'input',
        name: 'inputedXlsxSheetName',
        message: 'Input the sheet name',
        validate: (input) => {
          if (input.length === 0) {
            return 'The sheet name is required.';
          } else {
            return true;
          }
        },
      }
    ];
    return INQUIRER.prompt(questions);
  },
};