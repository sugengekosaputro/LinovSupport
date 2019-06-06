import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesComponent } from './tes.component';

describe('TesComponent', () => {
  let component: TesComponent;
  let fixture: ComponentFixture<TesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
