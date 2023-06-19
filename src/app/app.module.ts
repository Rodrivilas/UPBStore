import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopEditComponent } from './shop-list/shop-edit/shop-edit.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { SidenavComponentComponent } from './header/sidenav/sidenav-component/sidenav-component.component';
import { LogoComponentComponent } from './header/logo-component/logo-component.component';
import { ShopOrderComponent } from './shop-list/shop-order/shop-order.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ContactoComponent } from './contacto/contacto.component';
import {MatCardModule} from '@angular/material/card';



const appRoutes: Routes = [
{ path: '', component: LandingPageComponent},
{path: 'about', component:ContactoComponent},
{ path: 'shop-list', component: ShopListComponent, 
...canActivate(()=> redirectUnauthorizedTo(['/login']))},
{ path: 'shop-edit', component: ShopEditComponent, 
...canActivate(()=> redirectUnauthorizedTo(['/login']))},
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ShopListComponent,
    ShopEditComponent,
    LandingPageComponent,
    SidenavComponentComponent,
    LogoComponentComponent,
    ShopOrderComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonToggleModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
