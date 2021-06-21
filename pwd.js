process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  data = data.toString().trim();
  if (data === 'pwd') {
    process.stdout.write(`Current directory: ${process.cwd()}`);
  }

  process.stdout.write('\nprompt > ');
});
