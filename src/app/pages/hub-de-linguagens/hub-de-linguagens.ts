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
