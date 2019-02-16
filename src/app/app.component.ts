import { Component, Input, OnInit } from '@angular/core';
import { Level } from './funnel/funnel.component';

@Component({
	selector:    'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	title = 'My funnel';

	public data: Array<Level> = [];

	constructor() {

	}

	public ngOnInit() {
		this.data.push(new Level('Asset Discovery', 200000, '#15aed1'));
		this.data.push(new Level('Asset Discovery', 400000, '#0c65a7'));
		this.data.push(new Level('Asset Discovery', 500000, '#fda44a'));
		this.data.push(new Level('Asset Discovery', 500000, '#88df75'));
		this.data.push(new Level('Asset Discovery', 500000, '#149564'));
		this.data.push(new Level('Asset Discovery', 10000, 'red'));
	}
}
