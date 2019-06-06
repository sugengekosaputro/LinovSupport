import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenComponent } from './agen.component';

describe('AgenComponent', () => {
  let component: AgenComponent;
  let fixture: ComponentFixture<AgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
