import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VillageSearchService {
  constructor(private httpClient: HttpClient) { }
  public getList() {
    return this.httpClient.get("http://localhost:3000/villages");
  }
}
