import { Component, OnInit } from '@angular/core';
import { SearchParams } from '@shared/interfaces';

@Component({
  selector: 'bsamply-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public searchParams: SearchParams = {};
  constructor() {}

  ngOnInit(): void {}
  setSearchParams(params: SearchParams) {
    this.searchParams = params;
  }
}
