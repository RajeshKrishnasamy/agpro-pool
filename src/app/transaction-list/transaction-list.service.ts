import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionListService {

  constructor(private httpClient: HttpClient) { }

  public getList() {
    return this.httpClient.get("http://localhost:3000/farmers");
  }

}
