import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
  _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number){
    return this._http.get(this._albumUrl).forEach((response)=>map(response.json()))
  }

}
