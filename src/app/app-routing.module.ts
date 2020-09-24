import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapSearchComponent } from './map-search/map-search.component';
import { PopularCragsComponent } from './popular-crags/popular-crags.component';
import { CragsProfileComponent } from './crags-profile/crags-profile.component';
import { AddCragComponent } from './add-crag/add-crag.component';


const routes: Routes = [
  { path: 'popular-crags', component: PopularCragsComponent },
  { path: 'map-search', component: MapSearchComponent },
  { path: 'crags-profile', component: CragsProfileComponent },
  { path: 'add-crag', component: AddCragComponent },
  { path: '**', component: PopularCragsComponent  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
