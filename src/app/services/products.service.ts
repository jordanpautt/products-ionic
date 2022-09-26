import { Injectable } from '@angular/core';
import { IProducts } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsList: IProducts[] = [
    {
      title: 'Floreros',
      img: '../../assets/img/floreros.jpg',
      category: 'hogar',
      description: `Floreros fabricados a mano con diseño precolombino,vienen en 2 colores bronce y dorado`,
      price: 900000,
    },
    {
      title: 'Vasija',
      img: '../../assets/img/vasija.jpeg',
      category: 'hogar',
      description:
        'Vasija de barro hecha a mano inspirada en la cultura indigena',
      price: 200000,
    },
    {
      title: 'Vasija negra artesanal',
      img: '../../assets/img/vasijanegra.jpg',
      category: 'hogar',
      description:
        'Vasija negra artesanal con detalles hechos a mano y una base de laminas de oro',
      price: 300000,
    },
    {
      title: 'Vasijas de colores',
      img: '../../assets/img/vasijasdecolores.jpg',
      category: 'hogar',
      description: 'Vasija de colores pintadas a mano para uso multiple',
      price: 80000,
    },
    {
      title: 'Sombrero Volteado',
      img: '../../assets/img/sombrero.jpg',
      category: 'variado',
      description:
        'Sombrero volteado tejido a mano por expertos artesanos en cordoba y sucre',
      price: 5000000,
    },
    {
      title: 'Hamaca Azul',
      img: '../../assets/img/hamaca.jpg',
      category: 'variado',
      description: 'Hamaca artesanal tejida a mano por mujeres emprendedoras',
      price: 800000,
    },
    {
      title: 'Rinoceronte en madera',
      img: '../../assets/img/rinoceronte.jpg',
      category: 'variado',
      description:
        'Rinoceronte tallado y pintado en madera de manera artesanal',
      price: 90000,
    },
    {
      title: 'Pulseras',
      img: '../../assets/img/pulseras.jpg',
      category: 'variado',
      description:
        'Pulseras tejidas y diseñadas por indigenas de la sierra nevada de Santa Marta',
      price: 50000,
    },
  ];

  constructor() {}

  public get listProducts(): IProducts[] {
    return this.productsList;
  }
}
