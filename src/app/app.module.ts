import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleChangeDirective } from './direct/style-change.directive';
import { RenderStyleDirective } from './directives/render-style.directive';
import { DependancyComponent } from './dependancy/dependancy.component';``
import { HttpClientModule } from '@angular/common/http';
import { HttpCallComponent } from './http-call/http-call.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleChangeDirective,
    RenderStyleDirective,
    DependancyComponent,
    HttpCallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
