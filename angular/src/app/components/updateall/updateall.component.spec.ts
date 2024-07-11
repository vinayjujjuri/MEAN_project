import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateallComponent } from './updateall.component';

describe('UpdateallComponent', () => {
  let component: UpdateallComponent;
  let fixture: ComponentFixture<UpdateallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
