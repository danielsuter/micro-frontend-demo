# Micro Frontends Demo
Demonstrating how to load multiple Angular versions and React.

## Project structure
**container-plain**
Container written with plain Java Script.  
**ng-element-v7**
Angular V7 Component.  
**ng-element-v8**
Angular V8 Component.

## Technical pitfalls
Angular bundling registers **jsonp** function globally. Thus a post processing is need to replace it. 
See bundler.js.

**zone.js** is missing in Angular 7 components. We need to import it manually in main.ts.
