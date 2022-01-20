import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './auth/_helpers/auth.interceptor';
import { AuthComponent } from './auth/auth.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { UploadExcelComponent } from './actions/upload-excel/upload-excel.component';
import { DownloadExcelComponent } from './actions/download-excel/download-excel.component';
import { DownloadPdfComponent } from './actions/download-pdf/download-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AuthComponent,
    UploadExcelComponent,
    DownloadExcelComponent,
    DownloadPdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
