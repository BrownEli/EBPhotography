import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleriesComponent } from './galleries/galleries.component'
import { PortraitGallaryComponent } from './portrait-gallary/portrait-gallary.component';
import { MacroGallaryComponent } from './macro-gallary/macro-gallary.component';
import { LandscapeGallaryComponent } from './landscape-gallary/landscape-gallary.component';
import { FoodGallaryComponent } from './food-gallary/food-gallary.component';
import { EverydayObjectGallaryComponent } from './everyday-object-gallary/everyday-object-gallary.component';
import { BlackAndWhiteComponent } from './black-and-white/black-and-white.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { AnimalsComponent } from './animals/animals.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
	path: 'galleries',
	component: GalleriesComponent ,
	children:[
		{ path: 'macro' ,component: MacroGallaryComponent, children: [
      { path: 'img', component: ImageDialogComponent }
    ] },
		{ path: 'landscape' ,component: LandscapeGallaryComponent, children: [
      { path: 'img', component: ImageDialogComponent }
    ] },
        { path: 'architecture' ,component: ArchitectureComponent, children: [
      { path: 'img', component: ImageDialogComponent }
    ] },
		{ path: 'portrait' ,component: PortraitGallaryComponent, children: [
      { path: 'img', component: ImageDialogComponent }
    ] },
		{ path: 'food' ,component: FoodGallaryComponent, children: [
      { path: 'img', component: ImageDialogComponent }
    ] },
        { path: 'animals' ,component: AnimalsComponent, children: [
      { path: 'img', component: ImageDialogComponent }
    ] },
        { path: 'black-and-white' ,component: BlackAndWhiteComponent, children: [
      { path: 'img', component: ImageDialogComponent }
    ] },
		{ path: 'other' ,component: EverydayObjectGallaryComponent, children: [
      { path: 'img', component: ImageDialogComponent }
    ] },
		{ path: '', redirectTo: 'macro', pathMatch: 'full'}
	]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
