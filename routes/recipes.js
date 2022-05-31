var express = require('express');
var router = express.Router();
var recipes = require('../recipes.json')
var newRecipes = require('../recipes2.json')

router.get('/', function(req, res) {
   const { page, limit } = req.query;
  
   if(page == undefined && limit == undefined) {
      res.send(recipes.slice(0, 3));
   } else if (page == undefined) {
      res.send(recipes.slice(1*limit-limit, limit));      
   } else if (limit == undefined) {
      res.send(recipes.slice(page*3-3, page*3));
   } else {
      res.send(recipes.slice(page*limit-limit, page*limit));
   }
})

router.get('/shopping-list', function(req, res) {
   const { ids } = req.query;

   if (ids == undefined) {
      return res.status(400).end()
   }

   const separatedIds = ids.split(',');

   let ingredients = [];
   for(let i = 0; i < separatedIds.length; i++) {
      newRecipes.filter(function(item, index) {
         if(separatedIds[i] == item.id) {
            ingredients = ingredients.concat(item.ingredients)
         }
      })
   }

   if (ingredients.length < 1) {
      return res.status(404).send('NOT_FOUND');
   }

   return res.send(ingredients);
});

module.exports = router;
