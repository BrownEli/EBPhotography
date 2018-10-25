import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortraitGallaryComponent } from './portrait-gallary/portrait-gallary.component';
import { MacroGallaryComponent } from './macro-gallary/macro-gallary.component';
import { LandscapeGallaryComponent } from './landscape-gallary/landscape-gallary.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { HomeCoverSlideshowComponent } from './home-cover-slideshow/home-cover-slideshow.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeComponent } from './home/home.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { FooterComponent } from './footer/footer.component';
import { FoodGallaryComponent } from './food-gallary/food-gallary.component';
import { OtherGallaryComponent } from './other-gallary/other-gallary.component';
import { BlackAndWhiteComponent } from './black-and-white/black-and-white.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { AnimalsComponent } from './animals/animals.component';

@NgModule({
  declarations: [
    AppComponent,
    PortraitGallaryComponent,
    MacroGallaryComponent,
    LandscapeGallaryComponent,
    ImageDialogComponent,
    HomeCoverSlideshowComponent,
    HomeAboutComponent,
    HomeComponent,
    GalleriesComponent,
    FooterComponent,
    FoodGallaryComponent,
    OtherGallaryComponent,
    BlackAndWhiteComponent,
    ArchitectureComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
