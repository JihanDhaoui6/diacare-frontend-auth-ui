import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionnistTopbarComponent } from './nutritionnist-topbar.component';

describe('NutritionnistTopbarComponent', () => {
  let component: NutritionnistTopbarComponent;
  let fixture: ComponentFixture<NutritionnistTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionnistTopbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionnistTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
