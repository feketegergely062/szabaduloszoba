import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjfoglalasComponent } from './ujfoglalas.component';

describe('UjfoglalasComponent', () => {
  let component: UjfoglalasComponent;
  let fixture: ComponentFixture<UjfoglalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UjfoglalasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UjfoglalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
