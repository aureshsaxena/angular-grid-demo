import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridComponent } from "./ag-grid/ag-grid.component";
import { KendoComponent } from "./kendo/kendo.component";
import { AgGirdInComponent } from './ag-gird-in/ag-gird-in.component';
import { Aggridv2Component } from './aggridv2/aggridv2.component';
const routes: Routes = [
 { path: 'kendo', component: KendoComponent },
 { path: 'aggrid', component: AgGridComponent },
 { path: 'aggridi', component: AgGirdInComponent },
 { path: 'aggridv2', component: Aggridv2Component }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
