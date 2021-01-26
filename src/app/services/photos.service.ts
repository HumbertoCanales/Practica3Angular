import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "https://jsonplaceholder.typicode.com/photos?_limit=20"
   }

  getAll(): Promise<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl).toPromise();
  }
}
