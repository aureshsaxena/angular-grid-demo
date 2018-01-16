import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-templates',
  templateUrl: './image-template.component.html',
  styleUrls: ['./image-template.component.css']
})
export class ImageTemplateComponent {

  private params: any;

  agInit(params: any): void {
      this.params = params;
  }



}
