const db = require('./app');
const express = require('express');
const client = require("./mongo_client");
const app = express();
const port = process.env.PORT || 4000;

//that's a test object to send in response
const obj = {
    "appid": 216938,
    "name": "Pieterw test app76 ( 216938 )"
};

app.get('/', (req, res) => {

    //that's to allow cors
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(obj);
});

app.get('/db',(req, res)=>{
    db()
        .catch((err) => console.log(err))
        .finally(() => client.close());
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send('Connecting to Mongo Atlas');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});