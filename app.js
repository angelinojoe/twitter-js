//var chalk = require('chalk');
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
//put routes in a module and register as middleware
const routes = require('./routes/');

//ASK ABOUT VOLLEYBALL in Q&A
app.use(volleyball);

//all routes now sent to /routes/index.js
app.use('/', routes);
app.use(express.static('public'));



// app.use('/', function(req, res, next){
//     console.log(chalk.blue(req.method, req.originalUrl));
//     next();
// });

//USING NUNJUCKS TEMPLATE IN VIEWS/INDEX.HTML
// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };

//takes an extension and a function to render that extensions
app.engine('html', nunjucks.render);
//set default view engine to html
app.set('view engine', 'html');
//Tell nunjucks that your templates live at path and flip any feature on or off with the opts hash
nunjucks.configure('views', {noCache: true});
//Do you need an app render and a nunjucks render
nunjucks.render('index.html', function (err, output) {
    if (err) console.log(err);
    console.log(output);
});

app.listen(3000, function(){
    console.log('server listening');
});
