import {AnnotatedNode} from './AnnotatedNode';
import {AnnotationNode} from './AnnotationNode';
import {ClassNode} from './ClassNode';

export class RecordComponentNode extends AnnotatedNode {
	private readonly _name: string;
	private readonly _type: ClassNode;

	constructor(declaringClass: ClassNode, name: string, type: ClassNode, annotations?: Array<AnnotationNode>) {
		super();
		this._name = name;
		this._type = type;
		this.setDeclaringClass(declaringClass);
		(annotations ?? []).forEach(annotation => this.addAnnotation(annotation));
	}

	get name(): string {
		return this._name;
	}

	get type(): ClassNode {
		return this._type;
	}

	equals(o: any): boolean {
		if (this == o) {
			return true;
		}
		if (o == null || !(o instanceof RecordComponentNode)) {
			return false;
		}
		return this.name === o.name && this.declaringClass.equals(o.declaringClass);
	}
}
