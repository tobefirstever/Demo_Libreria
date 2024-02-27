import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeadContentComponent } from './sections/head-content/head-content.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatPaginatorIntl } from '@angular/material';
import { getDutchPaginatorIntl } from './language/spanish-paginator-intl';

@NgModule({
  declarations: [
    FooterComponent, 
    HeadContentComponent,
    HeaderComponent,
    LoadingComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    RouterModule, 
    MaterialModule    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    FooterComponent,
    HeadContentComponent,
    HeaderComponent,
    LoadingComponent,
    PageNotFoundComponent
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl() }
  ]
})
export class SharedModule { }
