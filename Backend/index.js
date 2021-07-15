const express = require('express');
const cors = require('cors');

const conectarDB = require('./config/db');
// creamos el servidor
const app = express();

// conectamos a la base de datos
conectarDB();
// cors
app.use(cors());
//hacemos referencia al modelo producto
app.use(express.json());
app.use('/api/product', require('./routes/create-product'));

/*
app.get('/', (req, resp) => {
    resp.send('hola'); })
*/ 


app.listen(4000, () => {
console.log('si sirve');
})