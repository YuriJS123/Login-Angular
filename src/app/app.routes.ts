import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { HubDeLinguagens } from './pages/hub-de-linguagens/hub-de-linguagens';
import { PaginaHtml } from './pages/pagina-html/pagina-html';
import { PaginaCss } from './pages/pagina-css/pagina-css';
import { Perfil} from './pages/perfil/perfil';
import { Cadastro} from './pages/cadastro/cadastro';

export const routes: Routes = [

  {path: 'Cadastro', component: Cadastro,},
  {path: 'Perfil', component: Perfil,},
  {path: 'HubDeLinguagens', component: HubDeLinguagens,},
  {path: 'PaginaHtml',component: PaginaHtml,},
  {path: 'PaginaCss',component: PaginaCss,},
  { path: '', component: Login },
  { path: '**', redirectTo: '' }
];
