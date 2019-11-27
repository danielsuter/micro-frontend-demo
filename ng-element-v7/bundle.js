const concat = require('concat-files');
const replace = require('replace-in-file');


concat([
    './dist/ng-element-v7/runtime.js',
    './dist/ng-element-v7/scripts.js',
    './dist/ng-element-v7/es2015-polyfills.js',
    './dist/ng-element-v7/main.js',
], './dist/ng7bundle.js', (error) => {
    if (error) throw error;
    console.log('Finished concatting files...');

    replace({
        files: './dist/ng7bundle.js',
        from: /webpackJsonp/g,
        to: 'webpackJsonpV7',
    }).then(() => {
        console.log('done');
    });
});