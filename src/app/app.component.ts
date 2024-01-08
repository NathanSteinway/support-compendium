import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ChampSelectComponent } from './champ-select/champ-select.component';
import { ChampDetailComponent } from './champ-detail/champ-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ChampSelectComponent, ChampDetailComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Support Compendium';
}
