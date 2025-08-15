import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  entrar() {
    fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: this.email, senha: this.senha })
    })
    .then(async res => {
      if (res.ok) {
        alert(await res.text());
        this.router.navigate(['/dashboard']);
      } else {
        alert(await res.text());
      }
    })
    .catch(err => console.error(err));
  }
}
