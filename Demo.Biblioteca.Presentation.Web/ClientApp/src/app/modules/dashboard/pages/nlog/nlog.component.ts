import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { NlogService } from 'src/app/core/services/nlog.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/shared/services/message.service';
import { config } from 'src/app/shared/config/shared.config';
import { INlogResponse } from 'src/app/core/models/nlog-response';
import { PaginationService } from 'src/app/shared/services/pagination.service';

@Component({
  selector: 'app-nlog',
  templateUrl: './nlog.component.html',
  styleUrls: ['./nlog.component.scss']
})
export class NlogComponent implements OnInit {
  displayedColumns: string[] = ['seleccionar', 'hostname', 'mensaje', 'fechaHora'];
  dataSource: MatTableDataSource<INlogResponse>;
  totalSize: number = 0;
  btnIngresarDisabled = false;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private _nlogService: NlogService,
    public _paginationService: PaginationService,
    private _messageService: MessageService  ) { }

  ngOnInit() {
    this.getAllPaging();
  }  

  getAll(){
    this._nlogService.getAll().subscribe(responseModel => {
      if (responseModel.isSuccess) {
        if (!responseModel.isWarning) {
          this.dataSource = new MatTableDataSource<INlogResponse>(responseModel.data);
          this.totalSize = responseModel.data.length;
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
      this.btnIngresarDisabled = false;
    });  
  }
  
  getAllPaging(){
    this._nlogService.getAllPaging().subscribe(responseModel => {
      if (responseModel.isSuccess) {
        if (!responseModel.isWarning) {
          this.dataSource = new MatTableDataSource<INlogResponse>(responseModel.data);
          this.totalSize = responseModel.data[0].cantidad;
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
      this.btnIngresarDisabled = false;
    });  
  }  

  onPageChange(event: PageEvent) {
    this.btnIngresarDisabled = false;
    this._paginationService.change(event);
    this.getAllPaging();
  }

  selectedRow(row: any) {
    this.btnIngresarDisabled = true;
  } 
  
  validarRegistro() {
  }  

}
