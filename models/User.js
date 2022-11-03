const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama: {
        type : String,
        required: [true, "Silahkan isiskan nama"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Silahkan isikan email"],
        unique: true,
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'silahkan isikan email']
    }
})

module.exports = mongoose.model('User', UserSchema)