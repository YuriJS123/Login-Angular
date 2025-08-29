import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// importa o AuthService se realmente existir no seu projeto
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-hub-de-linguagens',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './hub-de-linguagens.html',
  styleUrls: ['./hub-de-linguagens.css']
})
export class HubDeLinguagens {
  constructor(
    private router: Router, 
    // private authService: AuthService
  ) {}
}
