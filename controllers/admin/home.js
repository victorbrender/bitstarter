'use strict';
var db = require('../../database.js');
var connect        = require('connect');
var methodOverride = require('method-override');

module.exports = function(app) {

	app.get('/projects', function(req, res) {
		console.log("in GET");
		db
			.knex
			.select()
			.table('projects')
			.then(function(projects) {
				res.render('admin/home', { projects: projects });
			}).catch(console.log);
	});

	app.post('/projects/', function(req, res) {
		console.log("in POST");
		db
			.knex
			.insert({ name: req.body.name, description: req.body.description, goal: req.body.goal})
			.table('projects')
			.catch(console.log);

		res.redirect('/projects');
	});

	app.use(methodOverride('_method'));
	app.delete('/projects/', function(req, res) {
		console.log("in DELETE");
		console.log(req.params);
		// db
		// 	.knex
		// 	.remove({ id: req.body.project_id })
		// 	.table('projects')
		// 	.catch(console.log);
			
		res.redirect('/projects');
	});

}
