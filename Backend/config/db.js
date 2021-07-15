const mongose = require('mongoose');
require('dotenv').config({path:'variables.env'});

const conectarDB = async () => {
try {
    await mongose.connect(process.env.DB_MONGO,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useFindAndModify:false
    })
    console.log('todo bone');
} catch (error) {
             console.log(error);
             process.exit(1) //detenemos el app en caso de error
         }
}

module.exports = conectarDB;