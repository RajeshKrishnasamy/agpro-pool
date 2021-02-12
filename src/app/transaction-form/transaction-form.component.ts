import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FarmerSearchService } from './farmer-search.service';
import { CropSearchService } from './crop-search.service';


@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  SERVER_URL = "http://localhost:3000/transactions";
  farmerList: any = [];
  cropList: any = [];
  todayDate : Date = new Date();
    
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private _router: Router, private farmerSearchService: FarmerSearchService, private cropSearchService: CropSearchService) { 
    
      this.farmerSearchService.getList().subscribe(
          (res) => {
            this.farmerList=res;
            localStorage.setItem('farmers', JSON.stringify(this.farmerList));
          },
          (err) => {
            this.farmerList = JSON.parse(localStorage.getItem('farmers') || '[]');
            console.log(err);
          }      
      );
      this.cropSearchService.getList().subscribe(
        (res) => {
          this.cropList=res;
          localStorage.setItem('crops', JSON.stringify(this.cropList));
        },
        (err) => {
          this.farmerList = JSON.parse(localStorage.getItem('crops') || '[]');
          console.log(err);
        }
      );
  }
  ngOnInit(): void {
  }

  transactionForm = this.formBuilder.group({
    date:  new Date().toISOString().slice(0,10),
    name: ['', Validators.required],
    crop: ['', Validators.required],
    quantity: ['', Validators.required],

  });
  
  onTransactionSubmit() {
    const formData = new FormData();
    this.httpClient.post<any>(this.SERVER_URL, this.transactionForm.value).subscribe(
      (res) => {
        
        this._router.navigateByUrl('/home'); 
      },
      (err) => console.log(err)
    );
  }

  changeFarmer(e: any) {
    console.log(e.target.value);
  }

  changeCrop(e: any) {
    console.log(e.target.value);
  }

}
