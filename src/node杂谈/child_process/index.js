const {
    exec,
    execFile,
    fork,
    spawn,
} = require('child_process');


async function processExec() {
    console.log('=================exec=====================');
    /*
      exec 参数 command 字符串由 shell 直接处理
    * */
    await exec('ls -al', {
        encoding: 'utf8',
    }, (error, stdout, stderr) => {
        if (error) {
            console.error('exec Error:', error);
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}

async function processExecFile() {
    execFile('node', ['--version'],
        (error, stdout, stderr) => {
            if (error) {
                throw error;
            }
        });
};

async function processFork() {
    /*
      fork 是 spawn 的一个特例
    * */
    execFile('node', ['--version'],
        (error, stdout, stderr) => {
            if (error) {
                throw error;
            }
        });
};

async function processSpawn() {
    spawn('la', ['-a', '-l'],
        (error, stdout, stderr) => {
            if (error) {
                throw error;
            }
        });
};

processExec();