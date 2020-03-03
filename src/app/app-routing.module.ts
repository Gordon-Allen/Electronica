import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },

  {
    path: "artists",
    loadChildren: () => import('./artists/artists.module')
                        .then(mod => {
                        console.log('in promise loadChildren');
                        return mod.ArtistsModule;
                        }),
},
  { path: "**", component: NotfoundComponent, pathMatch: "full" }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
