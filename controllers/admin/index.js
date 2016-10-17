'use strict';

module.exports = function(app) {
  app.get('/admin', function(req, res) {
    res.render('admin/index');
    // res.send('You are on the /admin page.');
  });
}