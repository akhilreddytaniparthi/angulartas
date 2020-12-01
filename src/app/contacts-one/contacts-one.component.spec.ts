import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsOneComponent } from './contacts-one.component';

describe('ContactsOneComponent', () => {
  let component: ContactsOneComponent;
  let fixture: ComponentFixture<ContactsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
