/* eslint-disable @typescript-eslint/ban-types */

import type { ClassConstructor } from 'class-transformer';

export type RouteType = 'get' | 'post' | 'patch' | 'delete';

export type RouteHandlerFunction<T> = (() => T) | (() => Promise<T>);

export interface Route {
	type: RouteType;
	path: string;
	function: RouteHandlerFunction<any>;
}

export interface ControllerMetadata {
	controllerName: string;
	routes: Route[];
}

export type Target = string | Object | ClassConstructor<any>;

export class EndpointMetadataStorage {
	public readonly storage = new Map<string, ControllerMetadata>();

	constructor() {
		console.debug('Metadata storage initialized');
	}

	getTargetName(target: Target): string {
		if (typeof target === 'object') return target.constructor.name;
		if (typeof target === 'function') return target.name;

		return target;
	}

	get(target: Target): ControllerMetadata | undefined {
		const targetName = this.getTargetName(target);

		return this.storage.get(targetName);
	}

	set(target: Target, metadata: ControllerMetadata): void {
		const targetName = this.getTargetName(target);

		this.storage.set(targetName, metadata);
	}
}

export const storage = new EndpointMetadataStorage();
