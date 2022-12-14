import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ApiService } from '@core/services';
import { SearchParams, NytApiResponse, Review } from '@shared/interfaces';

enum Order {
  oDate = 'by-opening-date',
  pDate = 'by-publication-date',
}

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private readonly _reviewData = new BehaviorSubject<Review[]>([]);
  readonly reviewData$: Observable<Review[]> = this._reviewData.asObservable();

  constructor(private readonly api: ApiService) {}

  get reviews(): Review[] {
    return this._reviewData.getValue();
  }

  private set reviews(val: Review[]) {
    this._reviewData.next(val);
  }

  loadData(prms?: SearchParams): void {
    const url = '/reviews/search.json';

    const query = prms?.search;
    const order =
      prms?.order === 'publication date'
        ? Order.pDate
        : prms?.order === 'opening date'
        ? Order.oDate
        : null;
    const criticsPick =
      prms?.criticsPick === true
        ? 'Y'
        : prms?.criticsPick === false
        ? 'N'
        : null;
    const params: { [param: string]: string } = {};
    if (!!order) params['order'] = order;
    if (!!query) params['query'] = query;
    if (!!criticsPick) params['critics-pick'] = criticsPick;

    this.api.get<NytApiResponse>(url, params).subscribe((res) => {
      this.reviews = res.results;
    });
  }
}
