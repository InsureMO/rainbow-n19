import {TerminalNode} from 'antlr4';
import {MethodDeclarationContext, QualifiedClassNameListContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromMethodDeclaration = (ctx: MethodDeclarationContext) => Optional<TerminalNode>;
type TerminalNodePairForMethodDeclaration = [TerminalNodeGetFromMethodDeclaration, SymbolIndex];

/**
 * could be child of method declaration.<br>
 * <br>
 * nothing needs to proceed on this level.
 */
export class QualifiedClassNameListPostProcessor extends PostNodeProcessorAdapter<QualifiedClassNameListContext> {
}