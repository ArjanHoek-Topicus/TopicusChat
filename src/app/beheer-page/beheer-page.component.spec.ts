import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerPageComponent } from './beheer-page.component';

describe('BeheerPageComponent', () => {
  let component: BeheerPageComponent;
  let fixture: ComponentFixture<BeheerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeheerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeheerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
