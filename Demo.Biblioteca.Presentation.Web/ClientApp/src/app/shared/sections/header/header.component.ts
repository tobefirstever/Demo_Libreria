import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: Boolean = true;
  ocultar: Boolean = false;
  constructor(public _authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this._authService.cerrarSesion();
    this.router.navigate(['/auth']);    
  }

}
