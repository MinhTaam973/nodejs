class SiteController {
  // [GET] /home
  index(req, res) {
    res.render("home");
  }

  //[GET] :Site/:slug
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
