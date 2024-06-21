import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerInfoComponent } from './container-info/container-info.component';
import { HeaderComponent } from '../core/header/header.component';
import { ButtonComponent } from './button/button.component';
import { ImagemComponent } from './imagem/imagem.component';




@NgModule({
  declarations: [
    ContainerInfoComponent,
    HeaderComponent,
    ButtonComponent,
    ImagemComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerInfoComponent,
    HeaderComponent,
    ButtonComponent,
    ImagemComponent
  ]
})
export class SharedModule { }
