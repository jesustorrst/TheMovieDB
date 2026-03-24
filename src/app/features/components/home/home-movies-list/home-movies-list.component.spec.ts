import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMoviesListComponent } from './home-movies-list.component';

describe('HomeMoviesListComponent', () => {
  let component: HomeMoviesListComponent;
  let fixture: ComponentFixture<HomeMoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMoviesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMoviesListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
