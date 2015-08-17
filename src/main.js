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
const canvas = new fabric.Canvas('calcCanvas', {
	backgroundColor: 'rgb(200,200,200)'
});

const rect = new fabric.Rect({
	width: 100,
	height: 100,
	left: 50,
	top: 50,
	fill: 'blue',
	angle: 30
});

canvas.add(rect);
