import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authguard } from './guards/authguard';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirecciona a 'login' al iniciar
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
   
  },

  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule),
  },
  { 
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[authguard]
  },
  {
    path: 'comment-modal',
    loadChildren: () => import('./comment-modal/comment-modal.module').then( m => m.CommentModalPageModule)
  },
  {
    path: 'crear-play',
    loadChildren: () => import('./crear-play/crear-play.module').then( m => m.CrearPlayPageModule)
  }
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
