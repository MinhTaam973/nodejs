const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// Tuyến đường sẽ đi từ trên xuống hoặc từ phải qua
router.get('/:slug', courseController.show);

module.exports = router;
