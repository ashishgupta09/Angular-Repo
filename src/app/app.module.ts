import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { PercentagePipe } from 'src/pipes/percentage.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDriveFormComponent } from './template-drive-form/template-drive-form.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from 'src/services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateDriveFormComponent,
    ReactiveFormComponent,
    PercentagePipe,
    ObservableComponent,
    SubjectComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}, 
  provideAnimations(), 
  provideToastr()] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
