const chalk = require('chalk');

// console.log(chalk.green('Success!'));

// console.log(chalk.bold.red.inverse('Error'));

// console.log(process.argv[2]);

const command = process.argv[2];

// console.log(process.argv);

if (command === 'add') {
  console.log('Adding note!');
} else if (command === 'remove') {
  console.log('Removing note!');
}
