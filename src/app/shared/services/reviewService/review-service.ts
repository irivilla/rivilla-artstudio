import { Injectable } from '@angular/core';
import { Review } from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor() {}

  getReviews(): Promise<Review[]> {
    return Promise.resolve([
      {
        author: 'Ana Gómez',
        rating: 5,
        comment: 'Una experiencia increíble, el arte en vivo dejó a todos los invitados fascinados.',
        image: 'https://i.pravatar.cc/100?img=1'
      },
      {
        author: 'Carlos Pérez',
        rating: 4,
        comment: 'Muy profesionales, hicieron que nuestra boda fuera aún más especial.',
        image: 'https://i.pravatar.cc/100?img=2'
      },
      {
        author: 'Lucía Fernández',
        rating: 5,
        comment: '¡El retrato en directo fue mágico! Lo recomendamos al 100%.',
        image: 'https://i.pravatar.cc/100?img=3'
      },
      {
        author: 'Marcos Ruiz',
        rating: 5,
        comment: 'Excelente trato y un resultado espectacular. Volveremos a contratar.',
        image: 'https://i.pravatar.cc/100?img=4'
      }
    ]);
  }
}
