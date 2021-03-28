import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterService } from './services/router.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NotesService } from './services/notes.service';

const routes: Routes=[
  {
    path : 'login' , component:LoginComponent
  },
  {
    path: "dashboard" , component:DashboardComponent, canActivate :[CanActivateRouteGuard]
  }
]
@NgModule({
  declarations: [DashboardComponent,
    LoginComponent,
  HeaderComponent,
  AppComponent ],
  imports: [ BrowserModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
  ],

  providers: [  
    AuthenticationService , 
    CanActivateRouteGuard,
     RouterService,
     NotesService,
    ],
  bootstrap: [ AppComponent]
})

export class AppModule { }
