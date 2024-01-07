import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuComponent } from './hu.component';

describe('HuComponent', () => {
  let component: HuComponent;
  let fixture: ComponentFixture<HuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
