const chai = require('chai');
// eslint-disable-next-line object-curly-newline
const cacher = require('../../src/helpers/cacher');

const { expect } = chai;

describe('cacher', () => {
	it('#cacheAdd should add one key-value pair', () => {
		const testKey = 'some-key';
		const testValue = 'some-value';
		cacher.cacheAdd(testKey, testValue);
		const cachedResults = cacher.getCache();
		expect(cachedResults)
			.to.have.lengthOf(1)
			.to.be.an('map')
			.that.has.key(testKey);
	});

	it('#isCached should return value if key in cache', () => {
		const testKey = 'some-key';
		const testValue = 'some-value';
		cacher.cacheAdd(testKey, testValue);
		const cachedResults = cacher.isCached(testKey);

		expect(cachedResults)
			.to.be.an('object')
			.that.has.property('clientId')
			.that.is.an('string')
			.that.equals(testValue);
	});

	it('#isCached should return false if not in cache', () => {
		const testKey = 'some-key';
		const testValue = 'some-value';
		cacher.cacheAdd(testKey, testValue);
		const cachedResults = cacher.isCached('key-not-in-map');

		expect(cachedResults)
			.to.be.an('boolean')
			.that.equals(false);
	});

	it('#getCached should return one value if key in cache', () => {
		const testKey = 'some-key';
		const testValue = 'some-value';
		cacher.cacheAdd(testKey, testValue);
		const cachedResults = cacher.getCached(testKey);

		expect(cachedResults)
			.to.be.an('string')
			.that.equals(testValue);
	});
});