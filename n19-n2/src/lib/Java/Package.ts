import {INamedElement, IPackage} from './Interfaces';

export class Package implements INamedElement, IPackage {
	private _name: string;

	get name(): string {
		return this._name;
	}

	setName(name: string): this {
		this._name = name;
		return this;
	}
}
