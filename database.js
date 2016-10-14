'use strict';

var config = require('./config.js');

module.exports = {
	// database connection
	knex :  require('knex')({
		client: 'mysql',
		connection: config.dbOptions
	}),
} // closing database module.exports

// create user table
module.exports.knex.schema.createTableIfNotExists('users', function(table) {
	table.increments('id');
	table.string('username');
	table.string('password');
	table.string('email');
}).catch(console.log);

// create projects table
module.exports.knex.schema.createTableIfNotExists('projects', function(table) {
	table.increments('id');
	table.string('name');
	table.string('description');
	table.integer('goal');
}).catch(console.log);

// create addresses table
module.exports.knex.schema.createTableIfNotExists('address', function(table) {
	table.increments('id');
	table.integer('project_id');
	table.string('token');
}).catch(console.log);

