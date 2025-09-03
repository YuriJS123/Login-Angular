import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-perfil',
  imports: [CommonModule, RouterModule ],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {
  imagemPreview: string | null = null; 

  
  constructor(
    private router: Router, 
    // private authService: AuthService
  ) {}

  onImagemSelecionada(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const arquivo = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imagemPreview = reader.result as string; // joga a imagem pro preview
      };

      reader.readAsDataURL(arquivo);
}

}
}

