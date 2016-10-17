'use strict';
var db = require('../../database.js');

module.exports = function(app) {
  app.get('/admin', function(req, res) {
    db
      .knex
      .select()
      .table('projects')
      .then(function(projects) {
        if (projects.length == 0) {
          console.log("No projects");
          process.exit(1);
        } else {
          res.render('admin/home', { projects: projects });
        }
      }).catch(console.log);
  });
}
