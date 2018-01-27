var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Pupil  = module.exports = mongoose.model('pupil', new Schema({
    last_name: {
        type: String,
        required : [true, 'Name field is required']
    },

    first_name: {
        type: String,
    },

    middle_name: {
        type: String,
    },

    phone: {
        type: String,
    },

    school: {
        type: String,
    }, 

    to_offer: {
        type: String,
    },

    parent_fname: {
        type: String,
    },

    parent_lname: {
        type: String,
    }, 

    birthday:{
        type: Date,
    }, 

    status: {
        type: String,
    },

    when_to_call:{
        type: Date,
    }

}), 'pupils');

module.exports.Pupil;