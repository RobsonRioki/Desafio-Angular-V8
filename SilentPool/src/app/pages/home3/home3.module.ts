import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home3Component } from './containers/home3/home3.component';
import { Home3TemplateComponent } from './components/home3-template/home3-template.component';
import { HomeRoutingModule } from './home3-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { InputCodigoComponent } from '../../shared/input-codigo/input-codigo.component';

@NgModule({
  declarations: [
    Home3Component,
    Home3TemplateComponent,
    InputCodigoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class Home3Module { }
