import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternaltemplateComponent } from './externaltemplate.component';

describe('ExternaltemplateComponent', () => {
  let component: ExternaltemplateComponent;
  let fixture: ComponentFixture<ExternaltemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternaltemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternaltemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
