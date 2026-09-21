import { Component, OnInit } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { ReviewService } from '../../services/reviewService/review-service';
import { Review } from '../../models/review.model';
import { LanguageService } from '../../services/languageService/language-service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-reviews',
  imports: [Carousel, ButtonModule, Tag],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss'
})
export class Reviews implements OnInit{
    reviews: Review[] = [];
    currentLanguage: string = 'es';
    private languageSubscription?: Subscription;
    responsiveOptions: any[] | undefined;

    constructor(private reviewService: ReviewService,
  private languageService: LanguageService) {}

    ngOnInit(): void {
 // Idioma actual al cargar el componente
    this.currentLanguage = this.languageService.getCurrentLanguage();

    // Escuchamos los cambios de idioma
    this.languageSubscription = this.languageService
      .onLanguageChange()
      .subscribe(event => {
        this.currentLanguage = event.lang;
      });

         this.responsiveOptions = [
            {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
            },
            {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
            },
            {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
            },
            {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
            }
        ];

        this.getData();
    }

      private readonly avatarColors = [
  '#D6A4A5',
  '#ABA290',
  '#A3C4BC',
  '#B86F80',
  '#6E6E4D',
  '#DAD5CA'
];


private getRandomAvatarColor(): string {
  return this.avatarColors[
    Math.floor(Math.random() * this.avatarColors.length)
  ];
}

private getData(): void {

  this.reviewService.getReviews().then((reviews) => {

 // Mezclamos las reseñas y cogemos 5 aleatorias
    const shuffledReviews = [...reviews].sort(() => Math.random() - 0.5);

    this.reviews = shuffledReviews
      .slice(0, 5) //cogemos las primeras 5 reseñas de los 5 aleatorias que vienen
      .map(review => {

        // 1. Si tiene imagen, no hacemos nada más
        if (review.image && review.image.trim() !== '') {
          return review;
        }

        // 2. No tiene imagen -> comprobamos la letra
        if (!review.avatarLetter || review.avatarLetter.trim() === '') {
          review.avatarLetter = review.author.charAt(0).toUpperCase();
        }

        // 3. Comprobamos el color de fondo
        if (!review.avatarColor || review.avatarColor.trim() === '') {
          review.avatarColor = this.getRandomAvatarColor();
        }

        return review;

      });

  });

}
    }

  

