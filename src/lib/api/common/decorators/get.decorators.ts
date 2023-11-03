import 'reflect-metadata';
import { storage } from '../services/storage/metadata-storage.service';

export const GET_METADATA_KEY = 'GET_METADATA_KEY';

interface GetDecoratorOptions {
	path: string;
}

export const Get = (path: string) => {
	return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
		if (!descriptor.value) return undefined;
		if (typeof descriptor.value !== 'function')
			throw new Error('Descriptor value is not a function');

		const designType: Function = Reflect.getMetadata('design:type', target, propertyKey);
		const metadataValue: GetDecoratorOptions = { path };
		const controllerName = target.constructor.name;

		Reflect.defineMetadata(GET_METADATA_KEY, metadataValue, target);

		storage.set(controllerName, {
			controllerName: controllerName,
			routes: [{ path: path, function: descriptor.value, type: 'get' }]
		});
	};
};
