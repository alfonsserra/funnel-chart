import { Component, OnInit } from '@angular/core';
import { Level } from './funnel/funnel.component';
import { I18nService } from 'systelab-translate/lib/i18n.service';

@Component({
	selector:    'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	title = 'My funnel';

	public data: Array<Level> = [];

	constructor(protected i18nService: I18nService) {
		try {
			const lang = 'en';
			i18nService.use(lang)
				.subscribe(() => console.log('Language set to ' + lang),
					(error) => console.log('Error setting the language.'));

		} catch (e) {
			console.log(e);
		}
	}

	public ngOnInit() {
		this.data.push(new Level('Sin resultado', 200000, '#15aed1'));
		this.data.push(new Level('No validados', 400000, '#0c65a7'));
		this.data.push(new Level('Invalidadas', 500000, 'red'));
		this.data.push(new Level('Validados', 500000, '#88df75'));
		this.data.push(new Level('Retenidos', 500000, '#fda44a'));
		this.data.push(new Level('Impresos', 100000, '#149564'));
	}

	public doRefresh() {

	}
}
