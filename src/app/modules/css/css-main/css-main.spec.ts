import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssMain } from './css-main';

describe('CssMain', () => {
  let component: CssMain;
  let fixture: ComponentFixture<CssMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssMain],
    }).compileComponents();

    fixture = TestBed.createComponent(CssMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
