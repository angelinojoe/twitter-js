const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true});
});

// router.get('/stylesheets/style.css', function (req, res) {
//   res.sendFile( '/Users/JoeAngelino/desktop/fullstack/juniorphase/twitter-js/public/stylesheets/style.css' );
// });

router.get( '/users/:name', function (req, res) {

  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweets, showForm: true, name: req.params.name});
});


router.get( '/tweets/:id', function (req, res) {
  var id = Number(req.params.id);
  var tweets = tweetBank.find({id: id});
  res.render( 'index', { tweets: tweets , showForm: true} );
});

router.post('/tweets', function(req, res) {
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name, text);
	res.redirect('/');

});

module.exports = router;