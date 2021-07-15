import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/modules/product.module';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
Form:FormGroup;
product:Product;
title = "Agrega un Producto";
button = "guardar";
id:string | null;
  constructor(private fb:FormBuilder,
               private route:Router,
                private toastr:ToastrService,
                private productservice:ProductsService,
               private a_route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.Form = this.fb.group({
    nombre: ['', Validators.required],
    categoria: ['', Validators.required],
    descripcion: ['', Validators.required],
    precio: ['', Validators.required],
    });
    this.id = this.a_route.snapshot.paramMap.get('id');
    this.esEditar();
  }
 
  agregar(){
    // CREAMOS LA DATA DE PRODUCTO
    this.product ={
      nombre     :this.Form.get('nombre').value,
      categoria  :this.Form.get('categoria').value,
      descripcion:this.Form.get('descripcion').value,
      precio     :this.Form.get('precio').value
    
    }
    if (this.id !== null) {
      // ACTUALIZAMOS EL PRODUCTO
      this.productservice.actualizarProducto(this.id,this.product).subscribe(data =>{
        this.toastr.success('Producto Editado', 'Editar producto');
      
        this.route.navigate(['/list-product']);
      }, error =>{
        this.toastr.error(error, 'error');  });
       }
    // AGEGAMOS EL PRODUCTO
      else{
   
      this.productservice.guardarProducto(this.product).subscribe(data =>{
        this.toastr.success('Producto Agregado', 'Agregar producto');
      
            this.route.navigate(['/list-product']);
      
      
      }, error =>{
        this.toastr.error(error, 'error');
      } );
    }
 
   
  }

  esEditar(){
    if(this.id !== null){
      this.title= "Editar Producto";
      this.button= "Editar";
      this.productservice.obtenerProducto(this.id).subscribe(data =>{
     this.Form.setValue({
        nombre : data.nombre,
        categoria : data.categoria,
        descripcion : data.descripcion,
        precio : data.precio
     });
      });
    }
  }

}
