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
import { FormsModule } from "@angular/forms";
import { AgGirdInComponent } from './ag-gird-in/ag-gird-in.component';
import { Aggridv2Component } from './aggridv2/aggridv2.component';
import { ImageTemplateComponent } from './image-template/image-template.component';
import { EmailTemplateComponent } from './email-template/email-template.component'; // <-- NgModel lives here



@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    KendoComponent,
    AgGridComponent,
    AgGirdInComponent,
    Aggridv2Component,
    ImageTemplateComponent,
    EmailTemplateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    GridModule,
    AppRoutingModule,
    AgGridModule.withComponents([ImageTemplateComponent,EmailTemplateComponent])
  ],
  providers: [ CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
