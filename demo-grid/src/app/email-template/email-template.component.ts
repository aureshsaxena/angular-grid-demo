import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.css']
})
export class EmailTemplateComponent {

  private params: any;

  agInit(params: any): void {
      this.params = params;
  }

}
