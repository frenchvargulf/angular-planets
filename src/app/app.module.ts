import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginationComponent } from './pagination/pagination.component';
import { HttpClientModule }    from '@angular/common/http';
import { PlanetSearchComponent } from './planet-search/planet-search.component';
// import { MdCardModule, MdInputModule } from '@angular/material';

import {MatPaginatorModule} from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetDetailComponent,
    PaginationComponent,
    PlanetSearchComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
