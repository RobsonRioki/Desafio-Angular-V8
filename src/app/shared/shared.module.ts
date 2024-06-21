import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerInfoComponent } from './container-info/container-info.component';
import { HeaderComponent } from '../core/header/header.component';
import { ButtonComponent } from './button/button.component';
import { ImagemComponent } from './imagem/imagem.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    ContainerInfoComponent,
    HeaderComponent,
    ButtonComponent,
    ImagemComponent,
    FooterComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerInfoComponent,
    HeaderComponent,
    ButtonComponent,
    ImagemComponent,
    FooterComponent
  ]
})
export class SharedModule { }
