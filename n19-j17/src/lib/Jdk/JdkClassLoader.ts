import {Java} from '@rainbow-n19/n2';

export class JDKClassLoader extends Java.JREClassLoader {
	constructor() {
		super('17.0.4.1');
	}

	vendor(): string{
		return 'Amazon.com Inc.';
	}
}
