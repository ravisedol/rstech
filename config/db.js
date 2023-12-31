const mongoose = require('mongoose');

async function db(url){
    return await mongoose.connect(url);
}

module.exports = db;