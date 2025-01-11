import {ParserRuleContext} from 'antlr4';
import {Optional} from '../TsAddon';

export interface ParsedAstDebuggerOptions {
	missedLogicCheckEnabled?: boolean;
	ruleProcessingLogsEnabled?: boolean;
}

export class ParsedAstDebugger {
	private readonly _missedLogicCheckEnabled: boolean;
	private readonly _missedLogics: Array<string> = [];
	private readonly _ruleProcessingLogsEnabled: boolean;
	private readonly _ruleProcessingLogs: Array<string> = [];

	constructor(options?: ParsedAstDebuggerOptions) {
		this._missedLogicCheckEnabled = options.missedLogicCheckEnabled ?? false;
		this._ruleProcessingLogsEnabled = options?.ruleProcessingLogsEnabled ?? false;
	}

	get isMissedLogicCheckEnabled(): boolean {
		return this._missedLogicCheckEnabled;
	}

	addMissedLogics(logic: string): void;
	addMissedLogics(logic: () => Optional<string>): void;
	addMissedLogics(logic: string | (() => Optional<string>)): void {
		if (this.isMissedLogicCheckEnabled) {
			const missedLogic = typeof logic === 'string' ? logic : logic();
			if (missedLogic != null) {
				this._missedLogics.push(missedLogic);
			}
		}
	}

	get missedLogics(): Array<string> {
		return this._missedLogics;
	}

	get isRuleProcessingLogsEnabled(): boolean {
		return this._ruleProcessingLogsEnabled;
	}

	enterRule(ctx: ParserRuleContext) {
		if (this.isRuleProcessingLogsEnabled) {
			this._ruleProcessingLogs.push(`Enter rule ${ctx.constructor.name}`);
		}
	}

	ignoreRule(ctx: ParserRuleContext) {
		if (this.isRuleProcessingLogsEnabled) {
			this._ruleProcessingLogs.push(`Ignore rule ${ctx.constructor.name}`);
		}
	}

	ignoreUnsupportedRule(ctx: ParserRuleContext) {
		if (this.isRuleProcessingLogsEnabled) {
			this._ruleProcessingLogs.push(`Ignore unsupported rule ${ctx.constructor.name}`);
		}
	}

	exitRule(ctx: ParserRuleContext) {
		if (this.isRuleProcessingLogsEnabled) {
			this._ruleProcessingLogs.push(`Exit rule ${ctx.constructor.name}`);
		}
	}

	get ruleProcessingLogs(): Array<string> {
		return this._ruleProcessingLogs;
	}
}