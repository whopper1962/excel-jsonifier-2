const {selectConversionMode} = require('../lib/inquirer');
const execConvertionJsonToXlsx = require('./json-to-xlsx');
const execConvertionXlsxToJson = require('./xlsx-to-json');

main();

// Main process
async function main () {
  const { selectedMode } = await selectConversionMode();
  if (selectedMode === 'XLSX to JSON') {
    execConvertionXlsxToJson();
  } else {
    execConvertionJsonToXlsx();
  }
}
