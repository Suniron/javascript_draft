var express = require('express');

var app = express();

// ROUTES SIMPLES:
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil, que puis-je pour vous ?');
});

app.get('/sous-sol', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
});

app.get('/etage/1/chambre', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hé ho, c\'est privé ici !');
});

// ROUTES DYNAMIQUES:
app.get('/etage/:etagenum/chambre', function(req, res) { // Avec création d'un paramètre 'etagenum'
    res.setHeader('Content-Type', 'text/plain');
    if (parseInt(req.params.etagenum)) {
        res.end('Vous etes a la chambre de l\'etage numero' + req.params.etagenum); // Récupération du contenu de 'etagenum'
    } else {
        res.end('Vous croyez que c\'est un numero pour un etage ca: "' + req.params.etagenum+'" ? --\'');
    }
});

// ROUTE 404:
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Erreur 404: la page '+ req.url+' n\'existe pas.');
});

app.listen(8080);