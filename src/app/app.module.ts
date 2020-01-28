import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BuildoneComponent } from './pages/buildone/buildone.component';
import { PrivateComponent } from './pages/private/private.component';
import { HttpClientModule } from '@angular/common/http';
import { FullComponent } from './full/full.component';
import { TestUIComponent } from './pages/test-ui/test-ui.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RedirectComponent } from './redirect/redirect.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    BuildoneComponent,
    PrivateComponent,
    FullComponent,
    TestUIComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
