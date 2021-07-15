import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizarPipe } from './pipe/capitalizar.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//components
import { ProductComponent } from './components/product/product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule}  from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { FiltroPipe } from './pipes/filtro.pipe';
//collapse
import { CollapseModule } from 'ngx-bootstrap/collapse';
//datepiker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import localEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    CapitalizarPipe,
    ProductComponent,
    ListProductsComponent,
    NavbarComponent,
    HomeComponent,
    FiltroPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [{provide:LOCALE_ID, useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
