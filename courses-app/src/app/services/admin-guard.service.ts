import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    } else if (!this.authService.isAdmin()) {
      this.router.navigate(['courses']);
      return false;
    }
    return true;
  }
}
