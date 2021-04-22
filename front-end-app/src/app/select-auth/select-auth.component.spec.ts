import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAuthComponent } from './select-auth.component';

describe('SelectAuthComponent', () => {
  let component: SelectAuthComponent;
  let fixture: ComponentFixture<SelectAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
