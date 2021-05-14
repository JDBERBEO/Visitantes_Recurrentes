const { Schema, model } = require('mongoose');
//const QueryString = require('qs');

const Visitor = new Schema({
    name : {
        type: String,
        default: 'Anónimo',
        // unique: true,
},
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    count : {
        type: Number,
        default: 0,
    },
})

module.exports = model('Visitor', Visitor)