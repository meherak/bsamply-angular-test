import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  template: '',
  selector: 'bsamply-base',
})
export class BaseComponent implements OnDestroy {
  public subscriptions: Subscription[] = [];
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
