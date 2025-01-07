import {PrintWriter} from '../JavaIO';
import {Janitor, SourceUnit} from '../OrgCodehausGroovyControl';
import {CSTNode} from '../OrgCodehausGroovySyntax';
import {GroovyControlSimpleMessage} from './GroovyControlSimpleMessage';

export class GroovyControlLocatedMessage extends GroovyControlSimpleMessage {
	/** The CSTNode that indicates the location to which the message applies. */
	private readonly _context: CSTNode;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	constructor(message: string, context: CSTNode, source: SourceUnit, data?: any) {
		super(message, source, data);
		this._context = context;
	}

	get context(): CSTNode {
		return this._context;
	}

	write(writer: PrintWriter, janitor: Janitor): void {
		if (this.owner instanceof SourceUnit) {
			const source = this.owner;
			const name = source.name;
			const line = this.context.startLine;
			const column = this.context.startColumn;
			const sample: string = source.getSample(line, column, janitor);

			if (sample != null) {
				writer.println(source.getSample(line, column, janitor));
			}

			writer.println(name + ': ' + line + ': ' + this.message);
			writer.println('');
		} else {
			writer.println('<No Relevant Source>: ' + this.message);
			writer.println('');
		}
	}
}
