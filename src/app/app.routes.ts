import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChampSelectComponent } from './champ-select/champ-select.component';
import { ChampDetailComponent } from './champ-detail/champ-detail.component';
import { ChampSynergyComponent } from './champ-synergy/champ-synergy.component';


export const routes: Routes = [
    {path: 'app-component', component: AppComponent },
    {path: 'champ-select', component: ChampSelectComponent},
    {path: 'champ-detail', component: ChampDetailComponent},
    {path: 'champ-detail/:championName', component: ChampDetailComponent },
    {path: 'champ-detail/:championName/synergy', component: ChampSynergyComponent}
];
