import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  Title,
  Meta,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UkModuleModule } from './uk-module/uk-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    UkModuleModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync(), Title, Meta],
  bootstrap: [AppComponent],
})
export class AppModule {}
