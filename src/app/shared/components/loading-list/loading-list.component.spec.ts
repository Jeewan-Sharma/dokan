import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingListComponent } from './loading-list.component';

describe('LoadingListComponent', () => {
  let component: LoadingListComponent;
  let fixture: ComponentFixture<LoadingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
