import {GroovyBugError} from '../OrgCodehausGroovy';
import {AnnotationConstantExpression, Expression, ListExpression} from '../OrgCodehausGroovyAstExpr';
import {Optional} from '../TsAddon';
import {ASTNode} from './ASTNode';
import {ClassNode} from './ClassNode';

export class AnnotationNode extends ASTNode {
	static readonly CONSTRUCTOR_TARGET: number = 1 << 1;
	static readonly METHOD_TARGET: number = 1 << 2;
	static readonly FIELD_TARGET: number = 1 << 3;
	static readonly PARAMETER_TARGET: number = 1 << 4;
	static readonly LOCAL_VARIABLE_TARGET: number = 1 << 5;
	static readonly ANNOTATION_TARGET: number = 1 << 6;
	static readonly PACKAGE_TARGET: number = 1 << 7;
	static readonly TYPE_PARAMETER_TARGET: number = 1 << 8;
	static readonly TYPE_USE_TARGET: number = 1 << 9;
	static readonly RECORD_COMPONENT_TARGET: number = 1 << 10;
	static readonly TYPE_TARGET: number = 1 + AnnotationNode.ANNOTATION_TARGET;    //GROOVY-7151
	private static readonly ALL_TARGETS: number =
		AnnotationNode.TYPE_TARGET
		| AnnotationNode.CONSTRUCTOR_TARGET | AnnotationNode.METHOD_TARGET | AnnotationNode.FIELD_TARGET | AnnotationNode.PARAMETER_TARGET
		| AnnotationNode.LOCAL_VARIABLE_TARGET | AnnotationNode.ANNOTATION_TARGET
		| AnnotationNode.PACKAGE_TARGET | AnnotationNode.TYPE_PARAMETER_TARGET | AnnotationNode.TYPE_USE_TARGET | AnnotationNode.RECORD_COMPONENT_TARGET;

	private readonly _classNode: ClassNode;
	private readonly _members: Map<string, Expression> = new Map();
	private _runtimeRetention: boolean = false;
	private _sourceRetention: boolean = false;
	private /* explicit */ _classRetention: boolean = false;
	private _allowedTargets: number = AnnotationNode.ALL_TARGETS;

	constructor(classNode: ClassNode) {
		super();
		this._classNode = classNode;
	}

	get classNode(): ClassNode {
		return this._classNode;
	}

	get members(): Map<string, Expression> {
		return this._members ?? new Map();
	}

	getMember(name: string): Optional<Expression> {
		return this._members?.get(name);
	}

	addMember(name: string, value: Expression): void {
		const oldValue = this._members.get(name);
		if (oldValue == null) {
			this._members.set(name, value);
		} else {
			throw new GroovyBugError(`Annotation member ${name} has already been added`);
		}
	}

	setMember(name: string, value: Expression): void {
		this._members.set(name, value);
	}

	get isBuiltIn(): boolean {
		return false;
	}

	/**
	 * Flag corresponding to <code>RetentionPolicy.RUNTIME</code>.
	 * @return <tt>true</tt> if the annotation should be visible at runtime,
	 *         <tt>false</tt> otherwise
	 */
	hasRuntimeRetention(): boolean {
		return this._runtimeRetention;
	}

	/**
	 * Sets the internal flag if the current annotation has
	 * <code>RetentionPolicy.SOURCE</code>.
	 *
	 * @param flag if <tt>true</tt> then current annotation is marked as having
	 *     <code>RetentionPolicy.RUNTIME</code>.
	 */
	setRuntimeRetention(flag: boolean): void {
		this._runtimeRetention = flag;
	}

	/**
	 * Flag corresponding to <code>RetentionPolicy.SOURCE</code>.
	 * @return <tt>true</tt> if the annotation is only allowed in sources
	 *         <tt>false</tt> otherwise
	 */
	hasSourceRetention(): boolean {
		return this._sourceRetention;
	}

	/**
	 * Sets the internal flag if the current annotation has <code>RetentionPolicy.SOURCE</code>.
	 *
	 * @param flag if <tt>true</tt> then current annotation is marked as having
	 *     <code>RetentionPolicy.SOURCE</code>.
	 */
	setSourceRetention(flag: boolean): void {
		this._sourceRetention = flag;
	}

	/**
	 * Flag corresponding to <code>RetentionPolicy.CLASS</code>.
	 * This is the default when no <code>RetentionPolicy</code> annotations are present.
	 *
	 * @return <tt>true</tt> if the annotation is written in the bytecode, but not visible at runtime
	 *         <tt>false</tt> otherwise
	 */
	hasClassRetention(): boolean {
		if (!this._runtimeRetention && !this._sourceRetention) {
			return true;
		}
		return this._classRetention;
	}

	/**
	 * Sets the internal flag if the current annotation has an explicit <code>RetentionPolicy.CLASS</code>.
	 *
	 * @param flag if <tt>true</tt> then current annotation is marked as having
	 *     <code>RetentionPolicy.CLASS</code>.
	 */
	setClassRetention(flag: boolean): void {
		this._classRetention = flag;
	}

	setAllowedTargets(bitmap: number): void {
		this._allowedTargets = bitmap;
	}

	isTargetAllowed(target: number): boolean {
		return (this._allowedTargets & target) == target;
	}

	static targetToName(target: number): string {
		switch (target) {
			case AnnotationNode.TYPE_TARGET:
				return 'TYPE';
			case AnnotationNode.CONSTRUCTOR_TARGET:
				return 'CONSTRUCTOR';
			case AnnotationNode.METHOD_TARGET:
				return 'METHOD';
			case AnnotationNode.FIELD_TARGET:
				return 'FIELD';
			case AnnotationNode.PARAMETER_TARGET:
				return 'PARAMETER';
			case AnnotationNode.LOCAL_VARIABLE_TARGET:
				return 'LOCAL_VARIABLE';
			case AnnotationNode.ANNOTATION_TARGET:
				return 'ANNOTATION';
			case AnnotationNode.PACKAGE_TARGET:
				return 'PACKAGE';
			case AnnotationNode.TYPE_PARAMETER_TARGET:
				return 'TYPE_PARAMETER';
			case AnnotationNode.TYPE_USE_TARGET:
				return 'TYPE_USE';
			case AnnotationNode.RECORD_COMPONENT_TARGET:
				return 'RECORD_COMPONENT';
			default:
				return 'unknown target';
		}
	}

	toString(): string {
		return super.toString() + '[' + this.text + ']';
	}

	get text(): string {
		let memberText = '';
		if (this.members != null) {
			let first = true;
			for (const [key, value] of this.members.entries()) {
				if (first) {
					first = false;
				} else {
					memberText = memberText + ', ';
				}
				let text: string;
				if (value instanceof ListExpression) {
					const result = value.expressions.map(exp => {
						return exp instanceof AnnotationConstantExpression
							? (exp.value as ASTNode).text
							: exp.text;
					});
					text = '[' + result.join(', ') + ']';
				} else {
					text = value.text;
				}
				memberText = memberText + key + ': ' + text;
			}
		}
		return '@' + this._classNode.text + '(' + memberText + ')';
	}
}
