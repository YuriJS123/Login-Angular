import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { HubDeLinguagens } from './pages/hub-de-linguagens/hub-de-linguagens';
import { PaginaHtml } from './pages/pagina-html/pagina-html';


export const routes: Routes = [

  {path: 'HubDeLinguagens', component: HubDeLinguagens,},
  {path: 'PaginaHtml',component: PaginaHtml,},
  { path: '', component: Login },
  { path: '**', redirectTo: '' }
];
