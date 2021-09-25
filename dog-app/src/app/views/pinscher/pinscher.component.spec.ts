import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinscherComponent } from './pinscher.component';

describe('PinscherComponent', () => {
  let component: PinscherComponent;
  let fixture: ComponentFixture<PinscherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinscherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinscherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
