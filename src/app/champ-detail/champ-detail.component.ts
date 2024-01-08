import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-champ-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './champ-detail.component.html',
  styleUrls: ['./champ-detail.component.css']
})

export class ChampDetailComponent implements OnInit {
  
  champName: string;

  constructor(private route: ActivatedRoute) {
    this.champName = '';
  }

  ngOnInit() {
    const championName = this.route.snapshot.paramMap.get('championName');
    if (championName !== null) {
      this.champName = championName;
    }
  }
  
}
