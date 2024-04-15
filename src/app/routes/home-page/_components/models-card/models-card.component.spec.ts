import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsCardComponent } from './models-card.component';

describe('ModelsCardComponent', () => {
  let component: ModelsCardComponent;
  let fixture: ComponentFixture<ModelsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
