import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'firebase/app';
import { Admins } from '../mock-admins';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<firebase.User>;
  readonly authState$: Observable<User | null> = this.afAuth.authState;

  constructor (private router: Router, private afAuth: AngularFireAuth) {
    this.userData = afAuth.authState;
    afAuth.authState.subscribe(auth => {
      if (auth) {
        console.log ('Logged In ' + auth.email);
      }
    });
  }

  getUser(): User | null {
    return this.afAuth.auth.currentUser;
  }

  isLoggedIn(): boolean {
    return this.getUser() != null;
  }

  isAdmin(): boolean {
    return Admins.includes(this.getUser().email);
  }

  signUp(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
      .then(() => this.router.navigate(['courses']))
    })
  }

  signIn(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(resolve(res)))
      }, err => reject(err))
      .then(() => this.router.navigate(['courses']))
    })
  }

  signOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
      if (!this.isLoggedIn()) {
        console.log("signed out");
      }
    })
  }
}
