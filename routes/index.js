var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', function(req, res, next) {
  res.json({
    message: 'abrakadabra',
    data: {
      nama: 'Miftahul Fauza Ridhoi',
      kelas: 'XII TKJ 2',
      usia: 22
    }
  })
});

module.exports = router;
