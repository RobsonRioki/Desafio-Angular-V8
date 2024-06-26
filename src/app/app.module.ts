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

import { ContainerPerguntaComponent } from './shared/container-pergunta/container-pergunta.component';
import { MatIconModule } from '@angular/material/icon';
import { TelaPerguntasComponent } from './pages/tela-perguntas/tela-perguntas.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './shared/modal/modal.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AskFormComponent } from './shared/ask-form/ask-form.component';
import { AdminPanelComponent } from './shared/admin-panel/admin-panel.component';
import { FilterOffensiveWordsDirective } from './directive/offensive.directive';
import { Home3Module } from './pages/home3/home3.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    TelaAdminComponent,
    ContainerComponent,
    ContainerPerguntaComponent,
    ModalComponent,
    TelaPerguntasComponent,
    MenuComponent,
    AskFormComponent,
    AdminPanelComponent,
    FilterOffensiveWordsDirective,
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
    CommonModule,
    Home3Module,
    SharedModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
