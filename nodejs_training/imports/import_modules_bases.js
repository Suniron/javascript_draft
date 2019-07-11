// Importer des modules du noyeau de Node.js:
var http = require('http');  // Fait appel à http.js
var url  = require('url');   // Fait appel à url.js

// Importer ses propres modules:
var test  = require('./test');    // Fait appel à test.js (même dossier)
var test2 = require('../test2');  // Fait appel à test2.js (dossier parent)
var test3 = require('test3');     // Fait appel à test3.js (sous-dossier node_modules)
// info: Si le sous-dossier node_modules n'éxiste pas, il est cherché dans les dossiers parents.
