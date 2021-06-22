const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

const done = (result) => {
  process.stdout.write(result);
  process.stdout.write('\nprompt > ');
}


process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  input = data.toString().trim();

  // for CAT
  if(input.includes('cat')) {
    let inputArr = input.split(' ');
    let fileName = inputArr[1];
    cat(fileName, done);
  }

  //for LS
  if (input === 'ls') {
    ls(done);
  }

  //for PWD
  if (input === 'pwd'){
    pwd(done);
  }
});
