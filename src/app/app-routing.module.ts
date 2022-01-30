import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewtonMethodComponent } from './newton-method/newton-method.component';
import { MidpointRuleComponent } from './midpoint-rule/midpoint-rule.component';
import { TrapizoidalRuleComponent } from './trapizoidal-rule/trapizoidal-rule.component';

const routes: Routes = [
  {
    path : "",
    component : NewtonMethodComponent
  },
  {
    path : "newton's-method",
    component : NewtonMethodComponent
  },
  {
    path : "midpoint-rule",
    component : MidpointRuleComponent
  },
  {
    path : "trapezoidal-rule",
    component : TrapizoidalRuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
