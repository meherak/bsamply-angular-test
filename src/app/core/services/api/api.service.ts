import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { DAOApiService } from '@shared/interfaces';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService implements DAOApiService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private readonly httpClient: HttpClient) {}

  get<T>(
    path: string,
    params?: HttpParams | { [param: string]: string | number },
    headers?: HttpHeaders
  ): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}${path}`, {
      headers,
      params,
    });
  }
}
