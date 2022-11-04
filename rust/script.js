const fs = require('fs');
const path = require('path');

// import fs from 'fs';
// import path from 'path';

fs.readdir('./src/solutions', { withFileTypes: true }, (err, files) => {
  if (err) {
    return;
  }

  const questions = files
    .map((file) => {
      const [fullName] = file.name.split('.');
      const name = fullName.split('_');
      const id = name.pop();
      return [id, name.join(' ')];
    })
    .filter(([id, name]) => !isNaN(Number(id)) && !!name)
    .sort((a, b) => {
      const numA = parseInt(a[0]);
      const numB = parseInt(b[0]);
      return numA - numB;
    })
    .map(([id, name]) => {
      return `${id}. ${name}`;
    });

  fs.writeFileSync('./README.md', questions.join('\n'));
});
