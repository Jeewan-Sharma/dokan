import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderDevelopmentComponent } from './under-development.component';

describe('UnderDevelopmentComponent', () => {
  let component: UnderDevelopmentComponent;
  let fixture: ComponentFixture<UnderDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnderDevelopmentComponent]
    });
    fixture = TestBed.createComponent(UnderDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
