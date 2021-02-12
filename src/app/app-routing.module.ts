import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerFormComponent } from './farmer-form/farmer-form.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

const routes: Routes = [
  {path: 'home', component: TransactionListComponent},
  {path: 'transaction-from', component: TransactionFormComponent},
  {path: 'farmer-form', component: FarmerFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
