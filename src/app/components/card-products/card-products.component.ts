import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProducts } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss'],
})
export class CardProductsComponent implements OnInit, OnChanges {
  @Input() selectCategory = '';
  select = '';
  products: IProducts[] = [];
  showState = false;
  showIndex = 0;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.listProducts;
  }

  ngOnChanges(): void {
    this.select = this.selectCategory;
  }

  showDetailProduct(index: number) {
    this.showIndex = index;
    this.showState = !this.showState;
  }

  goPageShop(price: number, name: string) {
    this.router.navigate(['/shop', price, name]);
  }
}
