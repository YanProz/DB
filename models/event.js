var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Event = module.exports = mongoose.model('event', new Schema({
    value: {
        type: String,
    },

    teacher: {
        type: String,
    },

    when_to_call:{
        type: Date,
    }

}), 'events');

module.exports.Event;