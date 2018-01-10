import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aggridv2Component } from './aggridv2.component';

describe('Aggridv2Component', () => {
  let component: Aggridv2Component;
  let fixture: ComponentFixture<Aggridv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aggridv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aggridv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
