const mongoose = require('mongoose');

const userScheema = new mongoose.Schema({
    device:{
        type: String,
        required: true
    },
    ip_address:{
        type: String,
        required: true
    },
    counts: {
        type: Number,
        required: true
    },
},{ timestamps: true });


const Visitor = mongoose.model('visitors',userScheema);

module.exports = Visitor;