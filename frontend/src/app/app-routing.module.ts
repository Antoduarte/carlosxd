import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'product', component:ProductComponent},
  {path:'editar-producto/:id', component:ProductComponent},
  {path:'list-product', component:ListProductsComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
