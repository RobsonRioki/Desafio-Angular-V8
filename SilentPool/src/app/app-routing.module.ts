import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TelaAdminComponent } from './pages/tela-admin/tela-admin.component';
import { TelaPerguntasComponent } from './pages/tela-perguntas/tela-perguntas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tela-admin',
    component: TelaAdminComponent
  },
  {
    path: 'tela-perguntas',
    component: TelaPerguntasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
