import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'exemplo2', loadChildren: './exemplo2/exemplo2.module#Exemplo2PageModule' },
  { path: 'exemplo3', loadChildren: './exemplo3/exemplo3.module#Exemplo3PageModule' },
  { path: 'exemplo4', loadChildren: './exemplo4/exemplo4.module#Exemplo4PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
