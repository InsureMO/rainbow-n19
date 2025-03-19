import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, KeywordsContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: KeywordsContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. element value pair name,<br>
 * 2. name part,<br>
 * 3. map entry label,<br>
 * 4. named property arg label,<br>
 * 5. named arg label.<br>
 * doing:<br>
 * 1. put me as a node.
 */
export class KeywordsPostProcessor extends PostNodeProcessorAdapter<KeywordsContext> {
	private static ABSTRACT: TerminalNodePair = [(ctx) => ctx.ABSTRACT(), GroovyParser.ABSTRACT];
	private static AS: TerminalNodePair = [(ctx) => ctx.AS(), GroovyParser.AS];
	private static ASSERT: TerminalNodePair = [(ctx) => ctx.ASSERT(), GroovyParser.ASSERT];
	private static BREAK: TerminalNodePair = [(ctx) => ctx.BREAK(), GroovyParser.BREAK];
	private static CASE: TerminalNodePair = [(ctx) => ctx.CASE(), GroovyParser.CASE];
	private static CATCH: TerminalNodePair = [(ctx) => ctx.CATCH(), GroovyParser.CATCH];
	private static CLASS: TerminalNodePair = [(ctx) => ctx.CLASS(), GroovyParser.CLASS];
	private static CONST: TerminalNodePair = [(ctx) => ctx.CONST(), GroovyParser.CONST];
	private static CONTINUE: TerminalNodePair = [(ctx) => ctx.CONTINUE(), GroovyParser.CONTINUE];
	private static DEF: TerminalNodePair = [(ctx) => ctx.DEF(), GroovyParser.DEF];
	private static DEFAULT: TerminalNodePair = [(ctx) => ctx.DEFAULT(), GroovyParser.DEFAULT];
	private static DO: TerminalNodePair = [(ctx) => ctx.DO(), GroovyParser.DO];
	private static ELSE: TerminalNodePair = [(ctx) => ctx.ELSE(), GroovyParser.ELSE];
	private static ENUM: TerminalNodePair = [(ctx) => ctx.ENUM(), GroovyParser.ENUM];
	private static EXTENDS: TerminalNodePair = [(ctx) => ctx.EXTENDS(), GroovyParser.EXTENDS];
	private static FINAL: TerminalNodePair = [(ctx) => ctx.FINAL(), GroovyParser.FINAL];
	private static FINALLY: TerminalNodePair = [(ctx) => ctx.FINALLY(), GroovyParser.FINALLY];
	private static FOR: TerminalNodePair = [(ctx) => ctx.FOR(), GroovyParser.FOR];
	private static GOTO: TerminalNodePair = [(ctx) => ctx.GOTO(), GroovyParser.GOTO];
	private static IF: TerminalNodePair = [(ctx) => ctx.IF(), GroovyParser.IF];
	private static IMPLEMENTS: TerminalNodePair = [(ctx) => ctx.IMPLEMENTS(), GroovyParser.IMPLEMENTS];
	private static IMPORT: TerminalNodePair = [(ctx) => ctx.IMPORT(), GroovyParser.IMPORT];
	private static IN: TerminalNodePair = [(ctx) => ctx.IN(), GroovyParser.IN];
	private static INSTANCEOF: TerminalNodePair = [(ctx) => ctx.INSTANCEOF(), GroovyParser.INSTANCEOF];
	private static INTERFACE: TerminalNodePair = [(ctx) => ctx.INTERFACE(), GroovyParser.INTERFACE];
	private static NATIVE: TerminalNodePair = [(ctx) => ctx.NATIVE(), GroovyParser.NATIVE];
	private static NEW: TerminalNodePair = [(ctx) => ctx.NEW(), GroovyParser.NEW];
	private static NON_SEALED: TerminalNodePair = [(ctx) => ctx.NON_SEALED(), GroovyParser.NON_SEALED];
	private static PACKAGE: TerminalNodePair = [(ctx) => ctx.PACKAGE(), GroovyParser.PACKAGE];
	private static PERMITS: TerminalNodePair = [(ctx) => ctx.PERMITS(), GroovyParser.PERMITS];
	private static RECORD: TerminalNodePair = [(ctx) => ctx.RECORD(), GroovyParser.RECORD];
	private static RETURN: TerminalNodePair = [(ctx) => ctx.RETURN(), GroovyParser.RETURN];
	private static SEALED: TerminalNodePair = [(ctx) => ctx.SEALED(), GroovyParser.SEALED];
	private static STATIC: TerminalNodePair = [(ctx) => ctx.STATIC(), GroovyParser.STATIC];
	private static STRICTFP: TerminalNodePair = [(ctx) => ctx.STRICTFP(), GroovyParser.STRICTFP];
	private static SUPER: TerminalNodePair = [(ctx) => ctx.SUPER(), GroovyParser.SUPER];
	private static SWITCH: TerminalNodePair = [(ctx) => ctx.SWITCH(), GroovyParser.SWITCH];
	private static SYNCHRONIZED: TerminalNodePair = [(ctx) => ctx.SYNCHRONIZED(), GroovyParser.SYNCHRONIZED];
	private static THIS: TerminalNodePair = [(ctx) => ctx.THIS(), GroovyParser.THIS];
	private static THROW: TerminalNodePair = [(ctx) => ctx.THROW(), GroovyParser.THROW];
	private static THROWS: TerminalNodePair = [(ctx) => ctx.THROWS(), GroovyParser.THROWS];
	private static TRANSIENT: TerminalNodePair = [(ctx) => ctx.TRANSIENT(), GroovyParser.TRANSIENT];
	private static TRAIT: TerminalNodePair = [(ctx) => ctx.TRAIT(), GroovyParser.TRAIT];
	private static THREADSAFE: TerminalNodePair = [(ctx) => ctx.THREADSAFE(), GroovyParser.THREADSAFE];
	private static TRY: TerminalNodePair = [(ctx) => ctx.TRY(), GroovyParser.TRY];
	private static VAR: TerminalNodePair = [(ctx) => ctx.VAR(), GroovyParser.VAR];
	private static VOLATILE: TerminalNodePair = [(ctx) => ctx.VOLATILE(), GroovyParser.VOLATILE];
	private static WHILE: TerminalNodePair = [(ctx) => ctx.WHILE(), GroovyParser.WHILE];
	private static YIELD: TerminalNodePair = [(ctx) => ctx.YIELD(), GroovyParser.YIELD];
	private static NullLiteral: TerminalNodePair = [(ctx) => ctx.NullLiteral(), GroovyParser.NullLiteral];
	private static BooleanLiteral: TerminalNodePair = [(ctx) => ctx.BooleanLiteral(), GroovyParser.BooleanLiteral];
	private static BuiltInPrimitiveType: TerminalNodePair = [(ctx) => ctx.BuiltInPrimitiveType(), GroovyParser.BuiltInPrimitiveType];
	private static VOID: TerminalNodePair = [(ctx) => ctx.VOID(), GroovyParser.VOID];
	private static PUBLIC: TerminalNodePair = [(ctx) => ctx.PUBLIC(), GroovyParser.PUBLIC];
	private static PROTECTED: TerminalNodePair = [(ctx) => ctx.PROTECTED(), GroovyParser.PROTECTED];
	private static PRIVATE: TerminalNodePair = [(ctx) => ctx.PRIVATE(), GroovyParser.PRIVATE];

