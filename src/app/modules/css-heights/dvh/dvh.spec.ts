import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dvh } from './dvh';

describe('Dvh', () => {
  let component: Dvh;
  let fixture: ComponentFixture<Dvh>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dvh],
    }).compileComponents();

    fixture = TestBed.createComponent(Dvh);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
