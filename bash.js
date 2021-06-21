const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

  
  process.stdout.write('prompt > ');
  process.stdin.on('data', (data) => {
      input = data.toString().trim();
      
      // for CAT
      if(input.includes('cat')) {
        let inputArr = input.split(' ');
        let fileName = inputArr[1];
        cat(fileName);
      }

      //for LS
      if (input === 'ls') {
        ls();
      }

      //for PWD
      if (input === 'pwd'){
        pwd();
      }

    })
  