// module.exports = function(){

//   process.stdout.write(`${process.cwd()}`);
//   process.stdout.write('\nprompt > ');

// }

module.exports = (done) => {
  done(`${process.cwd()}`)
}
