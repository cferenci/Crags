import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NguiMapModule } from '@ngui/map';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapSearchComponent } from './map-search/map-search.component';
import { PopularCragsComponent } from './popular-crags/popular-crags.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CragsProfileComponent } from './crags-profile/crags-profile.component';
import { AddCragComponent } from './add-crag/add-crag.component';

@NgModule({
  declarations: [
    AppComponent,
    MapSearchComponent,
    PopularCragsComponent,
    AppHeaderComponent,
    CragsProfileComponent,
    AddCragComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'popular-crags', component: PopularCragsComponent},
      {path: 'map-search', component: MapSearchComponent},
    ]),
    NguiMapModule.forRoot({apiUrl:'https://maps.googleapis.com/maps/api/js?key=AIzaSyCLOCFHGLaJvseES8jwd226ry-ti8xkpkE'}),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
