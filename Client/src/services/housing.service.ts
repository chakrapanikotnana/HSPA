import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProperty } from '../app/property/IProperty.Interface';
import { IPropertyBase } from '../app/model/IPropertyBase';

@Injectable({
  providedIn: 'root',
})
export class HousingService {

  constructor(private http: HttpClient) {}
  getAllProperties(SellRent: number): Observable<IPropertyBase[]> {
    return this.http
      .get<{ [key: string]: IPropertyBase }>('data/properties.json')
      .pipe(
        map((data) => {
          const propertiesArray: Array<IPropertyBase> = [];
          for (const id in data) {
            if (data.hasOwnProperty(id) && data[id].SellRent == SellRent) {
              propertiesArray.push(data[id]);
            }
          }
          return propertiesArray;
        })
      );
  }
}
