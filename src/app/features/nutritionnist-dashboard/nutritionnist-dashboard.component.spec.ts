import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionnistDashboardComponent } from './nutritionnist-dashboard.component';

describe('NutritionnistDashboardComponent', () => {
  let component: NutritionnistDashboardComponent;
  let fixture: ComponentFixture<NutritionnistDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionnistDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionnistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
