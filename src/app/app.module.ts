import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgIfAsCmpComponent } from './ng-if-as-cmp/ng-if-as-cmp.component';
import { CustomAsSyntaxDirective } from './custom-as-syntax-directive/custom-as-syntax.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgIfAsCmpComponent,
    CustomAsSyntaxDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
