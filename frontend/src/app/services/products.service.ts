import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../modules/product.module';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
 url ="http://localhost:4000/api/product/";
  
 getProduct():Observable<any>{
    return this.http.get(this.url);
  }
 
  deleteProduct(id:string):Observable<any>{
    return this.http.delete(this.url + id);
  }
  guardarProducto(producto:Product):Observable<any>{
    return this.http.post(this.url,producto);
  }
  obtenerProducto (id :string):Observable<any>{
    return this.http.get(this.url + id);
  }
  actualizarProducto(id:string, producto:Product):Observable<any>{
   return this.http.put(this.url+id, producto);
  }

  ////////export to excel ///////////
  ExportExel(data:Product[]){
    // create new excel work book
    let workbook = new Workbook();
    //add name to sheet
    let worksheet = workbook.addWorksheet("Crud data");
    //add column name
    let header=["fecha","Producto","Categoria","Descripcion", "precio"]
    let headerRow = worksheet.addRow(header);

    for (let x1 of data)
  {
    delete x1._id;

  let x2=Object.keys(x1);
  let temp=[]
  for(let y of x2)
  {
    temp.push(x1[y])
  }
  worksheet.addRow(temp)
   }
//set downloadable file name
let fname="Crud data"

//add data and file name and download
workbook.xlsx.writeBuffer().then((data) => {
  let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  fs.saveAs(blob, fname+'_'+new Date().toLocaleDateString()+'.xlsx');
});
  }
}


