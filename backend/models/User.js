const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: String,
    dob: String,
    phone: Number,
    email: String,
    linkedin_profile: String,
    age: Number,
    about: String,
    //  user:
        // {
        //     type: mongoose.Schema.Types.ObjectId,
            // ref: 'User'
        // }
    
})

module.exports.User = mongoose.model('User',schema,'User')