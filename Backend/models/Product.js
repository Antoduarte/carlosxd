const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  nombre:{
                type:String,
                require
            },
       
  categoria:{
                 type:String,
                 require
            },
  descripcion:{
                 type:String,
                 require
            },
  precio:{
                 type:Number,
                 require
            },
  fechaCreacion:{
                 type:Date,
                 default:Date.now()
            }
});

module.exports = mongoose.model('producto', productSchema);