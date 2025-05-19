import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { DataListComponent } from "./data-list/data-list.component"
import { ExtchangedataComponent } from "./extchangedata/extchangedata.component"

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'data', component: DataListComponent },
    { path: 'extchange', component: ExtchangedataComponent },
    { path: '**' ,redirectTo : '', pathMatch: 'full'},
];
