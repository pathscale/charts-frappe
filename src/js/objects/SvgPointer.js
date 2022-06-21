import { $ } from '../utils/dom';
import {createSVG, FONT_SIZE, makeSVGContainer} from "../utils/draw";
import {BASE_MEASURES} from "../utils/constants";

export default class SvgPointer {
	constructor({
		parent = null,
		colors = []
	}) {
		this.parent = parent;
		this.colors = colors;

		this.x = 0;
		this.y = 0;

		this.top = 0;
		this.left = 0;

		this.setup();
	}

	setup() {
		this.makePointer();
	}

	refresh() {
		this.calcPosition();
		this.fill();
	}

	makePointer() {
		this.container = $.create('div', {
			inside: this.parent,
			className: 'graph-svg-pointer comparison',
			innerHTML: ``
		});
		this.hidePointer();

		this.parent.addEventListener('mouseleave', () => {
			this.hidePointer();
		});
	}

	fill() {
		this.container.innerHTML = '';
		this.svg = makeSVGContainer(
			this.container,
			'mouse-pointer',
			this.container.parentElement.offsetWidth,
			this.container.parentElement.offsetHeight
		);
		let lX = createSVG('line', {
			className: "line-vertical dashed",
			x1: 0,
			x2: this.container.parentElement.offsetWidth,
			y1: this.container.parentElement.offsetHeight - Math.abs(this.top),
			y2: this.container.parentElement.offsetHeight - Math.abs(this.top),
			styles: {
				stroke: "#666"
			}
		});

		const LABEL_MARGIN = 4;
		let textX = createSVG('text', {
			x: this.left + this.container.parentElement.offsetWidth / 2,
			y: this.container.parentElement.offsetHeight - FONT_SIZE - LABEL_MARGIN - BASE_MEASURES.margins.bottom,
			dy: FONT_SIZE + 'px',
			'font-size': FONT_SIZE + 'px',
			'text-anchor': 'start',
			'fill': '#555b51',
			innerHTML: ""
		});

		let lY = createSVG('line', {
			className: "line-horizontal dashed",
			x1: this.left + this.container.parentElement.offsetWidth / 2,
			x2: this.left + this.container.parentElement.offsetWidth / 2,
			y1: 0,
			y2: this.container.parentElement.offsetHeight,
			styles: {
				stroke: "#666"
			}
		});

		let textY = createSVG('text', {
			x: this.container.parentElement.offsetWidth - BASE_MEASURES.margins.right - BASE_MEASURES.paddings.right,
			y: this.container.parentElement.offsetHeight - Math.abs(this.top),
			dy: (FONT_SIZE * -1) + 'px',
			'font-size': FONT_SIZE + 'px',
			'text-anchor': 'start',
			'fill': '#555b51',
			innerHTML: ""
		});

		this.svg.appendChild(lX);
		this.svg.appendChild(textX);
		this.svg.appendChild(lY);
		this.svg.appendChild(textY);
	}

	calcPosition() {
		let width = this.container.offsetWidth;
		this.top = this.y - this.container.offsetHeight;
		this.left = this.x - width/2;
	}

	setValues(x, y) {
		this.x = x;
		this.y = y;
		this.refresh();
	}

	hidePointer() {
		this.container.style.top = '0px';
		this.container.style.left = '0px';
		this.container.style.opacity = '0';
	}

	showPointer() {
		this.container.style.opacity = '1';
	}
}
