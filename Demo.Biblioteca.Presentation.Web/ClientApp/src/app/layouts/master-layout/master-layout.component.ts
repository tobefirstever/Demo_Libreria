import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss']
})
export class MasterLayoutComponent implements OnInit {

  ocultar: boolean = false;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  public hideUserOptions(){
    this.ocultar = false;
  }  

  getRouteClass(){
    if (this.router.url === '/buscar'){
      return 'bg_white';
    } else {
      return '';
    }
  }

}
