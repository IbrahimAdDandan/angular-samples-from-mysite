import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Source } from './source';
import { Observable } from 'rxjs';

@Injectable()
export class GapiService {
  
  _apiUrl = 'https://idndn.herokuapp.com/api/gapi/';

  constructor(private _http: HttpClient) { }

  getGeo()  : Observable<Source> {
    return this._http.get<Source>(this._apiUrl + 'geo');
  }

  getBrowsers() : Observable<Source> {
    return this._http.get<Source>(this._apiUrl + 'browser');
  }

  getSources(): Observable<Source> {
    return this._http.get<Source>(this._apiUrl + 'source');
  }

}