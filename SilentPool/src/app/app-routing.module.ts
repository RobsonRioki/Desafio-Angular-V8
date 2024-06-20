import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TelaAdminComponent } from './pages/tela-admin/tela-admin.component';
import { TelaPerguntasComponent } from './pages/tela-perguntas/tela-perguntas.component';
import { HomeNewComponent } from './pages/home-new/home-new.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin/:codigo',
    component: TelaAdminComponent
  },
  {
    path: 'perguntas/:codigo',
    component: TelaPerguntasComponent
  },
  {
    path: 'home-new',
    component: HomeNewComponent
  },
  {
    path: 'home3',
    loadChildren: () => import('./pages/home3/home3.module').then(m=>m.Home3Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
