import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { ReviewsComponent } from './reviews/reviews.component';

const declarations = [
  HomeComponent,
  LayoutComponent,
  HeaderComponent,
  ReviewsComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
