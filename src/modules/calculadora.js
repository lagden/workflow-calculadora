'use strict';

import soma from './soma';
import subtrai from './subtrai';

function calculadora(number) {
	const doit = (fn) => (...n) => calculadora(fn(...[number].concat(n)));
	const plus = doit(soma);
	const less = doit(subtrai);
	return {number, plus, less};
}

export default calculadora;
