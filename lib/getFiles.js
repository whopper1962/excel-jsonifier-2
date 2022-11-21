const fileSystem = require('fs');

async function getFilesByExtensions (path, ...extensions) {
  const files = fileSystem.readdirSync(`${__dirname}/${path}`);
  return files.filter((file) => {
    const currentFileExtension = file.split('.').pop();
    return extensions.some((extension) => extension === currentFileExtension);
  });
}

module.exports = {
  getFilesByExtensions
};