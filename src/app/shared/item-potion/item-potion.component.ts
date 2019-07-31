import { Component, OnInit } from '@angular/core';
import { Potion } from 'src/app/model/potion';
import { ProductService } from 'src/app/service/product-box.service';

@Component({
  selector: 'app-item-potion',
  templateUrl: './item-potion.component.html',
  styleUrls: ['./item-potion.component.css']
})
export class ItemPotionComponent implements OnInit {

  private potions: Potion[];
  private potion: Potion;
  private img_path = 'https://raw.githubusercontent.com/enext-wpp/challenges/master/challenge-one/src/assets/images/products/';

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

