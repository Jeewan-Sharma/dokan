import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorOnLoadComponent } from './error-on-load.component';

describe('ErrorOnLoadComponent', () => {
  let component: ErrorOnLoadComponent;
  let fixture: ComponentFixture<ErrorOnLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorOnLoadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorOnLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
