import {
  Component,
  inject,
  viewChild,
  ElementRef,
  computed,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeCardComponent } from '../home-card/home-card.component';
import { TheMovieDbService } from '../../../../core/services/the-movie-db.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-movies-list',
  imports: [RouterModule, HomeCardComponent],
  templateUrl: './home-movies-list.component.html',
  styleUrl: './home-movies-list.component.css',
})
export class HomeMoviesListComponent {
  private readonly theMovieDbService = inject(
    TheMovieDbService,
  );

  //es otra manera de visualizar el contenido del input
  searchInputRef =
    viewChild.required<ElementRef<HTMLInputElement>>(
      'searchInput',
    );

  txtSearch = signal('');

  popularMovies = toSignal(
    this.theMovieDbService
      .getPopularMovies()
      .pipe(map(({ results }) => results)),
  );

  filteredMovies = computed(() => {
    const value = this.txtSearch();

    return this.popularMovies()?.filter((movie) =>
      movie.title
        .toLowerCase()
        .includes(value.toLowerCase()),
    );
  });

  onSearchChange(evt: KeyboardEvent) {
    const value = (evt.target as HTMLInputElement).value;
    this.txtSearch.set(value);
  }
}
