import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridComponent } from "./ag-grid/ag-grid.component";
import { KendoComponent } from "./kendo/kendo.component";
const routes: Routes = [
 { path: 'kendo', component: KendoComponent },
 { path: 'aggrid', component: AgGridComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
