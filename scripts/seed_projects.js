var db = require('../database.js');
var fs = require("fs");

// Get content from file
var contents = fs.readFileSync("./test/fixtures/projects.json");
// Define to JSON type
var seed_data = JSON.parse(contents);

projects = seed_data.projects;
addresses = seed_data.addresses;
console.log(seed_data.projects);
console.log(seed_data.addresses);

function seed() {
  //seed projects
  projects.forEach(function(project) {
    db.knex('projects').insert({
      name: project.name,
      description: project.description,
      goal: project.goal
    }).then(function() {
      // log new project data
      console.log('New project created:');
      console.log('  name: ' + project.name);
      console.log('  description: ' + project.description);
      console.log('  goal: ' + project.goal);
    }).catch(console.log);
  });

  //seed addresses
  addresses.forEach(function(address) {
    db.knex('addresses').insert({
      project_id: address.project_id,
      token: address.token,
    }).then(function() {
      // log new address data
      console.log('New address created:');
      console.log('  project_id: ' + address.project_id);
      console.log('  token: ' + address.token);
    }).catch(console.log);
  });
}

seed();