import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FunnelComponent } from './funnel/funnel.component';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabTranslateModule } from 'systelab-translate';
import { FilterComponent } from './filter/filter.component';

@NgModule({
	declarations:    [
		AppComponent,
		FunnelComponent,
		FilterComponent,
	],
	imports:         [
		BrowserModule,
		BrowserAnimationsModule,
		SystelabTranslateModule.forRoot(),
		SystelabComponentsModule.forRoot()
	],
	providers:       [],
	bootstrap:       [AppComponent],
	entryComponents: []
})
export class AppModule {
}
