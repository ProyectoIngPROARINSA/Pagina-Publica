import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { contactenosComponent } from './contactenos.component';

describe('contactenosComponent', () => {
  let component: contactenosComponent;
  let fixture: ComponentFixture<contactenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [contactenosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(contactenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
