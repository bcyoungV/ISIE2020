import { FirstService } from './first.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { DetailComponent } from './detail/detail.component';
import { LsComponent } from './ls/ls.component';
import { ItemComponent } from './item/item.component';
import { CustomDirDirective } from './custom-dir.directive';
import { NoImagePipe } from './no-image.pipe';
import { ShortPipe } from './short.pipe';
import { RecrueComponent } from './recrue/recrue.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ISIE_ROUTING } from './app.routing';
import { LsServeursComponent } from './ls-serveurs/ls-serveurs.component';
import { FiltrePipe } from './filtre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    DetailComponent,
    LsComponent,
    ItemComponent,
    CustomDirDirective,
    NoImagePipe,
    ShortPipe,
    FiltrePipe,
    RecrueComponent,
    HomeComponent,
    LsServeursComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ISIE_ROUTING
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
