import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { RouterModule, Routes } from '@angular/router';
import { LsServeursComponent } from './ls-serveurs/ls-serveurs.component';
import { MsWordComponent } from './ms-word/ms-word.component';
const myRoutes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'cv', component: CvComponent},
  {path: 'cv/:id', component: InfoComponent},
  {path: 'serveurs', component: LsServeursComponent},
  {path: 'msword', component: MsWordComponent}

];

export const ISIE_ROUTING = RouterModule.forRoot(myRoutes);
