import { inject } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CanActivateFn, Router } from "@angular/router";
import { map, take } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";


export const authguard  = () => {
    const router = inject(Router)   
    const auth = inject(AuthService)   
    if(localStorage.getItem('token')){
        return true
    }else{
        router.navigateByUrl['/login'];
        return false
    }
}


