import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RoomService } from './services/roomService';
import { OfferComponent } from './offer/offer.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // osnovne rute
  {path:'',redirectTo:'rooms',pathMatch:'full'},
  {path:'rooms',component: RoomsComponent},
  {path:'recommendation',component: RecommendationComponent},
  {path:'offer',component: OfferComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    NavbarComponent,
    OfferComponent,
    RecommendationComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
