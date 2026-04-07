import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestMain } from './rest-main';

describe('RestMain', () => {
  let component: RestMain;
  let fixture: ComponentFixture<RestMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestMain],
    }).compileComponents();

    fixture = TestBed.createComponent(RestMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
