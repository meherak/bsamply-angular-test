import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home.component';

const declarations = [
  HeaderComponent,
  MoviesComponent,
  LayoutComponent,
  HomeComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
