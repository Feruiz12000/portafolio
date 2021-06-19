import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './components/welcome/welcome.component'
import { InicioComponent } from './components/inicio/inicio.component';
import { Pro1Component } from './components/pro1/pro1.component';
import { Pro2Component } from './components/pro2/pro2.component';
import { componentFactoryName } from '@angular/compiler';


const routes: Routes = [
  {
    path: '', redirectTo: 'welcome/inicio', pathMatch: 'full'
  },
  {
    path:'welcome', component: WelcomeComponent,
    children:[
      {
        path:'', redirectTo: 'inicio', pathMatch:'full'
      },
      {
        path:'inicio', component: InicioComponent
      },
      {
        path:'iVoting', component: Pro1Component
      },
      {
        path:'Arit', component: Pro2Component
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = {
  WelcomeComponent,
  InicioComponent,
  Pro1Component, 
  Pro2Component
}
