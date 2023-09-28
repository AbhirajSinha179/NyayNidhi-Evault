import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesTableComponent } from './cases-table.component';

describe('CasesTableComponent', () => {
  let component: CasesTableComponent;
  let fixture: ComponentFixture<CasesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesTableComponent]
    });
    fixture = TestBed.createComponent(CasesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
