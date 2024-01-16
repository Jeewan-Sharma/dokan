import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDeviceMenuComponent } from './small-device-menu.component';

describe('SmallDeviceMenuComponent', () => {
  let component: SmallDeviceMenuComponent;
  let fixture: ComponentFixture<SmallDeviceMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmallDeviceMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallDeviceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
