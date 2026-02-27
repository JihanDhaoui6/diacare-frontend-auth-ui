import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionnistSidebarComponent } from './nutritionnist-sidebar.component';

describe('NutritionnistSidebarComponent', () => {
  let component: NutritionnistSidebarComponent;
  let fixture: ComponentFixture<NutritionnistSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionnistSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionnistSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
