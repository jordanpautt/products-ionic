import { Injectable } from '@angular/core';
import { IProducts } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsList: IProducts[] = [
    {
      title: 'Floreros',
      img: '../../assets/img/floreros.jpg',
      category: 'hogar',
      description: 'efhewfhwpf',
      precio: 1000000
    },
    {
      title: 'Vasija',
      img: '../../assets/img/vasija.jpeg',
      category: 'hogar',
      description: 'efhewfhwpf',
      precio: 200000
    },
    {
      title: 'Vasija negra artesanal',
      img: '../../assets/img/vasijanegra.jpg',
      category: 'hogar',
      description: 'efhewfhwpf',
      precio: 300000
    },
    {
      title: 'Vasijas de colores',
      img: '../../assets/img/vasijasdecolores.jpg',
      category: 'hogar',
      description: 'efhewfhwpf',
      precio: 80000
    },
    {
      title: 'Sombrero Volteado',
      img: '../../assets/img/sombrero.jpg',
      category: 'variado',
      description: 'efhewfhwpf',
      precio: 5000000
    },
    {
      title: 'Hamaca Azul',
      img: '../../assets/img/hamaca.jpg',
      category: 'variado',
      description: 'efhewfhwpf',
      precio: 800000
    },
    {
      title: 'Rinoceronte en madera',
      img: '../../assets/img/rinoceronte.jpg',
      category: 'variado',
      description: 'efhewfhwpf',
      precio: 90000
    },
    {
      title: 'Pulseras',
      img: '../../assets/img/pulseras.jpg',
      category: 'variado',
      description: 'efhewfhwpf',
      precio: 50000
    },
  ]

  constructor() { }
  
  public get listProducts():IProducts[]{
    return this.productsList;
  }
}
