import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureMain } from './azure-main';

describe('AzureMain', () => {
  let component: AzureMain;
  let fixture: ComponentFixture<AzureMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AzureMain],
    }).compileComponents();

    fixture = TestBed.createComponent(AzureMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
