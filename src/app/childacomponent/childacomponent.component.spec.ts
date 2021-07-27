import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildacomponentComponent } from './childacomponent.component';

describe('ChildacomponentComponent', () => {
  let component: ChildacomponentComponent;
  let fixture: ComponentFixture<ChildacomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildacomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
