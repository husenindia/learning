import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svh } from './svh';

describe('Svh', () => {
  let component: Svh;
  let fixture: ComponentFixture<Svh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Svh],
    }).compileComponents();

    fixture = TestBed.createComponent(Svh);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
