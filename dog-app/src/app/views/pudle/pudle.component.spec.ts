import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PudleComponent } from './pudle.component';

describe('PudleComponent', () => {
  let component: PudleComponent;
  let fixture: ComponentFixture<PudleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PudleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PudleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
