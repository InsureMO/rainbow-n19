import {AbstractExecutable} from './AbstractExecutable';
import {IMethodConstructorArgs, IReturnedConstructorArgs} from './ConstructorArgs';
import {GenericArrayType, ParameterizedType, TypeVariable, WildcardType} from './GenericTypes';
import {BuiltInConstants, Modifier, ParameterHelper} from './Helpers';
import {IAnnotatedType, IClass, IMethod, IReturned, IType, MemberType} from './Interfaces';
import {Returned} from './Returned';
import {TypeOrName} from './TypeAlias';

export class Method extends AbstractExecutable implements IMethod {
	private _returned: IReturned = null;

	constructor(declaringClass: IClass,
	            more?: IMethodConstructorArgs) {
		super(declaringClass, more);
		// default returns void
		this.setReturnedTypeOrName(more?.returnedTypeOrName ?? BuiltInConstants.P_VOID);
	}

	get memberType(): MemberType.METHOD {
		return MemberType.METHOD;
	}

	get isDefault(): boolean {
		return ((this.modifiers & (Modifier.ABSTRACT | Modifier.PUBLIC | Modifier.STATIC)) == Modifier.PUBLIC)
			&& this.declaringClass.isInterface;
	}

	get isStatic(): boolean {
		return Modifier.isStatic(this.modifiers);
	}

	get isFinal(): boolean {
		return Modifier.isFinal(this.modifiers);
	}

	get isSynchronized(): boolean {
		return Modifier.isSynchronized(this.modifiers);
	}

	get isAbstract(): boolean {
		return Modifier.isAbstract(this.modifiers);
	}

	get isNative(): boolean {
		return Modifier.isNative(this.modifiers);
	}

	get isStrict(): boolean {
		return Modifier.isMandated(this.modifiers);
	}

	get isBridge(): boolean {
		return (this.modifiers & Modifier.BRIDGE) !== 0;
	}

	get returned(): IReturned {
		return this._returned;
	}

	get returnedType(): IClass {
		return this.returned.type;
	}

	get genericReturnedType(): IType {
		return this.returned.genericType;
	}

	get annotatedReturnedType(): IAnnotatedType {
		return this.returned.annotatedType;
	}

	setReturnedTypeOrName(typeOrNameOrArgs?: TypeOrName | IReturnedConstructorArgs): this {
		if (typeOrNameOrArgs == null) {
			if (this._returned == null) {
				this._returned = new Returned(this);
			}
		} else if (typeof typeOrNameOrArgs === 'string'
			|| typeOrNameOrArgs instanceof TypeVariable
			|| typeOrNameOrArgs instanceof ParameterizedType
			|| typeOrNameOrArgs instanceof GenericArrayType
			|| typeOrNameOrArgs instanceof WildcardType) {
			if (this._returned == null) {
				this._returned = new Returned(this, {typeOrName: typeOrNameOrArgs});
			} else {
				this._returned.setTypeOrName(typeOrNameOrArgs);
			}
		} else {
			if (this._returned == null) {
				this._returned = new Returned(this, typeOrNameOrArgs);
			} else {
				this._returned.setTypeOrName(typeOrNameOrArgs.typeOrName);
				this._returned.setDeclaredAnnotations(typeOrNameOrArgs.declaredAnnotations);
			}
		}

		return this;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean {
		if (this === o) {
			return true;
		}
		if (o == null || !(o instanceof Method)) {
			return false;
		}

		return this.declaringClassName === o.declaringClassName
			&& this.name === o.name
			&& this.returned.equals(o.returned)
			&& ParameterHelper.equalParameterTypes(this.parameterTypes, o.parameterTypes);
	}

	asKey(): string {
		return [
			'',
			this.name,
			this.parameterTypes.map(parameterType => parameterType.name),
			''
		].join('\t');
	}

	protected specificToStringHeader(sb: string): string {
		sb = sb + this.returnedType.typeName + ' ';
		sb = sb + this.declaringClass.typeName + '.';
		sb = sb + this.name;
		return sb;
	}

	toString(): string {
		return this.sharedToString(Modifier.methodModifiers(), this.isDefault, this.parameterTypes, this.thrownTypes);
	}

	protected specificToGenericStringHeader(sb: string): string {
		sb = sb + this.genericReturnedType.typeName + ' ';
		sb = sb + this.declaringClass.typeName + '.';
		sb = sb + this.name;
		return sb;
	}

	toGenericString(): string {
		return this.sharedToGenericString(Modifier.methodModifiers(), this.isDefault);
	}

	toShortString(): string {
		let sb: string = 'method ';
		sb = sb + this.declaringClass.typeName + '.';
		sb = sb + this.name;
		sb = sb + '(';
		sb = sb + this.parameterTypes.map(parameterType => parameterType.typeName).join(',');
		sb = sb + ')';
		return sb;
	}
}
