const cprocess = require('child_process')
const path = require("path")
let entryDir = process.argv[process.argv.length-1]
// let cmd = 'npm run startdev -- --env.name=' + entryDir
const ls = cprocess.spawn('npm.cmd', ['run', 'startdev','--',`--env.name=${entryDir}`]);
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});
