import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  imagenes: { nombre: string, imagenSrc: string }[] = [];
  user:any

  constructor(
    public auth:AuthService,
    public router: Router,


  ) { 
    this.user=auth.getProfile()

  }

  async volver() {
    this.router.navigate(['/tabs/tab3'])
  }
  async crearP() {
    this.router.navigate(['/crear-play'])
  }
  ngOnInit() {
    this.imagenes = this.auth.obtenerImagenes();
  }

}










































/*
import { Router, RouterState } from '@angular/router';
import { AlertController,LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';
import { DocumentData } from 'rxfire/firestore/interfaces';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

  async changeImage(){
    const image = await Camera.getPhoto({
      quality:90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos
    });
    console.log(image);
    if (image){
      const loading = await this.loadingController.create();
      await loading.present();
      const result = await this.avatarService.uploadImage(image);
      loading.dismiss;

      if(!result){
        const alert = await this.alertController.create({
          header: 'Imagen no se pudo cargar',
          message: 'A ocurrido un problema',
          buttons: ['OK'],
        });
        await alert.present();
      }



    }
    
*/

  




