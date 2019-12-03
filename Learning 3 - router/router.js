var router = require('express').Router();
var main = require('./main');

router.route('/get').get(main.get);

module.exports = router;