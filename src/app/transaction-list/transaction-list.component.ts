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
          console.log(this.transactionList);
          localStorage.setItem('transactions', JSON.stringify(this.transactionList));
        },
        (err) => {
          this.transactionList = JSON.parse(localStorage.getItem('transactions') || '[]');
          console.log(err);
        }
    )
  }

}
