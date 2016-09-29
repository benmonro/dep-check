#!/usr/bin/env node

import {find} from 'find-in-files';
import program from 'commander';


const runDepCheck = pkg =>
    [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)]
        .forEach(function(file) {
            find(file, path[0])
                .then(function(results) {
                    // var count = Object.values(results).reduce((prev, next) => prev + next.count, 0);
                    console.log(file, Object.keys(results).length);
                })
        });

program
    .version(require('../package.json').version);
program.parse(process.argv);



let path = program.args;
console.log('the path is ', process.cwd());

let pkg = require(`${process.cwd()}/package.json`);
runDepCheck(pkg);


