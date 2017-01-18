//var chalk = require('chalk');
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
//put routes in a module and register as middleware
const routes = require('./routes/');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//ASK ABOUT VOLLEYBALL in Q&A
app.use(volleyball);

//all routes now sent to /routes/index.js
app.use('/', routes);
app.use(express.static('public'));


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
