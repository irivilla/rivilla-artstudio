import { Component, OnInit } from '@angular/core';
//import { Product } from '@/domain/product';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { ReviewService } from '../../services/reviewService/review-service';
import { Review } from '../../services/reviewService/review.model';

@Component({
  selector: 'app-reviews',
  imports: [Carousel, ButtonModule, Tag],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
    providers: [ReviewService ]
})
export class Reviews implements OnInit{
    reviews: Review[] | undefined;

    responsiveOptions: any[] | undefined;

    constructor(private reviewService: ReviewService) {}

    ngOnInit() {
        this.getData()
     
    }

    private getData(){
         this.reviewService.getReviews().then(data => {
            this.reviews = data.slice(0, 9);
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
        ]

    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}
