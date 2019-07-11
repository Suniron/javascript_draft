var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function(message, number){
    console.log(message+ ' Il vous reste '+number+' vies.');
});

jeu.emit('gameover', 'Vous avez perdu !', 3);