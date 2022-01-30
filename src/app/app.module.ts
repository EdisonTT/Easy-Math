import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MathjaxModule } from 'mathjax-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewtonMethodComponent } from './newton-method/newton-method.component';
import { MidpointRuleComponent } from './midpoint-rule/midpoint-rule.component';
import { TrapizoidalRuleComponent } from './trapizoidal-rule/trapizoidal-rule.component';

@NgModule({
  declarations: [
    AppComponent,
    NewtonMethodComponent,
    MidpointRuleComponent,
    TrapizoidalRuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MathjaxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
