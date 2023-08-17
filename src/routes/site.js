const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// Tuyến đường sẽ đi từ trên xuống hoặc từ phải qua
router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
