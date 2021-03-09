import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { RouterModule, Routes } from '@angular/router';
import { LsServeursComponent } from './ls-serveurs/ls-serveurs.component';
const myRoutes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'cv', component: CvComponent},
  {path: 'serveurs', component: LsServeursComponent}
];

export const ISIE_ROUTING = RouterModule.forRoot(myRoutes);
