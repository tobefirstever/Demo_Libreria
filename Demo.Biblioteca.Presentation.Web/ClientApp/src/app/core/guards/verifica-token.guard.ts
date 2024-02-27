import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VerificaTokenGuard implements CanActivate {
  constructor(
    public _authService: AuthService,
    public router: Router
  ) {}

  canActivate(): Promise<boolean> | boolean {
    const token = this._authService.getAuthorizationToken();
    if (!token) {
      this.router.navigate(['/auth']);
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const expirado = this.expirado(payload.exp);

    if (expirado) {
      this.router.navigate(['/auth']);
      return false;
    }

    return this.verificaRenueva(payload.exp);
  }

  verificaRenueva(fechaExp: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }

  expirado(fechaExp: number) {
    const ahora = new Date().getTime() / 1000;

    if (fechaExp < ahora) {
      return true;
    } else {
      return false;
    }
  }
}
