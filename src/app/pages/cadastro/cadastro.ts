import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class Cadastro {
  nome: string = '';
  email: string = '';
  senhaTemp: string = '';
  confirmarSenhaTemp: string = '';
  mostrarSenha: boolean = false;

  erroAtual: string = '';

  senhaRequisitos = [
    { id: 'upperCase', descricao: 'A senha deve conter uma letra maiúscula', valido: false },
    { id: 'lowerCase', descricao: 'A senha deve conter uma letra minúscula', valido: false },
    { id: 'numero', descricao: 'A senha deve conter um número', valido: false },
    { id: 'especial', descricao: 'A senha deve conter um caractere especial', valido: false },
    { id: 'minLength', descricao: 'A senha deve ter no mínimo 8 caracteres', valido: false }
  ];

  constructor(private http: HttpClient, private router: Router) {}

  // ---------------- Validação de senha ----------------
  validarSenha() {
    const senha = this.senhaTemp;
    this.senhaRequisitos.find(r => r.id === 'upperCase')!.valido = /[A-Z]/.test(senha);
    this.senhaRequisitos.find(r => r.id === 'lowerCase')!.valido = /[a-z]/.test(senha);
    this.senhaRequisitos.find(r => r.id === 'numero')!.valido = /\d/.test(senha);
    this.senhaRequisitos.find(r => r.id === 'especial')!.valido = /[\W_]/.test(senha);
    this.senhaRequisitos.find(r => r.id === 'minLength')!.valido = senha.length >= 8;
  }

  senhasConferem(): boolean {
    return this.senhaTemp === this.confirmarSenhaTemp;
  }

  // ---------------- Cadastro ----------------
  cadastrarLocal() {
    this.erroAtual = '';

    // Validações
    if (!this.nome) { this.erroAtual = 'Nome é obrigatório'; return; }
    if (!this.email) { this.erroAtual = 'Email é obrigatório'; return; }
    if (!this.senhaTemp) { this.erroAtual = 'Senha é obrigatória'; return; }

    this.validarSenha();
    const requisitoNaoAtendido = this.senhaRequisitos.find(r => !r.valido);
    if (requisitoNaoAtendido) { this.erroAtual = requisitoNaoAtendido.descricao; return; }

    if (!this.confirmarSenhaTemp) { this.erroAtual = 'Confirme sua senha'; return; }
    if (!this.senhasConferem()) { this.erroAtual = 'As senhas não coincidem'; return; }

    // Se passou por todas validações, envia para o backend
    const usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senhaTemp
    };

    this.http.post("http://localhost:8080/api/auth/cadastro", usuario, { responseType: 'text' })
    .subscribe({
      next: (res) => {
        alert(res); // Vai mostrar "Cadastro realizado com sucesso"
        this.nome = '';
        this.email = '';
        this.senhaTemp = '';
        this.confirmarSenhaTemp = '';
      },
      error: (err) => {
        alert("Erro ao cadastrar: " + JSON.stringify(err));
      }
    });
  
    
  }
}
