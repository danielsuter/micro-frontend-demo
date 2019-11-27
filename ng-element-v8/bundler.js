const concat = require('concat-files');
const replace = require('replace-in-file');


concat([
    './dist/ng-element-v8/scripts.js',
    './dist/ng-element-v8/runtime-es2015.js',
    './dist/ng-element-v8/polyfills-es2015.js',
    './dist/ng-element-v8/main-es2015.js',
], './dist/ng8bundle.js', (error) => {
    if (error) throw error;
    console.log('Finished concatting files...');

    replace({
        files: './dist/ng8bundle.js',
        from: /webpackJsonp/g,
        to: 'webpackJsonpV8',
    }).then(() => {
        console.log('done');
    });
});