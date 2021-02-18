const childProcess = require('child_process');

const tempProjectName = 'demo'

childProcess.execSync(
  `tar -zcvf ${tempProjectName}.zip ${tempProjectName}`,
  {
    cwd: './public/pdf'
  }
);
