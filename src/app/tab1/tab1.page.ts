import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent, ModalController } from '@ionic/angular';
import { CommentModalPage } from '../comment-modal/comment-modal.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  isLiked: boolean = false;
  items = [];
  user: any

  constructor(
    public auth: AuthService,
    public route: Router,

    private modalController: ModalController
  ) {
    this.user = auth.getProfile()

  }
  ngOnInit() {
    this.generateItems();
  }
  toggleLike(): void {
    if(this.isLiked==true){

      this.isLiked = false;
    }else{
      this.isLiked=true;
    }

  }
  async openCommentModal() {
    const modal = await this.modalController.create({
      component: CommentModalPage,
      
      componentProps: {
        
      }
    });
    return await modal.present();
  }
  async logOut() {
    this.auth.signOut().then(() => {
      this.route.navigateByUrl['/login'];
      console.log("sign out");
    }).catch((error) => {
      console.log(error);

    })
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
