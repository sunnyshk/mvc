const router = require('./index');

const express = require('express');

const app = express();

app.use(express.json());

app.use(router);

const connect = require('./configs/db');

app.listen(5000, async()=>{
    try {
        await connect();
        console.log('Listening on port 5000')
    } catch (error) {
        console.log(error);
    }
});