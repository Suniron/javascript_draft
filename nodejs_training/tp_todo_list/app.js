/* 
    Todo: 
        - Stoquer la liste de façon perenne: elle ne reste pas après relancement du serveur.
        - Améliorer la fiabilité de la suppression dans la liste (si deux éléments écrits pareil par exemple.)
            -> Remplacer par un dict ou un nombre != est attribué chaque entré, sorte d'identifiant.
*/

// Importer express:
var express = require('express');

// Créer un objet express:
var app = express();

// Créer et configurer l'objet session:
app.use(require('express-session')({
    name: 'todoListTP', // nom du cookie
    secret: '343ji43j4n3jn4jk3n' // signature pour les cookies
}));

// Créer et configurer l'objet body-parser:
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GESTION DES ROUTES:
// ROUTES GET:
app.get('/todo', function(req, res){
    // COMPTEUR DE VUES:
    // Si le compteur n'éxiste pas:
    if (!req.session.count) {
        // Initialiser le compteur à 0:
        req.session.count = 0;
    }
    // Incrémenter le compteur de 1:
    req.session.count += 1;

    // TODO LIST:
    // Si la liste n'éxiste pas:
    if (!req.session.todoList) {
        // Initialiser la liste vide:
        req.session.todoList = [];
    }

    // Charger la template associée:
    res.render('todolist.ejs', {todoList:req.session.todoList, count:req.session.count});
});

// ROUTES POST:
app.post('/todo', function(req, res) {

    // Gérer l'ajout d'un élément:
    if (req.body.newTodo) {
        // Ajouter l'élément à la liste:
        req.session.todoList.push(req.body.newTodo);
        // Charger la template associée:
        res.render('todolist.ejs', {todoList:req.session.todoList, count:req.session.count});
    }
    // Gérer la suppression d'un élément:
    if (req.body.delTodo) {
        // Supprimer l'élément de la liste (Todo: voir gestion doublon)
        req.session.todoList.splice(req.session.todoList.indexOf(req.body.delTodo), 1);
        // Charger la template associée:
        res.render('todolist.ejs', {todoList:req.session.todoList, count:req.session.count});
    }
});

// Ecouter sur le port 8080:
app.listen(8080);