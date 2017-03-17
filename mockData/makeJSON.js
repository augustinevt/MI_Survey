module.paths.push('/usr/local/lib/node_modules');
var jsonfile = require('jsonfile');
var momentRandom = require('moment-random');



const output = [];

for (i = 0; i < 100000; i++) {
  output.push([{point: 12, doint: 12}])
}

jsonfile.writeFile('./jsonDemo.json', output, {spaces: 2}, (err) => {
  console.log(err)
})
