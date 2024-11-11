const repl = require('repl');

const replServer = repl.start({
  prompt: 'MyREPL> ',  
});

replServer.defineCommand('sayhello', {
  help: 'Say hello with your name',
  action(name) {
    console.log(`Hello, ${name}!`);
    this.displayPrompt(); 
  }
});

replServer.on('exit', () => {
  console.log('Exiting REPL...');
  process.exit();
});
