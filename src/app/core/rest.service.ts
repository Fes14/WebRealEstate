import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {catchError, EMPTY, finalize, map, Observable, of, skipWhile, throwError} from "rxjs";
import {RealEstateInfo} from "../features/models/real-estate-info";
import {PreloaderService} from "./preloader.service";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private _httpClient: HttpClient, private _preloaderService: PreloaderService) {
  }

  public getRealEstates(): Observable<any> {
    return this.sendRequest('GET', 'http://localhost:5119/api/RealEstates')
  }

  public getRealEstate(id: number): Observable<any> {
    return this.sendRequest('GET', `http://localhost:5119/api/RealEstates/${id}`)

  }

  public getDevelopers(): Observable<any> {
    return this.sendRequest('GET', `http://localhost:5119/api/Developers`)

  }

  public getRealEstateTypes(): Observable<any> {
    return this.sendRequest('GET', `http://localhost:5119/api/RealEstateTypes`)

  }

  public addRealEstate(model: RealEstateInfo): Observable<any> {
    return this.sendRequest('POST', `http://localhost:5119/api/RealEstates`, model)

  }

  public updateRealEstate(model: RealEstateInfo): Observable<any> {
    return this.sendRequest('PUT', `http://localhost:5119/api/RealEstates`, model)
  }

  private sendRequest(method: 'GET' | 'POST' | 'DELETE' | 'PUT', url: any, body?: any): Observable<any> {
    const req = new HttpRequest(method, url, body,
      {withCredentials: true});
    this._preloaderService.show()
    return this._httpClient.request(req)
      .pipe(catchError(err => {
        console.error('Ошибка запроса:', err);
        return EMPTY
      }), finalize(() => this._preloaderService.hide())).pipe(skipWhile((res: any) => res == undefined || res.body == undefined), map(r => r.body))
  }
}
