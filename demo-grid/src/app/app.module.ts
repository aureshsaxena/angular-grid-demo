import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CommentsService } from './comments.service';
import { KendoComponent } from './kendo/kendo.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
//import {AgGridModule} from "ag-grid-angular/main";
import { AgGridModule } from "ag-grid-angular";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here



@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    KendoComponent,
    AgGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    GridModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [ CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }