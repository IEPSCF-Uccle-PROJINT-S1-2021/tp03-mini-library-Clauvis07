const express    = require('express'); //import du module
const path       = require('path');
const books     = require('./books'); //import de la classe home
const logger     = require('morgan');
const app        = express(); //cree le module
const bodyparser = require('body-parser');

app.set("view engine", "pug"); //on specifie aau routeur quelle view use
app.set("views", path.join(__dirname,"views")); //on precise le chemin complet de la vue

app.use('/static',express.static('public'));
app.use('/', books); // pr faire le lien entre le router et l'app principale
app.use(logger('dev'));
app.use(bodyparser.urlencoded({extended : false}));


app.listen(4242,()=>{
console.log(`Express js server listing on http://127.0.0.1:4242/`);
});
