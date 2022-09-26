import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
price:number = 0;
name:string= "";
alert:string="";
handlerMessage = "";
roleMessage = "";


  constructor(private router:ActivatedRoute, private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
    this.price = +this.router.snapshot.paramMap.get('price');
    
    this.name = this.router.snapshot.paramMap.get('name');
    console.log(this.name)

    //this.alert = this.router.snapshot.paramMap.get('alert');

  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Estas seguro/a que deseas comprar el producto?',
      buttons: [
        {
          text: 'Cancelar',
          
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Comprar',
          
          handler: () => {
            this.buySuccess()
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  async buySuccess(){
    const toast = await this.toastController.create({
        message:'La compra ha sido exitosa',duration:4000,color:'success',mode:'ios',buttons:[{side:'start',icon:'cheapmark-circle'}]
    });

    toast.present()
  }

}
