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
import { FilterPipe } from './filter.pipe';
import { RecrueComponent } from './recrue/recrue.component';

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
    FilterPipe,
    RecrueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
