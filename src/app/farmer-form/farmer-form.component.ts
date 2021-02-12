import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { VillageSearchService } from './village-search.service';


@Component({
  selector: 'app-farmer-form',
  templateUrl: './farmer-form.component.html',
  styleUrls: ['./farmer-form.component.css']
})
export class FarmerFormComponent implements OnInit {

  SERVER_URL = "http://localhost:3000/farmers";
  villageList: any = [];
    
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private _router: Router, private villageSearchService: VillageSearchService) { 
    this.villageSearchService.getList().subscribe(
      (res) => {
         this.villageList=res;
         console.log(localStorage.getItem('farmers'));
         
      },
      (err) => console.log(err)
      );
  }

  ngOnInit(): void {
  }

  farmerForm = this.formBuilder.group({
    name: ['', Validators.required],
    village: ['', Validators.required],
    age: ['', Validators.required],
    gender: ['', Validators.required],
    phone: ['', Validators.required],
    photo: ['']
  });
  
  onFileSelect(change: any) {
    if (change.target.files.length > 0) {
      const file = change.target.files[0];
      console.log(file);
      console.log(this.farmerForm.value);
      this.farmerForm.value.file = file;
    }
  }


  onFarmerSubmit() {
    const formData = new FormData();
    formData.append('file',  this.farmerForm.value.file);
    this.httpClient.post<any>(this.SERVER_URL, this.farmerForm.value).subscribe(
      (res) => {
        localStorage.setItem('farmers', JSON.stringify(this.farmerForm.value));
        this._router.navigateByUrl('/home'); 
      },
      (err) => console.log(err)
    );
  }

  changeVillage(e: any) {
    console.log(e.target.value);
  }

}
