import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { EmailConfirmComponent} from '../app/email-confirm/email-confirm.component';
import { RegistrationFormComponent} from '../app/registration-form/registration-form.component';
import { AccountComponent } from './account/account.component';
import { AddressComponent } from './address/address.component';
import { ContactsOneComponent } from './contacts-one/contacts-one.component';
import { OfferComponent } from './offer/offer.component';
import { ReadyComponent } from './ready/ready.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',component: RegisterComponent},
  { path : 'register',component : RegisterComponent},
  { path : 'registration-form', component : RegistrationFormComponent},
  { path :'email-confirm',component : EmailConfirmComponent},
  { path : 'welcome',component : WelcomeComponent},
  { path : 'account',component : AccountComponent},
  { path : 'address',component : AddressComponent},
  { path : 'ready',component : ReadyComponent},
  { path : 'contacts-one',component : ContactsOneComponent},
  { path : 'offer',component : OfferComponent},


  
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrationFormComponent,EmailConfirmComponent,WelcomeComponent,AccountComponent,AddressComponent,
                                  ContactsOneComponent,OfferComponent,ReadyComponent, RegisterComponent]
