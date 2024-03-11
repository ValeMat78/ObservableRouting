import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { AutoriComponent } from './autori/autori.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo:"home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path: 'libri',component:LibroComponent },
  {path: 'autori',component:AutoriComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
