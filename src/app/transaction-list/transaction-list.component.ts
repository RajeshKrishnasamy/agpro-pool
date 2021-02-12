import { Component, OnInit } from '@angular/core';
import { TransactionListService } from './transaction-list.service';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactionList: any = [];
  constructor(private transactionListService: TransactionListService) { }

  ngOnInit(): void {
    this.transactionListService.getList().subscribe(
      (res) => {
        this.transactionList=res;
      },
      (err) => console.log(err)
      );
  }

}
