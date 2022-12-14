import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ReviewsService } from '@core/services';
import { SearchParams } from '@shared/interfaces';

@Component({
  selector: 'bsamply-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private searchForm: FormGroup = new FormGroup({});
  constructor(private readonly reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.initSearchForm();
  }

  get form(): FormGroup {
    return this.searchForm;
  }

  initSearchForm() {
    this.searchForm = new FormGroup({
      search: new FormControl<string | null>(null),
      criticsPick: new FormControl<boolean | null>(false),
      order: new FormControl<string | null>('publication date'),
    });
  }

  formChangeHandler() {
    const params: SearchParams = this.form.value;
    this.reviewsService.loadData(params);
  }
}
