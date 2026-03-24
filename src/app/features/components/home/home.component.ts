import {
  Component,
  inject,
  signal,
  Signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { TheMovieDbService } from '../../../core/services/the-movie-db.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Movie } from '../../../shared/models/movie.model';
import { JsonPipe, DatePipe } from '@angular/common';
import { MovieDbThumbPipe } from '../../../shared/components/pipes/movie-db-thumb.pipe';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { HomeMoviesListComponent } from './home-movies-list/home-movies-list.component';
import { HomeReservationComponent } from './home-reservation/home-reservation.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    JsonPipe,
    DatePipe,
    MovieDbThumbPipe,
    ButtonComponent,
    HomeMoviesListComponent,
    HomeReservationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly theMovieDbService = inject(
    TheMovieDbService,
  );

  selectedMovie = toSignal(
    this.theMovieDbService
      .getNowPlayingMovies()
      .pipe(map((response) => response.results[0])),
  );
}
