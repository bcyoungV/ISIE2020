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
import { FilterPipe } from './filter.pipe';
import { RecrueComponent } from './recrue/recrue.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

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
    RecrueComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
