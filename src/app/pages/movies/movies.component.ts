import { Component, OnInit } from '@angular/core';

import { ApiService } from '@core/services';
import { BaseComponent } from '@shared/components/base.component';

@Component({
  selector: 'bsamply-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent extends BaseComponent implements OnInit {
  constructor(private readonly api: ApiService) {
    super();
  }

  ngOnInit(): void {
    // this.api.get('/reviews/search.json').subscribe((res) => {
    //   console.log('api call', res);
    // });
  }
}
