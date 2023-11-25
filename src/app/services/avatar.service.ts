import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc,docData,Firestore } from '@angular/fire/firestore';
import { Storage, uploadString } from '@angular/fire/storage';
import { Photo} from '@capacitor/camera';
import { setDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private storage: Storage




  ) { }

    getUserProfile(){
      const user = this.auth.currentUser;
      const userDocRef = doc(this.firestore,`users/${user?.uid}`);
      return docData(userDocRef);
    }

    async uploadImage(cameraFile:Photo){
      const user = this.auth.currentUser;
      const path = `uploads/${user?.uid}/profile.png`;
      const storageRef= ref(this.storage,path);
      const base64Strings = cameraFile?.base64String || '';
      try{

        await uploadString(storageRef,base64Strings,'base64');
        const imageUrl = await getDownloadURL(storageRef);
        const userDocRef = doc(this.firestore,`users/${user?.uid}`);
        await setDoc(userDocRef,{
          imageUrl,
        });
        return true;
      }catch(e){
        return null;
      }

    }

}
