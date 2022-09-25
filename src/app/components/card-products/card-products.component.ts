import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IProducts } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss'],
})
export class CardProductsComponent implements OnInit, OnChanges {
  @Input() selectCategory: string = '';
  select: string = '';
  products: IProducts[] = []
  showState:boolean = false;
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.listProducts
  }

  ngOnChanges(): void {
    this.select = this.selectCategory
  }

  showProduct(){
    this.showState = !this.showState;

  }

}
