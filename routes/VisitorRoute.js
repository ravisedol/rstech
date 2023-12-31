const express = require('express');
const router = express.Router();

const {create,getAll} = require('../controllers/VisitorController');

router.get('/all',getAll);
router.post('/create',create);

module.exports = router;
