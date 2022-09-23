import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CitiesService {

  constructor(private httpClient: HttpClient) { }

  public getData(): any{
    return this.httpClient.get('assets/json/cities.json')
  }
}



