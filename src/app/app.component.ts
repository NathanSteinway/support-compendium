import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChampSelectComponent } from './champ-select/champ-select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChampSelectComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Support Compendium';
}
