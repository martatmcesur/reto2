var express = require('express');
var router = express.Router();

/*Página principal*/
router.get('/', function(req, res, next) {
  res.render('index');
});

/*Página de login*/
router.get('/login', function(req, res) {
  res.render('login');
});

/*Contacto*/
router.get('/contacto', function(req, res) {
  res.render('contacto');
});

/* Página de colección */
router.get('/coleccion', function(req, res) {
  res.render('coleccion');
});

module.exports = router;
