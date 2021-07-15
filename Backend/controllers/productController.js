const Product = require("../models/Product");

exports.createProduct = async (req, resp) =>{
try {
    let product;
    //creamos el producto
     product = new Product(req.body);
     await product.save();
     resp.send(product);

} catch (error) {
    console.log(error);
    resp.status(500).send('ocurrio un error');
}
}

exports.getProducts = async (req,resp) => {
try {
    let productos = await Product.find();
    resp.json(productos);

} catch (error) {
    console.log(error);
    resp.status(500).send('ocurrio un error');
   }
}

exports.updateProduct = async (req,resp) => {
    try {
        const {nombre,categoria,descripcion,precio} = req.body;
        let product = await Product.findById(req.params.id);
        console.log(product);
       if(!product){
           resp.status(404).json({msg:'El producto no existe'});
       }
       product.nombre = nombre;
       product.categoria = categoria;
       product.descripcion = descripcion;
       product.precio = precio;

       product = await Product.findOneAndUpdate({_id:req.params.id},product,{new:true});
        resp.json(product)
    } 
    
    catch (error) {
        console.log(error);
        resp.status(500).send('ocurrio un error');
       }
    }

    exports.getProduct= async (req,resp) => {
        try {
            let product = await Product.findById(req.params.id);
           
           if(!product){
               resp.status(404).json({msg:'El producto no existe'});
           }
         
          resp.json(product)
        } 
        
        catch (error) {
            console.log(error);
            resp.status(500).send('ocurrio un error');
           }
        }

        exports.deleteProduct = async (req,resp) => {
            try {
                let product = await Product.findById(req.params.id);
               
               if(!product){
                   resp.status(404).json({msg:'El producto no existe'});
               }
              await Product.findOneAndRemove({_id:req.params.id})
              resp.json({msg:'eliminado con exito'});
            } 
            
            catch (error) {
                console.log(error);
                resp.status(500).send('ocurrio un error');
               }
            }
       