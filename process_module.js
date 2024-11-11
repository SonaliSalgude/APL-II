console.log('Process arguments:', process.argv);

console.log('Current working directory:', process.cwd());

console.log('Process ID:', process.pid);

console.log('Node.js version:', process.version);

console.log('Platform:', process.platform);

console.log('Environment Variables:', process.env);

process.on('exit', (code) => {
  console.log(`Process is exiting with code: ${code}`);
});

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error:', err);
  process.exit(1); 
});

console.log(nonExistentVariable); 
