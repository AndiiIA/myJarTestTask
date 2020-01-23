const ClientModel = require('../models/ClientModel');
const validator = require('../helpers/validator');
const cacher = require('../helpers/cacher');
const logger = require('../helpers/logger');

class clientsController {
	// GET - Returns a list of clients
	static async get() {
		return ClientModel.getList();
	}

	// GET - Returns one client by ID
	static async getOne(req) {
		const { clientId } = req.params;
		return ClientModel.getOne(clientId);
	}

	// POST - Create a client
	static async createOne(req) {
		await validator.validate('ClientModel', req.body);

		const payloadHash = ClientModel.hashClient(req.body);
		if (cacher.isCached(payloadHash)) return cacher.getCached(payloadHash);
		const client = await ClientModel.createOne(req.body, payloadHash);
		await cacher.cacheAdd(payloadHash, client);
		return client;
	}

	// DELETE - Delete a client
	static async deleteOne(req) {
		const { clientId } = req.params;

		await ClientModel.deleteById(clientId);

		return { message: 'success' };
	}
	
	// PUT - Update a client
	static async updateClient(req)
	{
		const { clientId } = req.params;
		
		var clientToUpdate = [];
		
		//Check if the user which should be updated is existing
		clientToUpdate = await ClientModel.checkOne(clientId);
		
		if(clientToUpdate.length > 0)
		{
			logger.info('Update client...');
			
			//New payloadHash for new data
			const payloadHash = ClientModel.hashClient(req.body);
			if (cacher.isCached(payloadHash)) return cacher.getCached(payloadHash);
			
			//Update the client with certain Id
			await ClientModel.updateClient(req.body, payloadHash, clientId);
			
			await cacher.cacheAdd(payloadHash, req.body);
			
			return {message: 'success' };
		}
		else
		{
			return {message:'user with this id is not existing'};
		}
	}
}


module.exports = clientsController;