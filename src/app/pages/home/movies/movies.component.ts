import { Component, Input, OnInit } from '@angular/core';
import { ReviewsService } from '@core/services';

import { BaseComponent } from '@shared/components/base.component';
import { Review } from '@shared/interfaces';

@Component({
  selector: 'bsamply-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent extends BaseComponent implements OnInit {
  @Input() reviews: Review[];
  constructor(private readonly reviewsService: ReviewsService) {
    super();
  }

  ngOnInit(): void {
    this.reviewsService.reviewData$.subscribe((data) => {
      this.reviews = data;
    });
  }
}
