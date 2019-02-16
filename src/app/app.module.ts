import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FunnelComponent } from './funnel/funnel.component';

@NgModule({
	declarations:    [
		AppComponent,
		FunnelComponent
	],
	imports:         [
		BrowserModule,
		BrowserAnimationsModule,
	],
	providers:       [],
	bootstrap:       [AppComponent],
	entryComponents: []
})
export class AppModule {
}
