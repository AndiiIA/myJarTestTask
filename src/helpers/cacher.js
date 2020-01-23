class cacher {
	constructor() {
		this.cache = new Map();
	}
	isCached(key) {
		return this.cache.has(key) ? { clientId: this.cache.get(key) } : false;
	}
	cacheAdd(key, value) {
		this.cache.set(key, value);
	}
	getCached(key) {
		return this.cache.get(key);
	}
	getCache() {
		return this.cache;
	}
}

// eslint-disable-next-line new-cap
module.exports = new cacher();