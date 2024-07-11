import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployeesComponentComponent } from './all-employees-component.component';

describe('AllEmployeesComponentComponent', () => {
  let component: AllEmployeesComponentComponent;
  let fixture: ComponentFixture<AllEmployeesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmployeesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmployeesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
