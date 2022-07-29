const mongoose = require('mongoose')

const cozinhaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    expire: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('inputs', cozinhaSchema)
