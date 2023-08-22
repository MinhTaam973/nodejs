const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /home
    async index(req, res, next) {
        //Promises
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //[GET] :Site/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