	private static TERMINALS = [
		KeywordsPostProcessor.ABSTRACT,
		KeywordsPostProcessor.AS,
		KeywordsPostProcessor.ASSERT,
		KeywordsPostProcessor.BREAK,
		KeywordsPostProcessor.CASE,
		KeywordsPostProcessor.CATCH,
		KeywordsPostProcessor.CLASS,
		KeywordsPostProcessor.CONST,
		KeywordsPostProcessor.CONTINUE,
		KeywordsPostProcessor.DEF,
		KeywordsPostProcessor.DEFAULT,
		KeywordsPostProcessor.DO,
		KeywordsPostProcessor.ELSE,
		KeywordsPostProcessor.ENUM,
		KeywordsPostProcessor.EXTENDS,
		KeywordsPostProcessor.FINAL,
		KeywordsPostProcessor.FINALLY,
		KeywordsPostProcessor.FOR,
		KeywordsPostProcessor.GOTO,
		KeywordsPostProcessor.IF,
		KeywordsPostProcessor.IMPLEMENTS,
		KeywordsPostProcessor.IMPORT,
		KeywordsPostProcessor.IN,
		KeywordsPostProcessor.INSTANCEOF,
		KeywordsPostProcessor.INTERFACE,
		KeywordsPostProcessor.NATIVE,
		KeywordsPostProcessor.NEW,
		KeywordsPostProcessor.NON_SEALED,
		KeywordsPostProcessor.PACKAGE,
		KeywordsPostProcessor.PERMITS,
		KeywordsPostProcessor.RECORD,
		KeywordsPostProcessor.RETURN,
		KeywordsPostProcessor.SEALED,
		KeywordsPostProcessor.STATIC,
		KeywordsPostProcessor.STRICTFP,
		KeywordsPostProcessor.SUPER,
		KeywordsPostProcessor.SWITCH,
		KeywordsPostProcessor.SYNCHRONIZED,
		KeywordsPostProcessor.THIS,
		KeywordsPostProcessor.THROW,
		KeywordsPostProcessor.THROWS,
		KeywordsPostProcessor.TRANSIENT,
		KeywordsPostProcessor.TRAIT,
		KeywordsPostProcessor.THREADSAFE,
		KeywordsPostProcessor.TRY,
		KeywordsPostProcessor.VAR,
		KeywordsPostProcessor.VOLATILE,
		KeywordsPostProcessor.WHILE,
		KeywordsPostProcessor.YIELD,
		KeywordsPostProcessor.NullLiteral,
		KeywordsPostProcessor.BooleanLiteral,
		KeywordsPostProcessor.BuiltInPrimitiveType,
		KeywordsPostProcessor.VOID,
		KeywordsPostProcessor.PUBLIC,
		KeywordsPostProcessor.PROTECTED,
		KeywordsPostProcessor.PRIVATE
	];

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: KeywordsPostProcessor.TERMINALS,
			firstOnly: true
		});
	}
}