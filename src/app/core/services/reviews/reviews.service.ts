import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { ApiService } from '@core/services';
import { paramsFactory } from '@shared/utils';
import { NytApiResponse } from '@shared/models';
import { SearchParams } from '@shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private readonly url = '/reviews/search.json';
  private readonly _reviewData = new BehaviorSubject<NytApiResponse>(
    new NytApiResponse()
  );
  readonly reviewData$: Observable<NytApiResponse> =
    this._reviewData.asObservable();

  constructor(private readonly api: ApiService) {}

  get reviews(): NytApiResponse {
    return this._reviewData.getValue();
  }

  private set reviews(val: NytApiResponse) {
    this._reviewData.next(val);
  }

  loadData(prms?: SearchParams): void {
    let params: { [param: string]: string | number } = {};
    if (prms) {
      params = paramsFactory(prms);
    }

    this.api
      .get<NytApiResponse>(this.url, params)
      .subscribe((res: NytApiResponse) => {
        this.reviews = res;
      });
  }

  loadMore(prms: SearchParams): void {
    const params: { [param: string]: string | number } = paramsFactory(prms);

    this.api
      .get<NytApiResponse>(this.url, params)
      .subscribe((res: NytApiResponse) => {
        this.reviews = {
          ...res,
          results: [...this.reviews.results, ...res.results],
        };
      });
  }
}
