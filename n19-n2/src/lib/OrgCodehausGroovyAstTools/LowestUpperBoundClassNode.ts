import {IClass} from '../Java';
import {ClassHelper, ClassNode, GenericsType} from '../OrgCodehausGroovyAst';
import {Opcodes} from '../OrgObjectwebAsm';

export class LowestUpperBoundClassNode extends ClassNode {
	private readonly _lubName: string;
	private readonly _text: string;
	private readonly _upper: ClassNode;
	private readonly _sortedInterfaces: Array<ClassNode>;
	private readonly _compileTimeClassNode: ClassNode;

	constructor(name: string, upper: ClassNode, ...interfaces: Array<ClassNode>) {
		super(name, Opcodes.ACC_PUBLIC | Opcodes.ACC_FINAL, upper, interfaces, null);
		this._lubName = name;
		this._upper = upper;
		this._sortedInterfaces = (interfaces ?? []).sort((cn1, cn2) => {
			const n1 = cn1 instanceof LowestUpperBoundClassNode ? cn1.lubName : cn1.name;
			const n2 = cn2 instanceof LowestUpperBoundClassNode ? cn2.lubName : cn2.name;
			return n1.localeCompare(n2);
		});
		this._compileTimeClassNode = ClassHelper.isObjectType(upper) && interfaces.length > 0 ? interfaces[0] : upper;

		let sj: Array<string> = [];
		if (!ClassHelper.isObjectType(upper)) {
			sj.push(upper.text);
		}
		for (const i of this._sortedInterfaces) {
			sj.push(i.text);
		}
		this._text = '(' + sj.join(' or ') + ')';

		let usesGenerics = upper.isUsingGenerics;
		const genericsTypesList: Array<Array<GenericsType>> = [];
		genericsTypesList.push(upper.genericsTypes);
		for (const anInterface of this._sortedInterfaces) {
			usesGenerics = usesGenerics || anInterface.isUsingGenerics;
			genericsTypesList.push(anInterface.genericsTypes);
		}
		this.setUsingGenerics(usesGenerics);
		if (usesGenerics) {
			const flatList: Array<GenericsType> = [];
			for (const gts of genericsTypesList) {
				if (gts != null && gts.length !== 0) {
					flatList.push(...gts);
				}
			}
			this.setGenericsTypes(flatList);
		}
	}

	get lubName(): string {
		return this._lubName;
	}

	get text(): string {
		return this._text;
	}

	get name(): string {
		return this._compileTimeClassNode.name;
	}

	get typeClass(): IClass {
		return this._compileTimeClassNode.typeClass;
	}

	toString(x: boolean): string {
		return this.text;
	}

	asGenericsType(): GenericsType {
		let ubs: Array<ClassNode>;
		if (ClassHelper.isObjectType(this._upper)) {
			ubs = this._sortedInterfaces; // Object is implicit
		} else {
			ubs = [this._upper, ...this._sortedInterfaces];
		}
		const gt = new GenericsType(ClassHelper.makeWithoutCaching('?'), ubs, null);
		gt.setWildcard(true);
		return gt;
	}

	getPlainNodeReference(skipPrimitives?: boolean): ClassNode {
		if (skipPrimitives == null) {
			const interfaces: Array<ClassNode> = [];
			for (let i = 0; i < this._sortedInterfaces.length; i += 1) {
				interfaces.push(this._sortedInterfaces[i].getPlainNodeReference());
			}
			return new LowestUpperBoundClassNode(this._lubName, this._upper.getPlainNodeReference(), ...interfaces);
		} else {
			return super.getPlainNodeReference(skipPrimitives);
		}
	}
}
