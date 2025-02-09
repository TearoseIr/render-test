//import the instance of MongoClient
const client = require('./mongo_client');

//for identifying the connection to the database
const dbname = 'bank';

//the function to connect to database
//Establishes a connection to the database using the MongoClient instance
const connectToDatabase = async ()=>{
    try{
        await client.connect();
        console.log(`Connected to the ${dbname} database`);

// list out all the databases in the cluster
        const dbs = await client.db().admin().listDatabases();
        console.table(dbs.databases);
    } catch (err){
        console.error(`Error connecting to the database: ${err}`);
    }
};

//the main function executes the connectToDatabase function
const main = async ()=>{
    try{
        await connectToDatabase();
    } catch (error) {
        console.error(error)
    } finally {
        await client.close()
    }
}

module.exports = main;
/*
//call the function to connect to database
main()
    .catch((err) => console.log(err))
    .finally(() => client.close());*/