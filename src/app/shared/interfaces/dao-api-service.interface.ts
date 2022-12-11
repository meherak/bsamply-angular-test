import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface DAOApiService {
  get(
    path: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<any>;
}
