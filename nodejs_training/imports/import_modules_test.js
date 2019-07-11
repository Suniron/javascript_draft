var monmodule = require('./monmodule');
var markdown = require('markdown').markdown;

monmodule.direBonjour();
monmodule.direLeParametre('Test !');

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));