const express = require('express');
const {shortenURL,getURL} = require('../Controller/urlController');

const router = express.Router();


router.post('/url/shorten',shortenURL);

router.get('/:urlCode',getURL);


module.exports=router;