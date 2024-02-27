import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { config } from 'src/app/shared/config/shared.config';
import { IUsuarioLoginRequest } from 'src/app/core/models/usuario-login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('usernameElement', {static: false}) usernameElement: any;
  loginForm: FormGroup; 
  submitted = false;  
  
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _messageService: MessageService  
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.usernameElement.nativeElement.focus();
    }, 0);
  }  

  get formLogin() { return this.loginForm.controls; }

  onSubmit() {
    if (this.submitted || this.loginForm.invalid) {
      return;
    }    
    this.login();
  }

  login() {
    let usuarioLoginRequest: IUsuarioLoginRequest | undefined;
    usuarioLoginRequest = {
      username : this.formLogin.username.value,
      password : this.formLogin.password.value
    };
    this.submitted = true;
    this._authService.removeAuthorizationToken();
    this._authService.login(usuarioLoginRequest).subscribe(responseModel => {
      this.submitted = false;
      if (responseModel.isSuccess) {
        if (!responseModel.isWarning) {
          this._authService.guardarStorage("1", responseModel.data.authToken, responseModel.data.username, false);
          this._router.navigate(['/dashboard']);
        } else {
          this._messageService.toastMessage({
            title: responseModel.message,
            type: config.WARNING
          });          
        }
      } else {
        this._messageService.toastMessage({
          title: responseModel.message,
          type: config.ERROR
        });
      }
    },
    error => {
      this.submitted = false;
    });
  }
}
