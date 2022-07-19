import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router, UrlTree, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';




@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService, private router: Router){}
   
    canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
        
        if(this.authService.isAuth()) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }

    }
    
    canLoad(route :Route):any{
        
        if(this.authService.isAuth()) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
        
    }
}