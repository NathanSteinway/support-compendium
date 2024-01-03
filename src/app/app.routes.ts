import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChampSelectComponent } from './champ-select/champ-select.component';
import { ChampAlertComponent } from './champ-alert/champ-alert.component';


export const routes: Routes = [
    {path: 'app-component', component: AppComponent },
    {path: 'champ-select', component: ChampSelectComponent},
    {path: 'champ-alert', component: ChampAlertComponent}
];
