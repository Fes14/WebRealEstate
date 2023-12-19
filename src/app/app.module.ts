import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HeaderComponent} from './features/base-components/header/header.component';
import {FooterComponent} from './features/base-components/footer/footer.component';
import {BaseRoutingModule} from "./base-routing/base-routing.module";
import {RealEstatePageComponent} from './features/pages/real-estate-page/real-estate-page.component';
import {MatTableModule} from "@angular/material/table";
import {MainPageComponent} from './features/pages/main-page/main-page.component';
import {MatMenuModule} from "@angular/material/menu";
import {RealEstateDetailComponent} from './features/pages/real-estate-page/real-estate-detail/real-estate-detail.component';
import {MatCardModule} from "@angular/material/card";
import {RealEstateEditPageComponent} from './features/pages/real-estate-edit-page/real-estate-edit-page.component';
import {RestService} from "./core/rest.service";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import {RealEstateCreateComponent} from './features/pages/real-estate-page/real-estate-create/real-estate-create.component';
import {MatDialogModule} from "@angular/material/dialog";
import {PreloaderService} from "./core/preloader.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RealEstatePageComponent,
    MainPageComponent,
    RealEstateDetailComponent,
    RealEstateEditPageComponent,
    RealEstateCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    BaseRoutingModule,
    MatTableModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [RestService, PreloaderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
