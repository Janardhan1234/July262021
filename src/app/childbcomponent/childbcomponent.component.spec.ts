import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildbcomponentComponent } from './childbcomponent.component';

describe('ChildbcomponentComponent', () => {
  let component: ChildbcomponentComponent;
  let fixture: ComponentFixture<ChildbcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildbcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildbcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
