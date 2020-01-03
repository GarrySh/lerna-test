const first = require('@monorepo/first');
const second = require('@monorepo/second');

const app = () => 'Hi from app';

const main = () => {
  console.log('app', app());
  console.log('first', first());
  console.log('second', second());
};

main();

module.exports = { app, main };

