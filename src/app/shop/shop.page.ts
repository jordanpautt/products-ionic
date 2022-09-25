import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
price:number = 0;
name:string= "";
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.price = +this.router.snapshot.paramMap.get('price');
    
    this.name = this.router.snapshot.paramMap.get('name');
    console.log(this.name)

  }

}
