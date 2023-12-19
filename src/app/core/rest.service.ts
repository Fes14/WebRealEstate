import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {catchError, EMPTY, finalize, map, Observable, of, skipWhile, throwError} from "rxjs";
import {RealEstateInfo} from "../features/models/real-estate-info";
import {PreloaderService} from "./preloader.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private readonly _url:string=''
  constructor(private _httpClient: HttpClient, private _preloaderService: PreloaderService) {
    this._url=environment.url
  }

  public getRealEstates(): Observable<any> {
    return this.sendRequest('GET', `${this._url}RealEstates`)
  }

  public getRealEstate(id: number): Observable<any> {
    return this.sendRequest('GET', `${this._url}RealEstates/${id}`)

  }

  public getDevelopers(): Observable<any> {
    return this.sendRequest('GET', `${this._url}Developers`)

  }

  public getRealEstateTypes(): Observable<any> {
    return this.sendRequest('GET', `${this._url}RealEstateTypes`)

  }

  public addRealEstate(model: RealEstateInfo): Observable<any> {
    return this.sendRequest('POST', `${this._url}RealEstates`, model)

  }

  public updateRealEstate(model: RealEstateInfo): Observable<any> {
    return this.sendRequest('PUT', `${this._url}RealEstates`, model)
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
