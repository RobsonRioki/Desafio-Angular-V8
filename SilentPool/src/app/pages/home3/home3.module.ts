import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home3Component } from './containers/home3/home3.component';
import { Home3TemplateComponent } from './components/home3-template/home3-template.component';
import { HomeRoutingModule } from './home3-routing.module';


@NgModule({
  declarations: [
    Home3Component,
    Home3TemplateComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class Home3Module { }
