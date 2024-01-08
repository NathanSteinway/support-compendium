import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampSynergyComponent } from './champ-synergy.component';

describe('ChampSynergyComponent', () => {
  let component: ChampSynergyComponent;
  let fixture: ComponentFixture<ChampSynergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampSynergyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChampSynergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
