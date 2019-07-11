var direBonjour = function() {
    console.log('Bonjour !');
}

var direByeBye = function() {
    console.log('Bye bye !');
}

var direLeParametre = function(text) {
    console.log('Voici le paramètre: "'+text+'"');
}

exports.direBonjour = direBonjour;
exports.direByeBye = direByeBye;
exports.direLeParametre = direLeParametre;