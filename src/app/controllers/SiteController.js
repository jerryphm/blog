class SiteController {
  constructor() {}

  index(req, res) {
    res.render("home");
  }
}

module.exports = new SiteController();