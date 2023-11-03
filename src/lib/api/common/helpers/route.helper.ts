import { error, json, type RequestHandler } from '@sveltejs/kit';
import type { ClassConstructor } from 'class-transformer';
import { storage, type Route } from '../services/storage/metadata-storage.service';

export type Type = ClassConstructor<any>;

// interface Endpoint {
// 	path: string;
// 	function: Function;
// }

interface HandlerParams {
	handler?: string;
}

const createGetEndpoint = (controller: { endpoints?: Route[] }) => {
	const requestHandler: RequestHandler<Partial<HandlerParams>> = async ({ params }) => {
		if (!controller.endpoints) throw new Error('Not found');

		for (const endpoint of controller.endpoints) {
			if (endpoint.path === params.handler) {
				return json(await endpoint.function());
			}
		}

		throw new Error('Not found');
	};

	return requestHandler;
};

export const registerController = (controller: ClassConstructor<any>) => {
	const controllerInstance = new controller();
	const endpoints = storage.get(controllerInstance);

	// TODO: Test way of getting get instances
	const getEndpoints = endpoints?.routes.filter((route) => route.type === 'get');

	return {
		GET: createGetEndpoint({ endpoints: getEndpoints })
	};
};
