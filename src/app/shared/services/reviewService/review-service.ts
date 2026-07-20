import { Injectable } from '@angular/core';
import { REVIEWS } from '../../data/reviews.data.js';
import { Review } from '../../models/review.model.js';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor() {}

getReviews() {
    // Simulate an asynchronous operation, e.g., fetching data from an API
    return new Promise<Review[]>((resolve) => {
      setTimeout(() => {
        resolve(REVIEWS);
      }, 100); // Simulate a delay of 100ms
    });

}
}