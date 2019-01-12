import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioPage } from '../usuario/usuario.page'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPage,
    children: [
        {
            path: 'login',
            children: [
              {
                path: '',
                loadChildren: "./login/login.module#LoginPageModule"
              }
            ]
          },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: "./u-home/u-home.module#UHomePageModule"
          }
        ]
      },
      {
        path: 'ranking',
        children: [
          {
            path: '',
            loadChildren: './u-ranking/u-ranking.module#URankingPageModule'
          }
        ]
      },
      {
          path: '',
          redirectTo: '/usuario/home',
          pathMatch: 'full'
        }
    ]
  },
  {
    path: '',
    redirectTo: '/usuario/home',
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