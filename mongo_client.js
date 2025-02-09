//import the MongoClient and the uri variable with the connection string
// Require MongoDB language driver
const {MongoClient} = require('mongodb');
const uri = require('./atlas_uri');

console.log('The connection string: ',uri);

//create an instance of MongoClient class and pass the uri variable with the connection string
//export the instance into the application entry point
module.exports = client = new MongoClient(uri);