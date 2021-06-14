const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: { type: String },
    age: { type: String },
    city: { type: String },
    mail: { type: String },
    phone: { type: String }
    // ,
    // picturs:[{
    //     type:mongoose.Schema.Types.ObjectId,ref:'Picture'
    // }]
})
module.exports = mongoose.model('User', UserSchema)