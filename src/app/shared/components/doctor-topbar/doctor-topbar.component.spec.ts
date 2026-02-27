import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTopbarComponent } from './doctor-topbar.component';

describe('DoctorTopbarComponent', () => {
  let component: DoctorTopbarComponent;
  let fixture: ComponentFixture<DoctorTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorTopbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
