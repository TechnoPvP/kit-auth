export interface Type<T = any> extends Function {
	new (...args: any[]): T;
}

export type InjectionToken = string | symbol | Type<any>;

export declare enum Scope {
	DEFAULT = 0,
	TRANSIENT = 1,
	REQUEST = 2
}

export interface ClassProvider<T = any> {
	provide: InjectionToken;
	useClass: Type<T>;
	scope?: Scope;
	inject?: never;
	durable?: boolean;
}

export type Provider<T = any> = Type<any> | ClassProvider<T>;

export interface ModuleMetadata {
	imports?: Array<Type<any>>;
	controllers?: Type<any>[];
	providers?: Provider[];
	exports?: Array<string | symbol | Provider>;
}
