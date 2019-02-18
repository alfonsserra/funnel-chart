import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { FunnelComponent } from './funnel/funnel.component';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { SystelabTranslateModule } from 'systelab-translate';

import { FilterComponent } from './filter/filter.component';
import { GridHeaderContextMenuComponent } from 'systelab-components/widgets/grid/contextmenu/grid-header-context-menu.component';
import { GridContextMenuCellRendererComponent } from 'systelab-components/widgets/grid/contextmenu/grid-context-menu-cell-renderer.component';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MessagePopupService } from 'systelab-components/widgets/modal';
import { DialogService } from 'systelab-components/widgets/modal/dialog/dialog.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PercentageCircleComponent } from './circle/percentage-circle.component';

@NgModule({
	declarations:    [
		AppComponent,
		FunnelComponent,
		FilterComponent,
		PercentageCircleComponent
	],
	imports:         [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		DragDropModule,
		HttpClientModule,
		SystelabComponentsModule.forRoot(),
		SystelabTranslateModule.forRoot(),
		SystelabPreferencesModule.forRoot(),

		AgGridModule.withComponents([
			GridContextMenuCellRendererComponent,
			GridHeaderContextMenuComponent
		])
	],
	providers:       [MessagePopupService,
		DialogService],
	bootstrap:       [AppComponent],
	entryComponents: []
})
export class AppModule {
}
