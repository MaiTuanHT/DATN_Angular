import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBusesSearchComponent } from './list-buses-search.component';

describe('ListBusesSearchComponent', () => {
  let component: ListBusesSearchComponent;
  let fixture: ComponentFixture<ListBusesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBusesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBusesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
