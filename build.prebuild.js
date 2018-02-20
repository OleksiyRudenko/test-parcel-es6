const fse = require('fs-extra');

console.log('>>>>>> PRE-BUILD CHORES');

const distDir = 'dist';
const assetsDestDir = 'dist/assets';
const dirsToEnsureAndPurge = [ distDir ]; //, assetsDestDir ];

const assetsSrcDir = 'src/assets';
const assetsToCopy = [];

console.log('=== Directory tree chores');
dirsToEnsureAndPurge.forEach(dir => {
  try {
    console.log('--- Ensuring and/or purging ' + dir);
    fse.ensureDirSync(assetsDestDir);
    fse.emptyDirSync(dir);
    console.log('OK');
  } catch (err) {
    console.log('ERROR: ' + err);
  }
});

console.log('=== Copying static assets');
assetsToCopy.forEach(file => {
  try {
    console.log('--- Copying file ' + file);
    fse.copySync(assetsSrcDir + '/' + file, assetsDestDir + '/' + file);
    console.log('OK');
  } catch (err) {
    console.log('ERROR: ' + err);
  }
});

console.log('<<<<<< PRE-BUILD CHORES');
