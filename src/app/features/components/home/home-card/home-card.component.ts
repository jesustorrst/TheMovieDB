import { Component, input } from '@angular/core';
import { type MovieDB } from '../../../../shared/models/movieDB.model';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css',
})
export class HomeCardComponent {
  movie = input<MovieDB>();
}
