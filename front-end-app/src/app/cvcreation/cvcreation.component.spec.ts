import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVcreationComponent } from './cvcreation.component';

describe('CVcreationComponent', () => {
  let component: CVcreationComponent;
  let fixture: ComponentFixture<CVcreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CVcreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CVcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
