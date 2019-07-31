import { Component, OnInit } from '@angular/core';
import { Potion } from '../model/potion';
import { ProductService } from '../service/product-box.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {

  private potions: Potion[];
  private potion: Potion;
  private img_path= 'https://raw.githubusercontent.com/enext-wpp/challenges/master/challenge-one/src/assets/images/products/';

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => {
        this.potions = Object.values(data);
      });
  }

  selectPotion(potion: Potion) {
    this.potion = potion;
  }

}
