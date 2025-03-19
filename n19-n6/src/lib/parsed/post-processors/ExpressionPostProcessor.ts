import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {
	AdditiveExprAltContext,
	AndExprAltContext,
	AssertStatementContext,
	AssignmentExprAltContext,
	ClassicalForControlContext,
	ConditionalExprAltContext,
	EqualityExprAltContext,
	ExclusiveOrExprAltContext,
	ExpressionContext,
	GroovyParser,
	InclusiveOrExprAltContext,
	LogicalAndExprAltContext,
	LogicalOrExprAltContext,
	MultiplicativeExprAltContext,
	PowerExprAltContext,
	RegexExprAltContext,
	RelationalExprAltContext,
	ShiftExprAltContext,
	UnaryAddExprAltContext,
	UnaryNotExprAltContext
} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromUnaryNotExpression = (ctx: UnaryNotExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForUnaryNotExpression = [TerminalNodeGetFromUnaryNotExpression, SymbolIndex];
type TerminalNodeGetFromUnaryAddExpression = (ctx: UnaryAddExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForUnaryAddExpression = [TerminalNodeGetFromUnaryAddExpression, SymbolIndex];
type TerminalNodeGetFromAssertStatement = (ctx: AssertStatementContext) => Optional<TerminalNode>;
type TerminalNodePairForAssertStatement = [TerminalNodeGetFromAssertStatement, SymbolIndex];
type TerminalNodeGetFromClassicalForControl = (ctx: ClassicalForControlContext) => Optional<TerminalNode>;
type TerminalNodePairForClassicalForControl = [TerminalNodeGetFromClassicalForControl, SymbolIndex];
type TerminalNodeGetFromPowerExpression = (ctx: PowerExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForPowerExpression = [TerminalNodeGetFromPowerExpression, SymbolIndex];
type TerminalNodeGetFromMultiplicativeExpression = (ctx: MultiplicativeExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForMultiplicativeExpression = [TerminalNodeGetFromMultiplicativeExpression, SymbolIndex];
type TerminalNodeGetFromAdditiveExpression = (ctx: AdditiveExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForAdditiveExpression = [TerminalNodeGetFromAdditiveExpression, SymbolIndex];
type TerminalNodeGetFromShiftExpression = (ctx: ShiftExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForShiftExpression = [TerminalNodeGetFromShiftExpression, SymbolIndex];
type TerminalNodeGetFromRelationalExpression = (ctx: RelationalExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForRelationalExpression = [TerminalNodeGetFromRelationalExpression, SymbolIndex];
type TerminalNodeGetFromEqualityExpression = (ctx: EqualityExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForEqualityExpression = [TerminalNodeGetFromEqualityExpression, SymbolIndex];
type TerminalNodeGetFromRegexExpression = (ctx: RegexExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForRegexExpression = [TerminalNodeGetFromRegexExpression, SymbolIndex];
type TerminalNodeGetFromAndExpression = (ctx: AndExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForAndExpression = [TerminalNodeGetFromAndExpression, SymbolIndex];
type TerminalNodeGetFromExclusiveOrExpression = (ctx: ExclusiveOrExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForExclusiveOrExpression = [TerminalNodeGetFromExclusiveOrExpression, SymbolIndex];
type TerminalNodeGetFromInclusiveOrExpression = (ctx: InclusiveOrExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForInclusiveOrExpression = [TerminalNodeGetFromInclusiveOrExpression, SymbolIndex];
type TerminalNodeGetFromLogicalAndExpression = (ctx: LogicalAndExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForLogicalAndExpression = [TerminalNodeGetFromLogicalAndExpression, SymbolIndex];
type TerminalNodeGetFromLogicalOrExpression = (ctx: LogicalOrExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForLogicalOrExpression = [TerminalNodeGetFromLogicalOrExpression, SymbolIndex];
type TerminalNodeGetFromConditionalExpression = (ctx: ConditionalExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForConditionalExpression = [TerminalNodeGetFromConditionalExpression, SymbolIndex];
type TerminalNodeGetFromAssignmentExpression = (ctx: AssignmentExprAltContext) => Optional<TerminalNode>;
type TerminalNodePairForAssignmentExpression = [TerminalNodeGetFromAssignmentExpression, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. formal parameter,<br>
 * 2. element value,<br>
 * 3. yield statement,<br>
 * 4. assert statement,<br>
 * 5. statement,<br>
 * 6. resource,<br>
 * 7. switch label,<br>
 * 8. enhance for control,<br>
 * 9. classical for control,<br>
 * 10. expression list element,<br>
 * 11. expression,<br>
 * 12. command expression,<br>
 * 13. map entry,<br>
 * 14. named property arg,<br>
 * 15. named arg,<br>
 * 16. dim.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "~" node as my first child, when I am unary not expr alt,<br>
 * 3. find and put a "!" node as my first child, when I am unary not expr alt and "~" not exists,<br>
 * 4. find and put a "++" node as my first child, when I am unary add expr alt,<br>
 * 5. find and put a "--" node as my first child, when I am unary add expr alt,<br>
 * 6. find and put a "+" node as my first child, when I am unary add expr alt,<br>
 * 7. find and put a "-" node as my first child, when I am unary add expr alt,<br>
 * 8. find and put a ":" node after me, when parent is assert statement, and I am ce,<br>
 * 9. find and put a "," node after me, when parent is assert statement, and I am ce, and ":" not exists,<br>
 * 10. find and put next ":" node after me, when parent is classical for control,<br>
 * 11. find and put next "**" node after me, when parent is power expr alt, and I am left,<br>
 * 12. find and put next "*" node after me, when parent is multiplicative expr alt, and I am left,<br>
 * 13. find and put next "/" node after me, when parent is multiplicative expr alt, and I am left,<br>
 * 14. find and put next "%" node after me, when parent is multiplicative expr alt, and I am left,<br>
 * 15. find and put next "+" node after me, when parent is additive expr alt, and I am left,<br>
 * 16. find and put next "-" node after me, when parent is additive expr alt, and I am left,<br>
 * 17. find and put next 2 "<" node after me, when parent is shift expr alt, and I am left,<br>
 * 18. find and put next 2 or 3 ">" node after me, when parent is shift expr alt, and I am left,<br>
 * 19. find and put next ".." node after me, when parent is shift expr alt, and I am left,<br>
 * 20. find and put next "<.." node after me, when parent is shift expr alt, and I am left,<br>
 * 21. find and put next "..<" node after me, when parent is shift expr alt, and I am left,<br>
 * 22. find and put next "<..<" node after me, when parent is shift expr alt, and I am left,<br>
 * 23. find and put next "AS" node after me, when parent is relational expr alt, and I am left,<br>
 * 24. find and put next "INSTANCEOF" node after me, when parent is relational expr alt, and I am left,<br>
 * 25. find and put next "NOT_INSTANCEOF" node after me, when parent is relational expr alt, and I am left,<br>
 * 26. find and put next "<=" node after me, when parent is relational expr alt, and I am left,<br>
 * 27. find and put next ">=" node after me, when parent is relational expr alt, and I am left,<br>
 * 28. find and put next "<" node after me, when parent is relational expr alt, and I am left,<br>
 * 29. find and put next ">" node after me, when parent is relational expr alt, and I am left,<br>
 * 30. find and put next "IN" node after me, when parent is relational expr alt, and I am left,<br>
 * 31. find and put next "NOT_IN" node after me, when parent is relational expr alt, and I am left,<br>
 * 32. find and put next "===" node after me, when parent is equality expr alt, and I am left,<br>
 * 33. find and put next "!==" node after me, when parent is equality expr alt, and I am left,<br>
 * 34. find and put next "==" node after me, when parent is equality expr alt, and I am left,<br>
 * 35. find and put next "!=" node after me, when parent is equality expr alt, and I am left,<br>
 * 36. find and put next "<=>" node after me, when parent is equality expr alt, and I am left,<br>
 * 37. find and put next "=~" node after me, when parent is regex expr alt, and I am left,<br>
 * 38. find and put next "==~" node after me, when parent is regex expr alt, and I am left,<br>
 * 39. find and put next "&" node after me, when parent is and expr alt, and I am left,<br>
 * 40. find and put next "^" node after me, when parent is exclusive or expr alt, and I am left,<br>
 * 41. find and put next "|" node after me, when parent is inclusive or expr alt, and I am left,<br>
 * 42. find and put next "&&" node after me, when parent is logical and expr alt, and I am left,<br>
 * 43. find and put next "||" node after me, when parent is logical or expr alt, and I am left,<br>
 * 44. find and put next "?" node after me, when parent is conditional expr alt, and I am con,<br>
 * 45. find and put next "?:" node after me, when parent is conditional expr alt, and I am con,<br>
 * 46. find and put next ":" node after me, when parent is conditional expr alt, and I am tb,<br>
 * 47. find and put next "=" node after me, when parent is assignment expr alt, and I am left,<br>
 * 48. find and put next "+=" node after me, when parent is assignment expr alt, and I am left,<br>
 * 49. find and put next "-=" node after me, when parent is assignment expr alt, and I am left,<br>
 * 50. find and put next "*=" node after me, when parent is assignment expr alt, and I am left,<br>
 * 51. find and put next "/=" node after me, when parent is assignment expr alt, and I am left,<br>
 * 52. find and put next "&=" node after me, when parent is assignment expr alt, and I am left,<br>
 * 53. find and put next "|=" node after me, when parent is assignment expr alt, and I am left,<br>
 * 54. find and put next "^=" node after me, when parent is assignment expr alt, and I am left,<br>
 * 55. find and put next ">>=" node after me, when parent is assignment expr alt, and I am left,<br>
 * 56. find and put next ">>>=" node after me, when parent is assignment expr alt, and I am left,<br>
 * 57. find and put next "<<=" node after me, when parent is assignment expr alt, and I am left,<br>
 * 58. find and put next "%=" node after me, when parent is assignment expr alt, and I am left,<br>
 * 59. find and put next "**=" node after me, when parent is assignment expr alt, and I am left,<br>
 * 60. find and put next "?=" node after me, when parent is assignment expr alt, and I am left.
 */
export class ExpressionPostProcessor extends PostNodeProcessorAdapter<ExpressionContext> {
	private static UNARY_NOT_EXPRESSION__BITNOT: TerminalNodePairForUnaryNotExpression = [(ctx) => ctx.BITNOT(), GroovyParser.BITNOT];
	private static UNARY_NOT_EXPRESSION__NOT: TerminalNodePairForUnaryNotExpression = [(ctx) => ctx.NOT(), GroovyParser.NOT];
	private static UNARY_NOT_EXPRESSION__TERMINALS = [
		ExpressionPostProcessor.UNARY_NOT_EXPRESSION__BITNOT,
		ExpressionPostProcessor.UNARY_NOT_EXPRESSION__NOT
	];
	private static UNARY_ADD_EXPRESSION__INC: TerminalNodePairForUnaryAddExpression = [(ctx) => ctx.INC(), GroovyParser.INC];
	private static UNARY_ADD_EXPRESSION__DEC: TerminalNodePairForUnaryAddExpression = [(ctx) => ctx.DEC(), GroovyParser.DEC];
	private static UNARY_ADD_EXPRESSION__ADD: TerminalNodePairForUnaryAddExpression = [(ctx) => ctx.ADD(), GroovyParser.ADD];
	private static UNARY_ADD_EXPRESSION__SUB: TerminalNodePairForUnaryAddExpression = [(ctx) => ctx.SUB(), GroovyParser.SUB];
	private static UNARY_ADD_EXPRESSION__TERMINALS = [
		ExpressionPostProcessor.UNARY_ADD_EXPRESSION__INC,
		ExpressionPostProcessor.UNARY_ADD_EXPRESSION__DEC,
		ExpressionPostProcessor.UNARY_ADD_EXPRESSION__ADD,
		ExpressionPostProcessor.UNARY_ADD_EXPRESSION__SUB
	];
	private static ASSERT_STATEMENT__COLON: TerminalNodePairForAssertStatement = [(ctx) => ctx.COLON(), GroovyParser.COLON];
	private static ASSERT_STATEMENT__COMMA: TerminalNodePairForAssertStatement = [(ctx) => ctx.COMMA(), GroovyParser.COMMA];
	private static ASSERT_STATEMENT__TERMINALS = [
		ExpressionPostProcessor.ASSERT_STATEMENT__COLON,
		ExpressionPostProcessor.ASSERT_STATEMENT__COMMA
	];
	private static CLASSICAL_FOR_CONTROL__SEMI: TerminalNodePairForClassicalForControl = [(ctx) => ctx.SEMI(1), GroovyParser.SEMI];
	private static POWER_EXPRESSION__POWER: TerminalNodePairForPowerExpression = [(ctx) => ctx.POWER(), GroovyParser.POWER];
	private static MULTIPLICATIVE_EXPRESSION__MUL: TerminalNodePairForMultiplicativeExpression = [(ctx) => ctx.MUL(), GroovyParser.MUL];
	private static MULTIPLICATIVE_EXPRESSION__DIV: TerminalNodePairForMultiplicativeExpression = [(ctx) => ctx.DIV(), GroovyParser.DIV];
	private static MULTIPLICATIVE_EXPRESSION__MOD: TerminalNodePairForMultiplicativeExpression = [(ctx) => ctx.MOD(), GroovyParser.MOD];
	private static MULTIPLICATIVE_EXPRESSION__TERMINALS = [
		ExpressionPostProcessor.MULTIPLICATIVE_EXPRESSION__MUL,
		ExpressionPostProcessor.MULTIPLICATIVE_EXPRESSION__DIV,
		ExpressionPostProcessor.MULTIPLICATIVE_EXPRESSION__MOD
	];
	private static ADDITIVE_EXPRESSION__ADD: TerminalNodePairForAdditiveExpression = [(ctx) => ctx.ADD(), GroovyParser.ADD];
	private static ADDITIVE_EXPRESSION__SUB: TerminalNodePairForAdditiveExpression = [(ctx) => ctx.SUB(), GroovyParser.SUB];
	private static ADDITIVE_EXPRESSION__TERMINALS = [
		ExpressionPostProcessor.ADDITIVE_EXPRESSION__ADD,
		ExpressionPostProcessor.ADDITIVE_EXPRESSION__SUB
	];
	private static SHIFT_EXPRESSION__RANGE_INCLUSIVE: TerminalNodePairForShiftExpression = [(ctx) => ctx.RANGE_INCLUSIVE(), GroovyParser.RANGE_INCLUSIVE];
	private static SHIFT_EXPRESSION__RANGE_EXCLUSIVE_LEFT: TerminalNodePairForShiftExpression = [(ctx) => ctx.RANGE_EXCLUSIVE_LEFT(), GroovyParser.RANGE_EXCLUSIVE_LEFT];
	private static SHIFT_EXPRESSION__RANGE_EXCLUSIVE_RIGHT: TerminalNodePairForShiftExpression = [(ctx) => ctx.RANGE_EXCLUSIVE_RIGHT(), GroovyParser.RANGE_EXCLUSIVE_RIGHT];
	private static SHIFT_EXPRESSION__RANGE_EXCLUSIVE_FULL: TerminalNodePairForShiftExpression = [(ctx) => ctx.RANGE_EXCLUSIVE_FULL(), GroovyParser.RANGE_EXCLUSIVE_FULL];
	private static SHIFT_EXPRESSION__RANGE_TERMINALS = [
		ExpressionPostProcessor.SHIFT_EXPRESSION__RANGE_INCLUSIVE,
		ExpressionPostProcessor.SHIFT_EXPRESSION__RANGE_EXCLUSIVE_LEFT,
		ExpressionPostProcessor.SHIFT_EXPRESSION__RANGE_EXCLUSIVE_RIGHT,
		ExpressionPostProcessor.SHIFT_EXPRESSION__RANGE_EXCLUSIVE_FULL
	];
	private static RELATIONAL_EXPRESSION__AS: TerminalNodePairForRelationalExpression = [(ctx) => ctx.AS(), GroovyParser.AS];
	private static RELATIONAL_EXPRESSION__INSTANCEOF: TerminalNodePairForRelationalExpression = [(ctx) => ctx.INSTANCEOF(), GroovyParser.INSTANCEOF];
	private static RELATIONAL_EXPRESSION__NOT_INSTANCEOF: TerminalNodePairForRelationalExpression = [(ctx) => ctx.NOT_INSTANCEOF(), GroovyParser.NOT_INSTANCEOF];
	private static RELATIONAL_EXPRESSION__LE: TerminalNodePairForRelationalExpression = [(ctx) => ctx.LE(), GroovyParser.LE];
	private static RELATIONAL_EXPRESSION__GE: TerminalNodePairForRelationalExpression = [(ctx) => ctx.GE(), GroovyParser.GE];
	private static RELATIONAL_EXPRESSION__LT: TerminalNodePairForRelationalExpression = [(ctx) => ctx.LT(), GroovyParser.LT];
	private static RELATIONAL_EXPRESSION__GT: TerminalNodePairForRelationalExpression = [(ctx) => ctx.GT(), GroovyParser.GT];
	private static RELATIONAL_EXPRESSION__IN: TerminalNodePairForRelationalExpression = [(ctx) => ctx.IN(), GroovyParser.IN];
	private static RELATIONAL_EXPRESSION__NOT_IN: TerminalNodePairForRelationalExpression = [(ctx) => ctx.NOT_IN(), GroovyParser.NOT_IN];
	private static RELATIONAL_EXPRESSION__TERMINALS = [
		ExpressionPostProcessor.RELATIONAL_EXPRESSION__AS,
		ExpressionPostProcessor.RELATIONAL_EXPRESSION__INSTANCEOF,
		ExpressionPostProcessor.RELATIONAL_EXPRESSION__NOT_INSTANCEOF,
		ExpressionPostProcessor.RELATIONAL_EXPRESSION__LE,
		ExpressionPostProcessor.RELATIONAL_EXPRESSION__GE,
		ExpressionPostProcessor.RELATIONAL_EXPRESSION__LT,
		ExpressionPostProcessor.RELATIONAL_EXPRESSION__GT,
		ExpressionPostProcessor.RELATIONAL_EXPRESSION__IN,
		ExpressionPostProcessor.RELATIONAL_EXPRESSION__NOT_IN
	];
	private static EQUALITY_EXPRESSION__IDENTICAL: TerminalNodePairForEqualityExpression = [(ctx) => ctx.IDENTICAL(), GroovyParser.IDENTICAL];
	private static EQUALITY_EXPRESSION__NOT_IDENTICAL: TerminalNodePairForEqualityExpression = [(ctx) => ctx.NOT_IDENTICAL(), GroovyParser.NOT_IDENTICAL];
	private static EQUALITY_EXPRESSION__EQUAL: TerminalNodePairForEqualityExpression = [(ctx) => ctx.EQUAL(), GroovyParser.EQUAL];
	private static EQUALITY_EXPRESSION__NOTEQUAL: TerminalNodePairForEqualityExpression = [(ctx) => ctx.NOTEQUAL(), GroovyParser.NOTEQUAL];
	private static EQUALITY_EXPRESSION__SPACESHIP: TerminalNodePairForEqualityExpression = [(ctx) => ctx.SPACESHIP(), GroovyParser.SPACESHIP];
	private static EQUALITY_EXPRESSION__TERMINALS = [
		ExpressionPostProcessor.EQUALITY_EXPRESSION__IDENTICAL,
		ExpressionPostProcessor.EQUALITY_EXPRESSION__NOT_IDENTICAL,
		ExpressionPostProcessor.EQUALITY_EXPRESSION__EQUAL,
		ExpressionPostProcessor.EQUALITY_EXPRESSION__NOTEQUAL,
		ExpressionPostProcessor.EQUALITY_EXPRESSION__SPACESHIP
	];
	private static REGEX_EXPRESSION__REGEX_FIND: TerminalNodePairForRegexExpression = [(ctx) => ctx.REGEX_FIND(), GroovyParser.REGEX_FIND];
	private static REGEX_EXPRESSION__REGEX_MATCH: TerminalNodePairForRegexExpression = [(ctx) => ctx.REGEX_MATCH(), GroovyParser.REGEX_MATCH];
	private static REGEX_EXPRESSION__TERMINALS = [
		ExpressionPostProcessor.REGEX_EXPRESSION__REGEX_FIND,
		ExpressionPostProcessor.REGEX_EXPRESSION__REGEX_MATCH
	];
	private static AND_EXPRESSION__BITAND: TerminalNodePairForAndExpression = [(ctx) => ctx.BITAND(), GroovyParser.BITAND];
	private static EXCLUSIVE_OR_EXPRESSION__XOR: TerminalNodePairForExclusiveOrExpression = [(ctx) => ctx.XOR(), GroovyParser.XOR];
	private static INCLUSIVE_OR_EXPRESSION__BITOR: TerminalNodePairForInclusiveOrExpression = [(ctx) => ctx.BITOR(), GroovyParser.BITOR];
	private static LOGICAL_AND_EXPRESSION__AND: TerminalNodePairForLogicalAndExpression = [(ctx) => ctx.AND(), GroovyParser.AND];
	private static LOGICAL_OR_EXPRESSION__OR: TerminalNodePairForLogicalOrExpression = [(ctx) => ctx.OR(), GroovyParser.OR];
	private static CONDITIONAL_EXPRESSION__QUESTION: TerminalNodePairForConditionalExpression = [(ctx) => ctx.QUESTION(), GroovyParser.QUESTION];
	private static CONDITIONAL_EXPRESSION__ELVIS: TerminalNodePairForConditionalExpression = [(ctx) => ctx.ELVIS(), GroovyParser.ELVIS];
	private static CONDITIONAL_EXPRESSION__TERMINALS = [
		ExpressionPostProcessor.CONDITIONAL_EXPRESSION__QUESTION,
		ExpressionPostProcessor.CONDITIONAL_EXPRESSION__ELVIS
	];
	private static CONDITIONAL_EXPRESSION__COLON: TerminalNodePairForConditionalExpression = [(ctx) => ctx.COLON(), GroovyParser.COLON];
	private static ASSIGNMENT_EXPRESSION__ASSIGN: TerminalNodePairForAssignmentExpression = [(ctx) => ctx.ASSIGN(), GroovyParser.ASSIGN];
	private static ASSIGNMENT_EXPRESSION__ADD_ASSIGN: TerminalNodePairForAssignmentExpression = [(ctx) => ctx.ADD_ASSIGN(), GroovyParser.ADD_ASSIGN];
	private static ASSIGNMENT_EXPRESSION__SUB_ASSIGN: TerminalNodePairForAssignmentExpression = [(ctx) => ctx.SUB_ASSIGN(), GroovyParser.SUB_ASSIGN];
	private static ASSIGNMENT_EXPRESSION__MUL_ASSIGN: TerminalNodePairForAssignmentExpression = [(ctx) => ctx.MUL_ASSIGN(), GroovyParser.MUL_ASSIGN];
	private static ASSIGNMENT_EXPRESSION__DIV_ASSIGN: TerminalNodePairForAssignmentExpression = [(ctx) => ctx.DIV_ASSIGN(), GroovyParser.DIV_ASSIGN];
	private static ASSIGNMENT_EXPRESSION__AND_ASSIGN: TerminalNodePairForAssignmentExpression = [(ctx) => ctx.AND_ASSIGN(), GroovyParser.AND_ASSIGN];
	private static ASSIGNMENT_EXPRESSION__OR_ASSIGN: TerminalNodePairForAssignmentExpression = [(ctx) => ctx.OR_ASSIGN(), GroovyParser.OR_ASSIGN];
	private static ASSIGNMENT_EXPRESSION__XOR_ASSIGN: TerminalNodePairForAssignmentExpression = [(ctx) => ctx.XOR_ASSIGN(), GroovyParser.XOR_ASSIGN];
	private static ASSIGNMENT_EXPRESSION__RSHIFT_ASSIGN: TerminalNodePairForAssignmentExpression = [(ctx) => ctx.RSHIFT_ASSIGN(), GroovyParser.RSHIFT_ASSIGN];
	private static ASSIGNMENT_EXPRESSION__URSHIFT_ASSIGN: TerminalNodePairForAssignmentExpression = [(ctx) => ctx.URSHIFT_ASSIGN(), GroovyParser.URSHIFT_ASSIGN];
	private static ASSIGNMENT_EXPRESSION__LSHIFT_ASSIGN: TerminalNodePairForAssignmentExpression = [(ctx) => ctx.LSHIFT_ASSIGN(), GroovyParser.LSHIFT_ASSIGN];
	private static ASSIGNMENT_EXPRESSION__MOD_ASSIGN: TerminalNodePairForAssignmentExpression = [(ctx) => ctx.MOD_ASSIGN(), GroovyParser.MOD_ASSIGN];
	private static ASSIGNMENT_EXPRESSION__POWER_ASSIGN: TerminalNodePairForAssignmentExpression = [(ctx) => ctx.POWER_ASSIGN(), GroovyParser.POWER_ASSIGN];
	private static ASSIGNMENT_EXPRESSION__ELVIS_ASSIGN: TerminalNodePairForAssignmentExpression = [(ctx) => ctx.ELVIS_ASSIGN(), GroovyParser.ELVIS_ASSIGN];
	private static ASSIGNMENT_EXPRESSION__TERMINALS = [
		ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__ASSIGN,
		ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__ADD_ASSIGN,
		ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__SUB_ASSIGN,
		ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__MUL_ASSIGN,
		ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__DIV_ASSIGN,
		ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__AND_ASSIGN,
		ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__OR_ASSIGN,
		ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__XOR_ASSIGN,
		ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__RSHIFT_ASSIGN,
		ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__URSHIFT_ASSIGN,
		ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__LSHIFT_ASSIGN,
		ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__MOD_ASSIGN,
		ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__POWER_ASSIGN,
		ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__ELVIS_ASSIGN
	];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_expression, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ExpressionContext;
		if (ctx instanceof UnaryNotExprAltContext) {
			return this.collectTerminalNodes({
				decorated,
				terminals: ExpressionPostProcessor.UNARY_NOT_EXPRESSION__TERMINALS,
				firstOnly: true
			});
		} else if (ctx instanceof UnaryAddExprAltContext) {
			return this.collectTerminalNodes({
				decorated,
				terminals: ExpressionPostProcessor.UNARY_ADD_EXPRESSION__TERMINALS,
				firstOnly: true
			});
		}
		return [];
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ExpressionContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof AssertStatementContext) {
			if (parentCtx._ce === ctx) {
				return this.collectTerminalNodes({
					decorated: node.parent.decorated,
					terminals: ExpressionPostProcessor.ASSERT_STATEMENT__TERMINALS,
					firstOnly: true
				});
			}
		} else if (parentCtx instanceof ClassicalForControlContext) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: ExpressionPostProcessor.CLASSICAL_FOR_CONTROL__SEMI
			});
		} else if (parentCtx instanceof PowerExprAltContext && parentCtx._left === ctx) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: ExpressionPostProcessor.POWER_EXPRESSION__POWER
			});
		} else if (parentCtx instanceof MultiplicativeExprAltContext && parentCtx._left === ctx) {
			return this.collectTerminalNodes({
				decorated: node.parent.decorated,
				terminals: ExpressionPostProcessor.MULTIPLICATIVE_EXPRESSION__TERMINALS,
				firstOnly: true
			});
		} else if (parentCtx instanceof AdditiveExprAltContext && parentCtx._left === ctx) {
			return this.collectTerminalNodes({
				decorated: node.parent.decorated,
				terminals: ExpressionPostProcessor.ADDITIVE_EXPRESSION__TERMINALS,
				firstOnly: true
			});
		} else if (parentCtx instanceof ShiftExprAltContext && parentCtx._left === ctx) {
			const parsed = node.parent.decorated.parsed;
			const ltNodes = (parentCtx.LT_list() ?? []).map(terminalNode => {
				return DecoratedNode.createSymbol(parsed, GroovyParser.LT, terminalNode);
			});
			if (ltNodes.length !== 0) {
				return ltNodes;
			}
			const gtNodes = (parentCtx.GT_list() ?? []).map(terminalNode => {
				return DecoratedNode.createSymbol(parsed, GroovyParser.GT, terminalNode);
			});
			if (gtNodes.length !== 0) {
				return gtNodes;
			}
			return this.collectTerminalNodes({
				decorated: node.parent.decorated,
				terminals: ExpressionPostProcessor.SHIFT_EXPRESSION__RANGE_TERMINALS,
				firstOnly: true
			});
		} else if (parentCtx instanceof RelationalExprAltContext && parentCtx._left === ctx) {
			return this.collectTerminalNodes({
				decorated: node.parent.decorated,
				terminals: ExpressionPostProcessor.RELATIONAL_EXPRESSION__TERMINALS,
				firstOnly: true
			});
		} else if (parentCtx instanceof EqualityExprAltContext && parentCtx._left === ctx) {
			return this.collectTerminalNodes({
				decorated: node.parent.decorated,
				terminals: ExpressionPostProcessor.EQUALITY_EXPRESSION__TERMINALS,
				firstOnly: true
			});
		} else if (parentCtx instanceof RegexExprAltContext && parentCtx._left === ctx) {
			return this.collectTerminalNodes({
				decorated: node.parent.decorated,
				terminals: ExpressionPostProcessor.REGEX_EXPRESSION__TERMINALS,
				firstOnly: true
			});
		} else if (parentCtx instanceof AndExprAltContext && parentCtx._left === ctx) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: ExpressionPostProcessor.AND_EXPRESSION__BITAND
			});
		} else if (parentCtx instanceof ExclusiveOrExprAltContext && parentCtx._left === ctx) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: ExpressionPostProcessor.EXCLUSIVE_OR_EXPRESSION__XOR
			});
		} else if (parentCtx instanceof InclusiveOrExprAltContext && parentCtx._left === ctx) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: ExpressionPostProcessor.INCLUSIVE_OR_EXPRESSION__BITOR
			});
		} else if (parentCtx instanceof LogicalAndExprAltContext && parentCtx._left === ctx) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: ExpressionPostProcessor.LOGICAL_AND_EXPRESSION__AND
			});
		} else if (parentCtx instanceof LogicalOrExprAltContext && parentCtx._left === ctx) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: ExpressionPostProcessor.LOGICAL_OR_EXPRESSION__OR
			});
		} else if (parentCtx instanceof ConditionalExprAltContext) {
			if (parentCtx._con === ctx) {
				return this.collectTerminalNodes({
					decorated: node.parent.decorated,
					terminals: ExpressionPostProcessor.CONDITIONAL_EXPRESSION__TERMINALS,
					firstOnly: true
				});
			} else if (parentCtx._tb === ctx) {
				return this.collectTerminalNodeToArray({
					decorated: node.parent.decorated,
					terminal: ExpressionPostProcessor.CONDITIONAL_EXPRESSION__COLON
				});
			}
		} else if (parentCtx instanceof AssignmentExprAltContext && parentCtx._left === ctx) {
			return this.collectTerminalNodes({
				decorated: node.parent.decorated,
				terminals: ExpressionPostProcessor.ASSIGNMENT_EXPRESSION__TERMINALS,
				firstOnly: true
			});
		}
		return [];
	}
}