import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';
import {AngularFireStorage} from '@angular/fire/compat/storage';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  imageURL: string = ''
  imageSource:any
  user: any
  photoData: string | null = null;
comment: any;
  constructor(
    public auth: AuthService,
    public route: Router,
    public domSanitizer: DomSanitizer,
    public storage: AngularFireStorage
  ) {
    this.user = auth.getProfile()
  }

  async logOut() {
    this.auth.signOut().then(() => {
      this.route.navigateByUrl['/login'];
      console.log("sign out");
    }).catch((error) => {
      console.log(error);

    })}

  sendComment() {
    throw new Error('Method not implemented.');
  }
  cancelComment() {
    throw new Error('Method not implemented.');
  }
    takePicture = async () =>{
      const image = await Camera.getPhoto({
        quality:90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source:CameraSource.Prompt,
        saveToGallery:true
      });
      this.imageSource=this.domSanitizer.bypassSecurityTrustUrl(image.webPath? image.webPath:"")
      const imageData = image.dataUrl;
      this.uploadImage(imageData); // Llama a la función para subir la imagen
    }

  uploadImage(imageData: string){
    const imageName = `${new Date().getTime()}.jpeg`;
    const storageRef = this.storage.ref('images/' + imageName);
    const uploadTask = storageRef.putString(imageData, 'data_url');

    uploadTask.snapshotChanges().subscribe(
      async () => {
        console.log('Imagen subida correctamente');
        const imageUrl = await storageRef.getDownloadURL();
        console.log('URL de la imagen:', imageUrl);
      },
      (error) => {
        console.error('Error al subir la imagen:', error);
      }
    );
  }
    getPhoto(){
      return this.imageSource
    }
    
}
