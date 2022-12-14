import { Component, OnInit } from '@angular/core';

import { ReviewsService } from '@core/services';
import { BaseComponent } from '@shared/components/base.component';

@Component({
  selector: 'bsamply-root',
  template: '<bsamply-home></bsamply-home>',
})
export class AppComponent extends BaseComponent implements OnInit {
  constructor(private readonly reviewsService: ReviewsService) {
    super();
  }
  ngOnInit(): void {
    this.reviewsService.loadData();
  }
}
