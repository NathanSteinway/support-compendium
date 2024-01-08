import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink} from '@angular/router';
import { ChampDetailComponent } from '../champ-detail/champ-detail.component';

@Component({
  selector: 'app-champ-select',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ChampDetailComponent],
  templateUrl: './champ-select.component.html',
  styleUrl: './champ-select.component.css'
})

export class ChampSelectComponent {

  champions = [
    { name: 'Alistar', imagePath: '../../assets/AlistarSquare.png' },
    { name: 'Rakan', imagePath: '../../assets/RakanSquare.png' },
    { name: 'Nautilus', imagePath: '../../assets/NautilusSquare.png' },
  ];


  selectedChampion: string | null = null;

  selectChampion(championName: string) {
    this.selectedChampion = championName;
  }
}
