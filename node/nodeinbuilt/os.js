var os = require('os');
//import os from 'os';

console.log(os.platform())
console.log(os.arch())

var cpu = os.cpus()
console.log(`You are using ${os.platform()} OS with ${os.arch()} bits with ${cpu.length} core system`)

console.log(os.freemem())