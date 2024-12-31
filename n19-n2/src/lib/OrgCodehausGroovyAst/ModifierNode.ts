import {IllegalArgumentException} from '../JavaExceptions';
import {Opcodes} from '../OrgObjectwebAsm';
import {Optional} from '../TsAddon';
import {AnnotationNode} from './AnnotationNode';
import {ASTNode} from './ASTNode';

export class ModifierNode extends ASTNode {
	private readonly _type: number;
	private readonly _opcode: number; // ASM opcode
	private readonly _text: string;
	private readonly _annotationNode: Optional<AnnotationNode>;
	private readonly _repeatable: boolean;

	static readonly ANNOTATION_TYPE: number = -999;
	static readonly MODIFIER_OPCODE_MAP: Map<number, number> = (() => {
		const map = new Map<number, number>();
		map.set(GroovyParser.ANNOTATION_TYPE, 0);
		map.set(GroovyParser.DEF, 0);
		map.set(GroovyParser.VAR, 0);

		map.set(GroovyParser.NATIVE, Opcodes.ACC_NATIVE);
		map.set(GroovyParser.SYNCHRONIZED, Opcodes.ACC_SYNCHRONIZED);
		map.set(GroovyParser.TRANSIENT, Opcodes.ACC_TRANSIENT);
		map.set(GroovyParser.VOLATILE, Opcodes.ACC_VOLATILE);

		map.set(GroovyParser.PUBLIC, Opcodes.ACC_PUBLIC);
		map.set(GroovyParser.PROTECTED, Opcodes.ACC_PROTECTED);
		map.set(GroovyParser.PRIVATE, Opcodes.ACC_PRIVATE);
		map.set(GroovyParser.STATIC, Opcodes.ACC_STATIC);
		map.set(GroovyParser.ABSTRACT, Opcodes.ACC_ABSTRACT);
		map.set(GroovyParser.SEALED, 0);
		map.set(GroovyParser.NON_SEALED, 0);
		map.set(GroovyParser.FINAL, Opcodes.ACC_FINAL);
		map.set(GroovyParser.STRICTFP, Opcodes.ACC_STRICT);
		map.set(GroovyParser.DEFAULT, 0); // no flag for specifying a default method in the JVM spec, hence no ACC_DEFAULT flag in ASM
		return map;
	})();

	constructor(typeOrAnnotationNode: number | AnnotationNode, text?: string) {
		super();
		let type: number;
		if (typeof typeOrAnnotationNode === 'number') {
			this._type = typeOrAnnotationNode;
			type = typeOrAnnotationNode;
		} else {
			if (typeOrAnnotationNode == null) {
				throw new IllegalArgumentException('annotationNode can not be null');
			}
			this._annotationNode = typeOrAnnotationNode;
			type = ModifierNode.ANNOTATION_TYPE;
		}

		this._opcode = ModifierNode.MODIFIER_OPCODE_MAP.get(type);
		this._repeatable = ModifierNode.ANNOTATION_TYPE == type; // Only annotations are repeatable

		if (this.opcode == null) {
			throw new IllegalArgumentException('Unsupported modifier type: ' + type);
		}
		this._text = text;
	}

	/**
	 * Check whether the modifier is not an imagined modifier(annotation, def)
	 */
	get isModifier(): boolean {
		return !this.isAnnotation && !this.isDef;
	}

	get isVisibilityModifier(): boolean {
		return GroovyParser.PUBLIC === this.type || GroovyParser.PROTECTED === this.type || GroovyParser.PRIVATE === this.type;
	}

	get isNonVisibilityModifier(): boolean {
		return this.isModifier && !this.isVisibilityModifier;
	}

	get isAnnotation(): boolean {
		return ModifierNode.ANNOTATION_TYPE === this.type;
	}

	get isDef(): boolean {
		return GroovyParser.DEF === this.type || GroovyParser.VAR === this.type;
	}

	get type(): number {
		return this._type;
	}

	get opcode(): number {
		return this._opcode;
	}

	get isRepeatable(): boolean {
		return this._repeatable;
	}

	get text(): string {
		return this._text || '';
	}

	get annotationNode(): Optional<AnnotationNode> {
		return this._annotationNode;
	}

	equals(o: any): boolean {
		if (this == o) {
			return true;
		}
		if (o == null || !(o instanceof ModifierNode)) {
			return false;
		}
		return this.type === o.type && this.text === o.text
			&& (this.annotationNode == null && o.annotationNode == null || (this.annotationNode != null && this.annotationNode.equals(o.annotationNode)));
	}

	toString(): string {
		return this.text;
	}
}
