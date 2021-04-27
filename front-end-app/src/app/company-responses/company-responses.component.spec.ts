import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyResponsesComponent } from './company-responses.component';

describe('CompanyResponsesComponent', () => {
  let component: CompanyResponsesComponent;
  let fixture: ComponentFixture<CompanyResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyResponsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
