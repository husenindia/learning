import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vh } from './vh';

describe('Vh', () => {
  let component: Vh;
  let fixture: ComponentFixture<Vh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vh],
    }).compileComponents();

    fixture = TestBed.createComponent(Vh);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
