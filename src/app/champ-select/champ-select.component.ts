import { Component } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { ChampAlertComponent } from '../champ-alert/champ-alert.component';

@Component({
  selector: 'app-champ-select',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ChampAlertComponent],
  templateUrl: './champ-select.component.html',
  styleUrl: './champ-select.component.css'
})

export class ChampSelectComponent {

}
