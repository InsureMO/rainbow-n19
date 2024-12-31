import {PrintWriter} from '../JavaIO';
import {Janitor, ProcessingUnit, SourceUnit} from '../OrgCodehausGroovyControl';
import {GroovyControlMessage} from './GroovyControlMessage';

export class GroovyControlSimpleMessage extends GroovyControlMessage {
	/** used when {@link message} is an I18N identifier */
	protected _data: any;
	protected _message: string;
	protected _owner: ProcessingUnit;

	constructor(message: string, owner: ProcessingUnit, data?: any) {
		super();
		this._message = message;
		this._owner = owner;
		this._data = data;
	}

	get message(): string {
		return this._message;
	}

	get owner(): ProcessingUnit {
		return this._owner;
	}

	get data(): any {
		return this._data;
	}

	write(writer: PrintWriter, _janitor?: Janitor): void {
		if (this.owner instanceof SourceUnit) {
			writer.println(this.owner.name + ': ' + this.message);
		} else {
			writer.println(this.message);
		}
	}
}
