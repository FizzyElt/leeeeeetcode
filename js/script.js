import fs from 'fs';
import path from 'path';

fs.readdir('./', { withFileTypes: true }, (err, files) => {
  if (err) {
    return;
  }

  files.forEach((file) => {
    if (file.isDirectory()) {
      const oldPath = path.join('.', file.name);
      const [id, ...rest] = file.name.split('-');
      const newPath = path.join('.', `${id}_${rest.join('-')}`);

      fs.renameSync(oldPath, newPath);
    }
  });
});
