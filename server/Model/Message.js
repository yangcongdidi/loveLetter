const mongoose =require('../middleware/database')

const message = mongoose.Schema({
    phone:String,
    name:String,
    content:String,
    updateTime:Number,
    dianzan:Number,
    huifuNum:Number,
    information:{
        recipients:String,
        phone:Number,
        address:String,
        date:String,
    },
    huifu:[{
        name:String,
        message:String,
        date:String,
        updateTime:Number
    }]
})

var messageModel = mongoose.model('messageModel', message);
module.exports = messageModel