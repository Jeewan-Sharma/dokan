import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutRootComponent } from './checkout-root.component';

describe('CheckoutRootComponent', () => {
  let component: CheckoutRootComponent;
  let fixture: ComponentFixture<CheckoutRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
