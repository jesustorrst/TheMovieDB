import { Component, signal } from '@angular/core';  
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

const components = [ NavbarComponent, SidebarComponent ];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...components],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'})
export class AppComponent {
  protected readonly title = signal('TheMovieDB');
}
