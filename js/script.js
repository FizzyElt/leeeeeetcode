import fs from 'fs';
import path from 'path';

fs.readdir('./', { withFileTypes: true }, (err, files) => {
  if (err) {
    return;
  }

  const questions = files
    .filter((file) => {
      return file.isDirectory();
    })
    .map((file) => file.name.split('_'))
    .filter(([id, name]) => !isNaN(Number(id)) && !!name)
    .sort((a, b) => {
      const numA = parseInt(a[0]);
      const numB = parseInt(b[0]);
      return numA - numB;
    })
    .map(([id, name]) => {
      return `${id}. ${name.split('-').join(' ')}`;
    });

  fs.writeFileSync('./README.md', questions.join('\n'));
});
