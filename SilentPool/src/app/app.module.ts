import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BannerComponent } from './shared/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { TelaAdminComponent } from './pages/tela-admin/tela-admin.component';
import { ContainerComponent } from './shared/container/container.component';
import { ButtonComponent } from './shared/button/button.component';
import { ContainerPerguntaComponent } from './shared/container-pergunta/container-pergunta.component';
import { MatIconModule } from '@angular/material/icon';
import { TelaPerguntasComponent } from './pages/tela-perguntas/tela-perguntas.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './shared/modal/modal.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    TelaAdminComponent,
    ContainerComponent,
    ButtonComponent,
    ContainerPerguntaComponent,
    ModalComponent,
    TelaPerguntasComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
