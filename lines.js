var through = require('through');
var split = require('split');
var aux = 0;
var tr = through(function (line) {
  if (aux % 2 === 0)
    this.queue(line.toString().toLowerCase() + '\n');
  else
    this.queue(line.toString().toUpperCase() + '\n');
  aux += 1;
});

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);
