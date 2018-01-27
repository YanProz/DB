var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Admin = module.exports = mongoose.model('Admin', new Schema({
    id: ObjectId,
    login:{type: String, unique: true},
    password:{ type: String}
}), 'admins');

