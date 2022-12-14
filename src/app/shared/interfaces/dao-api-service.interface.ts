import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface DAOApiService {
  get(
    path: string,
    params?: HttpParams | { [param: string]: string },
    headers?: HttpHeaders
  ): Observable<any>;
}
