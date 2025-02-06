const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const obj = {
    "appid": 216938,
    "name": "Pieterw test app76 ( 216938 )"
};

app.get('/', (req, res) => {
    res.send(obj);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});