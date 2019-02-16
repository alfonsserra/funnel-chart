import { Component, Input, OnChanges } from '@angular/core';

export class Level {
	constructor(public label: string, public value: number, public color: string) {

	}
}

@Component({
	selector:    'app-funnel',
	templateUrl: 'funnel.component.html',
	styleUrls:   ['funnel.component.scss']
})
export class FunnelComponent implements OnChanges {

	@Input() public fontSize = '4';
	@Input() public fontColor = '#000000';
	@Input() public data: Array<Level> = [];

	constructor() {

	}

	public ngOnChanges() {
		let y = 0;
		const total = this.data.map((level) => level.value)
			.reduce((sum, current) => sum + current, 0);
		this.data.forEach((level) => y += this.createLevel(level, total, y));
	}

	private createLevel(level: Level, total: number, y: number): number {
		if (level.value > 0) {
			const height = ((level.value / total) * 100);
			this.createRect(height, level, total, y);
			this.createLabel(height, level, y + height);
			return height;
		}
		return 0;
	}

	private createRect(height, level: Level, total: number, y: number) {
		const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect'); // Create the rect element.
		rect.setAttribute('width', '100%');
		rect.setAttribute('height', height.toString());
		rect.setAttribute('x', '0');
		rect.setAttribute('y', y.toString());
		rect.setAttribute('fill', level.color);
		rect.setAttribute('title', level.label);
		rect.setAttribute('class', 'level-rect');
		document.querySelector('.funnel g.levels')
			.appendChild(rect);
		rect.onclick = (event) => this.onClick(event, level);

	}

	private createLabel(height, level: Level, y: number) {
		const valString = level.value.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		const labels = document.querySelector('.labels');
		const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');  // Create the line element.
		const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');  // Create the text element.
		const tspan1 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan'); // Create the tspan element.
		const tspan2 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan'); // Create the tspan element.
		const textNode1 = document.createTextNode(level.label);
		const textNode2 = document.createTextNode(valString);
		const xPos = 78;
		const yPos = y - height / 2;
		line.setAttribute('x1', '30');
		line.setAttribute('y1', yPos.toString());
		line.setAttribute('x2', xPos.toString());
		line.setAttribute('y2', yPos.toString());
		line.setAttribute('stroke', level.color);
		line.setAttribute('stroke-width', '.25');
		text.setAttribute('font-size', this.fontSize);
		text.setAttribute('fill', this.fontColor);
		tspan1.setAttribute('x', (xPos + 2).toString());
		tspan2.setAttribute('x', (xPos + 2).toString());
		tspan1.setAttribute('y', (yPos - 1.5).toString());
		tspan2.setAttribute('y', (yPos + 3.5).toString());
		tspan1.appendChild(textNode1);
		tspan2.appendChild(textNode2);
		tspan1.onclick = (event) => this.onClick(event, level);
		tspan2.onclick = (event) => this.onClick(event, level);

		text.appendChild(tspan1);
		text.appendChild(tspan2);
		labels.appendChild(line);
		labels.appendChild(text); // Append the line and label to the SVG.
	}

	public onClick(event: any, level: Level) {
		console.log(level);
	}
}
