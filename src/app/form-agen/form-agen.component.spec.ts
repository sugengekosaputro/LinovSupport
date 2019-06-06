import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgenComponent } from './form-agen.component';

describe('FormAgenComponent', () => {
  let component: FormAgenComponent;
  let fixture: ComponentFixture<FormAgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
