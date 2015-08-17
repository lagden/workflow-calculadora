'use strict';

function soma(...v) {
	return v.reduce((p, c) => p + c);
}

export default soma;
