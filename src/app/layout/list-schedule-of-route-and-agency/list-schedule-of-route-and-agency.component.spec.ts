import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScheduleOfRouteAndAgencyComponent } from './list-schedule-of-route-and-agency.component';

describe('ListScheduleOfRouteAndAgencyComponent', () => {
  let component: ListScheduleOfRouteAndAgencyComponent;
  let fixture: ComponentFixture<ListScheduleOfRouteAndAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListScheduleOfRouteAndAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListScheduleOfRouteAndAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
