import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvh } from './lvh';

describe('Lvh', () => {
  let component: Lvh;
  let fixture: ComponentFixture<Lvh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lvh],
    }).compileComponents();

    fixture = TestBed.createComponent(Lvh);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
