import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  price = 0;
  name = '';
  alert = '';


  constructor(
    private router: ActivatedRoute,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.price = +this.router.snapshot.paramMap.get('price');
    this.name = this.router.snapshot.paramMap.get('name');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Comfirmacion',
      message: '¿Estas seguro/a que deseas comprar el producto?',
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Comprar',
          handler: () => {
            this.buySuccess();
          },
        },
      ],
    });

    await alert.present();
    await alert.onDidDismiss();
  }

  async buySuccess() {
    const toast = await this.toastController.create({
      message: 'La compra ha sido exitosa',
      duration: 4000,
      color: 'success',
      mode: 'ios',
    });

    toast.present();
  }
}
