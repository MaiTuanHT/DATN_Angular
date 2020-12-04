import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScheduleOfRouteComponent } from './list-schedule-of-route.component';

describe('ListScheduleOfRouteComponent', () => {
  let component: ListScheduleOfRouteComponent;
  let fixture: ComponentFixture<ListScheduleOfRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListScheduleOfRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListScheduleOfRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
