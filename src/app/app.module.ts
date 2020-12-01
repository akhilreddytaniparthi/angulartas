import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { AddressComponent } from './address/address.component';
import { ContactsOneComponent } from './contacts-one/contacts-one.component';
import { OfferComponent } from './offer/offer.component';
import { ReadyComponent } from './ready/ready.component';
import { FeaturesComponent } from './features/features.component';



 
  

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AccountComponent,
    AddressComponent,
    ContactsOneComponent,
    OfferComponent,
    ReadyComponent,
    FeaturesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

