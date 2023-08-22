const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// Tuyến đường sẽ đi từ trên xuống hoặc từ phải qua
router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
