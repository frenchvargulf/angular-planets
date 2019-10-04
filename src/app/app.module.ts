import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { MenuContComponent } from "./menu-cont/menu-cont.component";
import { ProfileComponent } from "./profile/profile.component";
import { MenuElemComponent } from "./menu-cont/menu-elem/menu-elem.component";
import { APIService } from "./StarwarsCharacter.service";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment.prod";
import { PlanetsService } from "./mock.service";
import { CommonModule } from "@angular/common";
// import { RouterModule, Routes } from '@angular/router';

const apiProvider = {
  provide: APIService,
  useClass: environment ? APIService : PlanetsService
};

// const appRoutes: Routes = [
//   { path: 'planet/:name', component: ProfileComponent },
//   // { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    MenuContComponent,
    ProfileComponent,
    MenuElemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    CommonModule
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true }
    //   )
  ],
  providers: [apiProvider],
  bootstrap: [AppComponent]
})

export class AppModule {}
