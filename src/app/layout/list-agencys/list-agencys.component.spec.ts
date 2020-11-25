import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgencysComponent } from './list-agencys.component';

describe('ListAgencysComponent', () => {
  let component: ListAgencysComponent;
  let fixture: ComponentFixture<ListAgencysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAgencysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAgencysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
