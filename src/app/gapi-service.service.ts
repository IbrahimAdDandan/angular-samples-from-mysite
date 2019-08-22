import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GapiService {
  
  _apiUrl = 'https://idndn.herokuapp.com/api/gapi/';

  constructor(private _http: HttpClient) { }

  getGeo() {
    return this._http.get<any>(this._apiUrl + 'geo');
  }

  getActiveUsers() {
    return this._http.get<any>(this._apiUrl + 'active-users');
  }

  getPageViews() {
    return this._http.get<any>(this._apiUrl + 'page-views');
  }

  getBrowsers() {
    return this._http.get<any>(this._apiUrl + 'browser');
  }

  getOs() {
    return this._http.get<any>(this._apiUrl + 'os');
  }

  getSources() {
    return this._http.get<any>(this._apiUrl + 'source');
  }

}