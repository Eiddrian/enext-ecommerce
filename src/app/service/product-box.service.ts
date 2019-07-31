import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Potion } from '../model/potion';

@Injectable()
export class ProductService {

  private ENDPOINT = 'https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Potion[]> {
    return this.http.get<Potion[]>(this.ENDPOINT).pipe(
      map((data: any) => {
        return data.potions;
      })
    );
  }
}