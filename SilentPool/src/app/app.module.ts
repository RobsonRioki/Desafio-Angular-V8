import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { TelaAdminComponent } from './pages/tela-admin/tela-admin.component';
import { ButtonComponent } from './shared/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { TelaPerguntasComponent } from './pages/tela-perguntas/tela-perguntas.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './shared/modal/modal.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardPerguntaComponent } from './shared/card-pergunta/card-pergunta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TelaAdminComponent,
    ButtonComponent,
    ModalComponent,
    TelaPerguntasComponent,
    MenuComponent,
    CardPerguntaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    CommonModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
