const mongoose = require('mongoose');

const connect = () =>{
    return mongoose.connect(
        "mongodb+srv://sunnyshk:adminadmin@cluster0.zobmn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
};

module.exports = connect;