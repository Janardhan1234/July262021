import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataboundComponent } from './databound.component';

describe('DataboundComponent', () => {
  let component: DataboundComponent;
  let fixture: ComponentFixture<DataboundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataboundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
