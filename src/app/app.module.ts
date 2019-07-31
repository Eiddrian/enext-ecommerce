import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product-box/product-box.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
