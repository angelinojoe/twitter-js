var chalk = require('chalk');
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball')

//ASK ABOUT VOLLEYBALL in Q&A
app.use(volleyball);

// app.use('/', function(req, res, next){
//     console.log(chalk.blue(req.method, req.originalUrl));
//     next();
// });

app.get('/', function(req, res){
    res.send('hi');
});

app.get('/news', function(req, res){
    res.send('NEWS');
});



app.listen(3000, function(){
    console.log('server listening');
});
