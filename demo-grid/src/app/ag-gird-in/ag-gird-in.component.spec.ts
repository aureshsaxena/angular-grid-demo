import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGirdInComponent } from './ag-gird-in.component';

describe('AgGirdInComponent', () => {
  let component: AgGirdInComponent;
  let fixture: ComponentFixture<AgGirdInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGirdInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGirdInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
