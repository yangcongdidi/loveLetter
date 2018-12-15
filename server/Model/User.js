const mongoose =require('../middleware/database')

const user = mongoose.Schema({
    phone:String,
    name:String,
    dianzan:Number,
})

var userModel = mongoose.model('userModel', user);
module.exports = userModel