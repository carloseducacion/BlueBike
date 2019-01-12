import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesorPage } from '../profesor/profesor.page'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProfesorPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: "./p-home/p-home.module#PHomePageModule"
          }
        ]
      },
      {
        path: 'ranking',
        children: [
          {
            path: '',
            loadChildren: './p-ranking/p-ranking.module#PRankingPageModule'
          }
        ]
      },
      {
        path: 'scanner',
        children: [
          {
            path: '',
            loadChildren: './p-scanner/p-scanner.module#PScannerPageModule'
          }
        ]
      } ,   
      {
          path: '',
          redirectTo: '/profesor/home',
          pathMatch: 'full'
        }
    ]
  },
  {
    path: '',
    redirectTo: '/profesor/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
