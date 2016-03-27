var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Food', {
    name: {
        type: String,
        default: ''
    },
    price :{
        type: Number,
        default: 0
    },
    priority:{
        type: Number,
        default: 0
    }
});