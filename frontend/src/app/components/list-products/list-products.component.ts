import {
  Component,
  OnInit
} from '@angular/core';
import {
  ToastrService
} from 'ngx-toastr';
import {
  Product
} from 'src/app/modules/product.module';
import {
  ProductsService
} from 'src/app/services/products.service';
import {
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private _products: ProductsService,
    private tostr: ToastrService
  ) {}

  products: Product[] = [];

  buscar: boolean = false;
  Fill = "";
  fecha1: string ;
  fecha2: string;
  btn:boolean = false;

  ngOnInit(): void {
    this.getproducts();
 
  }

  getproducts() {
    this._products.getProduct().subscribe(data => {
      this.products = data;
      console.log(data)
    });
    this.btn = false
  }

  eliminar(id: any) {
    this._products.deleteProduct(id).subscribe(data => {
      this.tostr.info('Producto eliminado', 'eliminar');
      this.getproducts()
    }, error => {
      console.log(error);
    });
  }

  Exportar() {
    this._products.ExportExel(this.products);
  }
  aver() {

    console.log(this.fecha1)
    console.log(this.fecha2)

    const resul = this.products.filter
    (fecha => fecha.fechaCreacion.valueOf() > this.fecha1.valueOf()
        &&    fecha.fechaCreacion.valueOf() < this.fecha2.valueOf())
       
        if(resul.length === 0){
          this.tostr.error('No hay resultados', 'Filtrar por fechas');
        } else{
          this.products = resul;
          this.btn = true
        }
   
  }
}
