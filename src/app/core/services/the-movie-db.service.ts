import { inject, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import {
  MovieDBNowPlayingResponse,
  MovieDBResponse,
} from '../../shared/models/movieDB.model';

@Injectable({
  providedIn: 'root',
})
export class TheMovieDbService {
  private readonly httpService = inject(HttpClient);

  getNowPlayingMovies(): Observable<MovieDBNowPlayingResponse> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${environment.apiKey}`,
    );
    // debugger;
    return this.httpService.get<MovieDBNowPlayingResponse>(
      `${environment.baseApiUrl}/movie/now_playing?language=es-ES&page=1`,
      { headers },
    );
  }

  getPopularMovies(page = 1): Observable<MovieDBResponse> {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${environment.apiKey}`,
    );
    return this.httpService.get<MovieDBResponse>(
      `${environment.baseApiUrl}/movie/popular?language=es-ES&page=1`,
      { headers },
    );
  }
}
