import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampAlertComponent } from './champ-alert.component';

describe('ChampAlertComponent', () => {
  let component: ChampAlertComponent;
  let fixture: ComponentFixture<ChampAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
