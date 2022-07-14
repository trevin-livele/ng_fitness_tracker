import { AuthData } from "./auth-data.model";
import { User } from "./user.model";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable()
export class AuthService{
    authChange = new Subject<boolean>();

    private user!: User;




constructor(private router: Router, private afauth: AngularFireAuth){}




    registerUser(authData: AuthData){
        this.afauth.auth.createUserWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result => {
            console.log(result);
            this.authSuccessfully();
        }).catch(error => {
            console.log(error);
        });
    }

    login(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
   
        this.authSuccessfully();

    }
    logout(){
      this.user == null;
      this.authChange.next(false);
      this.router.navigate(['/login']);


    }
    getUser(){
        return { ... this.user};
    }

    isAuth(){
        return this.user !=null;
    }
    private authSuccessfully(){
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }
}