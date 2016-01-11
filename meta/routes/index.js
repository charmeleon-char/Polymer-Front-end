var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get('/view', function(req, res, next) {
  mongoose.model('Employes').find(function(err,Employes) {
    res.send(Employes);
  });
});

module.exports = router;
