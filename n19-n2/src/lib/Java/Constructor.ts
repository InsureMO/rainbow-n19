import {AbstractExecutable} from './AbstractExecutable';
import {IConstructorConstructorArgs} from './ConstructorArgs';
import {Modifier, ParameterHelper} from './Helpers';
import {IClass, IConstructor, MemberType} from './Interfaces';

export class Constructor extends AbstractExecutable implements IConstructor {
	constructor(declaringClass: IClass,
	            more?: IConstructorConstructorArgs) {
		super(declaringClass, more);
	}

	get memberType(): MemberType.CONSTRUCTOR {
		return MemberType.CONSTRUCTOR;
	}

	/**
	 * same as declaring class name
	 */
	get name(): string {
		return this.declaringClass.name;
	}

	/**
	 * do nothing, since constructor name is fixed, same as declaring class name
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setName(_name: string): this {
		return this;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean {
		if (this === o) {
			return true;
		}
		if (o == null || !(o instanceof Constructor)) {
			return false;
		}

		return this.declaringClassName === o.declaringClassName
			&& ParameterHelper.equalParameterTypes(this.parameterTypes, o.parameterTypes);
	}

	asKey(): string {
		return [
			'',
			this.parameterTypes.map(parameterType => parameterType.name),
			''
		].join('\t');
	}

	protected specificToStringHeader(sb: string): string {
		return sb + this.declaringClass.typeName;
	}

	toString(): string {
		return this.sharedToString(Modifier.constructorModifiers(), false, this.parameterTypes, this.thrownTypes);
	}

	protected specificToGenericStringHeader(sb: string): string {
		return this.specificToStringHeader(sb);
	}

	toGenericString(): string {
		return this.sharedToGenericString(Modifier.constructorModifiers(), false);
	}

	toShortString(): string {
		let sb: string = 'constructor ';
		sb = sb + this.declaringClass.typeName;
		sb = sb + '(';
		sb = sb + this.parameterTypes.map(parameterType => parameterType.typeName).join(',');
		sb = sb + ')';
		return sb;
	}
}