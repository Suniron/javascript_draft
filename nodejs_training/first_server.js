// Appeler la bibliothèque http:
var http = require('http');
// Appeler le module url:
var url = require('url');

// Créer le serveur:
var server = http.createServer(function(req, res) {
  var page = url.parse(req.url).pathname;
  console.log("Request for "+page);
  if (page === '/html'){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(
    '<!DOCTYPE html>'+
    '<html>'+
    '    <head>'+
    '        <meta charset="utf-8" />'+
    '        <title>Ma page Node.js !</title>'+
    '    </head>'+ 
    '    <body>'+
    '     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
    '    </body>'+
    '</html>'
    );
  }else if (page === '/test') {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('Page de test !');
  }else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write("Page introuvable, erreur 404 :'( ...");
  }
  // Terminer la requête:
  res.end();
});
server.listen(8080);