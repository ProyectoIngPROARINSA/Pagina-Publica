import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { quienesSomosComponent } from './quienesSomos.component';

describe('quienesSomosComponent', () => {
  let component: quienesSomosComponent;
  let fixture: ComponentFixture<quienesSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ quienesSomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(quienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
