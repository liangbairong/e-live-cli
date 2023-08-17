'use strict';
import {program} from 'commander'
import create from './create.js'
program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')


program.command('create')
    .description('create a project ')
    .action(function(){
        console.log('👽 👽 👽 '+'欢迎使用live-cli,轻松构建项目～🎉🎉🎉')
        create()
    })


program.parse(process.argv)
