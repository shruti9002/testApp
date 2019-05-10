import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestApi {
    constructor(private http: HttpClient) { }

    getDetails(country: string, year:number) {
        return this.http.get('https://holidayapi.pl/v1/holidays?country=' + country + '&year=' + year);
    }

}