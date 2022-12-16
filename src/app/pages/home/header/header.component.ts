import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';

import { ReviewsService } from '@core/services';
import { SearchParams } from '@shared/interfaces';
import { BaseComponent } from '@shared/components/base.component';

@Component({
  selector: 'bsamply-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent implements OnInit {
  private searchForm: FormGroup = new FormGroup({});
  private searchSubject = new Subject<string | undefined>();
  @Output() searchParamsEmitter = new EventEmitter<SearchParams>();

  constructor(private readonly reviewsService: ReviewsService) {
    super();
  }

  ngOnInit(): void {
    this.initSearchForm();

    const sub: Subscription = this.searchSubject
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(() => {
        this.formChangeHandler();
      });

    this.subscriptions.push(sub);
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
    this.searchParamsEmitter.emit(params);
  }

  public onSearchQueryInput(event: Event): void {
    const searchQuery = (event.target as HTMLInputElement).value;
    this.searchSubject.next(searchQuery?.trim());
  }
}
