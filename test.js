import fs from 'node:fs';

try {
  if (fs.existsSync('testfolder')) {
    console.log('directory exist');
  }
  fs.mkdirSync(' testfolder');
} catch (error) {
  console.log('error occured:', error);
}
