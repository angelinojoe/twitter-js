//var chalk = require('chalk');
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

//ASK ABOUT VOLLEYBALL in Q&A
app.use(volleyball);

// app.use('/', function(req, res, next){
//     console.log(chalk.blue(req.method, req.originalUrl));
//     next();
// });

//USING NUNJUCKS TEMPLATE IN VIEWS/INDEX.HTML
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

//takes an extension and a function to render that extensions
app.engine('html', nunjucks.render);
//set default view engine to html
app.set('view engine', 'html');
//Tell nunjucks that your templates live at path and flip any feature on or off with the opts hash
nunjucks.configure('views', {noCache: true});
//Do you need an app render and a nunjucks render
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

app.get('/', function(req, res){
    res.render('index', locals );
});

app.get('/news', function(req, res){
    res.send('NEWS');
});



app.listen(3000, function(){
    console.log('server listening');
});
