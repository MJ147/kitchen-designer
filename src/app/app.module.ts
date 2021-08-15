import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WallComponent } from './components/wall/wall.component';
import { CabinetComponent } from './components/cabinet/cabinet.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
	declarations: [AppComponent, WallComponent, CabinetComponent],
	imports: [BrowserModule, AppRoutingModule, DragDropModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
