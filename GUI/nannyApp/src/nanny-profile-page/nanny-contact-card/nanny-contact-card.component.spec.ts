import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NannyContactCardComponent } from './nanny-contact-card.component';

describe('NannyContactCardComponent', () => {
  let component: NannyContactCardComponent;
  let fixture: ComponentFixture<NannyContactCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NannyContactCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NannyContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
