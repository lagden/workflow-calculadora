/* global window */
'use strict';

import {fabric} from '../vendor/lib/fabric/dist/fabric';
import calculadora from './modules/calculadora';

// Calculadora Stuff
const x = calculadora(6);
const r = x
	.plus(50, 4)
	.less(5, 55, 10);

console.log(`6  + sum(50, 4)      ---> 50 + 4       = 60`);
console.log(`60 - less(5, 55, 10) ---> 5 - 55 - 10  = ${r.number}`);

// Fabric Stuff
function retina(canvas) {
	if (window.devicePixelRatio !== 1) {
		const c = canvas.getElement();
		const w = c.width;
		const h = c.height;
		c.setAttribute('width', w * window.devicePixelRatio);
		c.setAttribute('height', h * window.devicePixelRatio);
		c.getContext('2d').scale(window.devicePixelRatio, window.devicePixelRatio);
	}
}

const backgroundColor = 'rgb(200,200,200)';
const canvas = new fabric.StaticCanvas('calcCanvas', {backgroundColor});
retina(canvas);

const [width, height, top, left, angle, fill] = [100, 100, 50, 50, 30, 'red'];
const rectA = new fabric.Rect({width, height, left, top, angle, fill: 'blue'});
const rectB = new fabric.Rect({width, height, left: 200, top, angle, fill});

canvas.add(rectA, rectB);
