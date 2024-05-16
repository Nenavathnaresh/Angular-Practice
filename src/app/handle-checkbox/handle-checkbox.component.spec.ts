import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleCheckboxComponent } from './handle-checkbox.component';

describe('HandleCheckboxComponent', () => {
  let component: HandleCheckboxComponent;
  let fixture: ComponentFixture<HandleCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandleCheckboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandleCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
