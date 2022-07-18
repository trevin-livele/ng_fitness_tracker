import { AuthData } from "./auth-data.model";
import { User } from "./user.model";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { TrainingService } from "../training/training.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UIService } from "../shared/ui.service";
@Injectable()
export class AuthService{
    authChange = new Subject<boolean>();
    private isAuthenticated = false;



constructor(
    private router: Router,
     private afauth: AngularFireAuth,
     private trainingService : TrainingService,
     private snackbar : MatSnackBar,
     private uiService : UIService,
     ){}


initAuthListener(){
    this.afauth.authState.subscribe(user => {
        if (user){
            this.isAuthenticated = true;
            this.authChange.next(true);
            this.router.navigate(['/training']);
        }else{
            this.trainingService.cancelSubscriptions();
            this.authChange.next(false);
            this.router.navigate(['/login']);
            this.isAuthenticated = false;
        }
    })
}

    registerUser(authData: AuthData){
        this.uiService.loadingStateChanged.next(true);
        this.afauth.auth.createUserWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result => {
            this.uiService.loadingStateChanged.next(false);
        }).catch(error => {
            this.uiService.loadingStateChanged.next(false);
            this.snackbar.open(error.message, null!, {
                duration: 3000
            });
        });
    }

    login(authData: AuthData){
    this.uiService.loadingStateChanged.next(true);
    this.afauth.auth
    .signInWithEmailAndPassword(authData.email,authData.password)
    .then(result => {
    this.uiService.loadingStateChanged.next(false);

    }).catch(error => {
        this.uiService.loadingStateChanged.next(false);
        this.snackbar.open(error.message, null!, {
            duration: 3000
        });    });
   

    }
    logout(){
        this.afauth.auth.signOut();

   


    }


    isAuth(){
        return this.isAuthenticated;
    }

}   