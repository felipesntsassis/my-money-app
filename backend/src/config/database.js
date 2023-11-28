const { mongo } = require('mongoose');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true});
