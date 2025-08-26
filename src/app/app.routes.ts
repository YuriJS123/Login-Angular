import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { HubDeLinguagens } from './pages/hub-de-linguagens/hub-de-linguagens';
export const routes: Routes = [

  {path: 'HubDeLinguagens', component: HubDeLinguagens,},
  { path: '', component: Login },
  { path: '**', redirectTo: '' }
];
