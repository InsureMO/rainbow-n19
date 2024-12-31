import {Optional} from '../TsAddon';
import {AnnotatedNode} from './AnnotatedNode';
import {ClassNode} from './ClassNode';
import {GroovyCodeVisitor} from './GroovyCodeVisitor';

export class ImportNode extends AnnotatedNode {
	private _type: Optional<ClassNode>;
	private readonly _alias: Optional<string>;
	private readonly _fieldName: Optional<string>;
	private readonly _packageName: Optional<string>;
	private readonly _isStar: boolean;
	private readonly _isStatic: boolean;

	/**
	 * 1. package name,<br>
	 * 2. class type,<br>
	 * 3. class type + alias,<br>
	 * 4. class type + field name + alias.
	 */
	constructor(packageNameOrClassType: string | ClassNode, fieldNameOrAlias?: string, alias?: string) {
		super();
		if (typeof packageNameOrClassType === 'string') {
			// package name
			this._type = null;
			this._alias = null;
			this._isStar = true;
			this._isStatic = false;
			this._packageName = packageNameOrClassType;
			this._fieldName = null;
		} else if (`${fieldNameOrAlias}`.trim().length === 0 || `${alias}`.trim().length === 0) {
			// class type
			this._type = packageNameOrClassType;
			this._alias = null;
			this._isStar = true;
			this._isStatic = true;
			this._packageName = null;
			this._fieldName = null;
		} else if (`${alias}`.trim().length === 0) {
			// class type and alias
			this._type = packageNameOrClassType;
			this._alias = fieldNameOrAlias;
			this._isStar = false;
			this._isStatic = false;
			this._packageName = null;
			this._fieldName = null;
		} else {
			// class type, field name and alias
			this._type = packageNameOrClassType;
			this._alias = alias;
			this._isStar = false;
			this._isStatic = true;
			this._packageName = null;
			this._fieldName = fieldNameOrAlias;
		}
	}

	/**
	 * @return the text display of this import
	 */

	get text(): string {
		const typeName = this.className;
		if (this.isStar && !this.isStatic) {
			// TODO WHY NOT ".*"?
			return 'import ' + this.packageName + '*';
		}
		if (this.isStar) {
			return 'import static ' + typeName + '.*';
		}
		if (this.isStatic) {
			if ((this.alias || '').length !== 0 && this.alias !== this.fieldName) {
				return 'import static ' + typeName + '.' + this.fieldName + ' as ' + this.alias;
			} else {
				return 'import static ' + typeName + '.' + this.fieldName;
			}
		}
		if ((this.alias || '').length === 0) {
			return 'import ' + typeName;
		} else {
			return 'import ' + typeName + ' as ' + this.alias;
		}
	}

	get isStar(): boolean {
		return this._isStar;
	}

	get isStatic(): boolean {
		return this._isStatic;
	}

	get alias(): Optional<string> {
		return this._alias;
	}

	get className(): Optional<string> {
		return this.type?.name;
	}

	get fieldName(): Optional<string> {
		return this._fieldName;
	}

	get packageName(): Optional<string> {
		return this._packageName;
	}

	get type(): Optional<ClassNode> {
		return this._type;
	}

	setType(type: ClassNode): void {
		this._type = type;
	}

	equals(that: any): boolean {
		if (that == this) {
			return true;
		}
		if (that == null || !(that instanceof ImportNode)) {
			return false;
		}

		const node = that;
		if (!this.type.equals(node.type)) {
			return false;
		}
		if (this.alias != node.alias) {
			return false;
		}
		if (this.fieldName != node.fieldName) {
			return false;
		}
		if (this.packageName != node.packageName) {
			return false;
		}
		return this.isStar == node.isStar && this.isStatic == node.isStatic;
	}

	visit(_visitor: GroovyCodeVisitor): void {
	}
}
