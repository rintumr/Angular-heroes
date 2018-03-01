import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    exports:[RouterModule],
    imports:[RouterModule.forRoot(routes)]
})

const routes:Routes=[
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path:'heroes', component:HeroesComponent },
{ path:'dashboard', component:DashboardComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
