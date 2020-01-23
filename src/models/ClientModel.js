const db = require('../helpers/postgres');
const queries = require('./sql/queries');
const crypto = require('crypto');
const logger = require('../helpers/logger');

class ClientModel {
	// Returns a list of clients
	static async getList(search = {})
	{	
		return db.any(queries.clients.get, search);
	}

	// Returns Client by ID
	static async getOne(clientId) {
		return db.one(queries.clients.getOne, { clientId });
	}
	
	// Returns Client by ID if existing
	static async checkOne(clientId) {
		return db.any(queries.clients.getOne, { clientId });
	}

	// Create client
	static async createOne(clientData, payloadHash) {
		return db.one(queries.clients.createOne, {
			...clientData,
			payloadHash,
		});
	}

	// Delete Client by id
	static async deleteById(clientId) {
		return db.none(queries.clients.deleteOne, { clientId });
	}

	//Update Client by ID
	static async updateClient(clientData, payloadHash, clientId) {
		return db.none(queries.clients.updateClient, { ...clientData, payloadHash, clientId });
	}
	
	// Hash client data
	static hashClient(clientData) {
		return crypto.createHash('sha256').update(JSON.stringify(clientData)).digest('base64');
	}
}

module.exports = ClientModel;
