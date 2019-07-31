import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPotionComponent } from './list-potion/list-potion.component';
import { ItemPotionComponent } from './item-potion/item-potion.component';
import { ProductService } from '../service/product-box.service';

@NgModule({
  declarations: [ListPotionComponent, ItemPotionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListPotionComponent,
    ItemPotionComponent
  ],
  providers: [
    ProductService
  ],
})
export class SharedModule { }
