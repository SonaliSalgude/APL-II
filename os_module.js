const os = require('os');

const architecture = os.arch();
console.log('System Architecture:', architecture);

const platform = os.platform();
console.log('Operating System Platform:', platform);

const hostname = os.hostname();
console.log('Hostname:', hostname);

const totalMemory = os.totalmem();
console.log('Total Memory:', totalMemory, 'bytes');

const freeMemory = os.freemem();
console.log('Free Memory:', freeMemory, 'bytes');

const uptime = os.uptime();
console.log('System Uptime:', uptime, 'seconds');

const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:', networkInterfaces);

const cpus = os.cpus();
console.log('CPU Information:', cpus);

const homeDir = os.homedir();
console.log('Home Directory:', homeDir);

const tmpDir = os.tmpdir();
console.log('Temporary Directory:', tmpDir);

const osType = os.type();
console.log('Operating System Type:', osType);

const osRelease = os.release();
console.log('Operating System Release:', osRelease);
