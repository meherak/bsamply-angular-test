import { Component, Input, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ReviewsService } from '@core/services';
import { Review, SearchParams } from '@shared/interfaces';
import { BaseComponent } from '@shared/components/base.component';

@Component({
  selector: 'bsamply-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent extends BaseComponent implements OnInit {
  private showMoreCount = 0;
  public reviews: Review[];
  public hasMoreReviews = false;
  @Input() searchParams: SearchParams = {};
  constructor(public readonly reviewsService: ReviewsService) {
    super();
  }

  ngOnInit(): void {
    const sub: Subscription = this.reviewsService.reviewData$.subscribe(
      (data) => {
        this.reviews = data.results;
        this.hasMoreReviews = data.has_more;
      }
    );
    this.subscriptions.push(sub);
  }

  handleShowMore() {
    this.showMoreCount++;
    const params: SearchParams = {
      ...this.searchParams,
      offset: this.showMoreCount,
    };
    this.reviewsService.loadMore(params);
  }
}