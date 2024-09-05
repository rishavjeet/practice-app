
const assert = require('assert');

describe('Test suite for numeric operations', ()=>{
	it('Test Addition of 2 numbers', ()=>{
		const num1 = 10;
		const num2 = 20;

		const result = num1 + num2;

		assert.equal(result, 30);

	});
});
