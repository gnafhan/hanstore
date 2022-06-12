const mongoose = require('mongoose')
let categorySchema = mongoose.Schema({
    name : {
        type : 'string',
        require : [true, 'Nama kategori harus diisi']
    }
}, { timestamps : true})

module.exports = mongoose.model('Category', categorySchema)