import {IClass, Modifier} from '../Java';
import {Exception, IllegalArgumentException} from '../JavaExceptions';
import {JavaConsumer} from '../JavaUtil';
import {PrimitiveHelper} from '../OrgCodehausGroovyAntlr';
import {
	AnnotatedNode,
	AnnotationNode,
	ASTNode,
	ClassHelper,
	ClassNode,
	FieldNode,
	MethodNode,
	Parameter,
	PropertyNode,
	Variable,
	VariableScope
} from '../OrgCodehausGroovyAst';
import {
	ArgumentListExpression,
	AttributeExpression,
	BinaryExpression,
	BooleanExpression,
	CastExpression,
	ClassExpression,
	ClosureExpression,
	ConstantExpression,
	ConstructorCallExpression,
	DeclarationExpression,
	ElvisOperatorExpression,
	Expression,
	FieldExpression,
	LambdaExpression,
	ListExpression,
	MapEntryExpression,
	MapExpression,
	MethodCallExpression,
	NotExpression,
	PropertyExpression,
	StaticMethodCallExpression,
	TernaryExpression,
	VariableExpression
} from '../OrgCodehausGroovyAstExpr';
import {
	BlockStatement,
	CaseStatement,
	CatchStatement,
	EmptyStatement,
	ExpressionStatement,
	ForStatement,
	IfStatement,
	ReturnStatement,
	Statement,
	SwitchStatement,
	SynchronizedStatement,
	ThrowStatement,
	TryCatchStatement
} from '../OrgCodehausGroovyAstStmt';
import {BytecodeExpression} from '../OrgCodehausGroovyClassgen';
import {ReaderSource} from '../OrgCodehausGroovyControl';
import {Token, Types} from '../OrgCodehausGroovySyntax';
import {AbstractASTTransformation} from '../OrgCodehausGroovyTransform';
import {MethodVisitor} from '../OrgObjectwebAsm';
import {BeanUtils} from './BeanUtils';
import {GenericsUtils} from './GenericsUtils';

export class GeneralUtils {
	static readonly ASSIGN: Token = Token.newSymbol(Types.ASSIGN, -1, -1);
	static readonly EQ: Token = Token.newSymbol(Types.COMPARE_EQUAL, -1, -1);
	static readonly NE: Token = Token.newSymbol(Types.COMPARE_NOT_EQUAL, -1, -1);
	static readonly NOT_IDENTICAL: Token = Token.newSymbol(Types.COMPARE_NOT_IDENTICAL, -1, -1);
	static readonly LT: Token = Token.newSymbol(Types.COMPARE_LESS_THAN, -1, -1);
	static readonly AND: Token = Token.newSymbol(Types.LOGICAL_AND, -1, -1);
	static readonly OR: Token = Token.newSymbol(Types.LOGICAL_OR, -1, -1);
	static readonly CMP: Token = Token.newSymbol(Types.COMPARE_TO, -1, -1);
	static readonly INSTANCEOF: Token = Token.newSymbol(Types.KEYWORD_INSTANCEOF, -1, -1);
	static readonly PLUS: Token = Token.newSymbol(Types.PLUS, -1, -1);
	private static readonly INDEX: Token = Token.newSymbol('[', -1, -1);

	private constructor() {
		// avoid extend
	}

	static andX(lhv: Expression, rhv: Expression): BinaryExpression {
		return GeneralUtils.binX(lhv, GeneralUtils.AND, rhv);
	}

	static args(...expressionsOrParametersOrNames: Array<Expression> | Array<Parameter> | Array<string>): ArgumentListExpression {
		const first = (expressionsOrParametersOrNames ?? [])[0];
		if (first == null) {
			return new ArgumentListExpression([]);
		} else if (typeof first === 'string') {
			return new ArgumentListExpression((expressionsOrParametersOrNames as Array<string>).map(name => GeneralUtils.varX(name)));
		} else {
			return new ArgumentListExpression(expressionsOrParametersOrNames as Array<Expression> | Array<Parameter>);
		}
	}

	static asX(type: ClassNode, expression: Expression): CastExpression {
		return CastExpression.asExpression(type, expression);
	}

	static assignS(target: Expression, value: Expression): Statement {
		return GeneralUtils.stmt(GeneralUtils.assignX(target, value));
	}

	static assignNullS(target: Expression): Statement {
		return GeneralUtils.assignS(target, ConstantExpression.EMPTY_EXPRESSION);
	}

	static assignX(target: Expression, value: Expression): Expression {
		return GeneralUtils.binX(target, GeneralUtils.ASSIGN, value);
	}

	static attrX(oe: Expression, propOrName: Expression | string): Expression {
		if (typeof propOrName === 'string') {
			return new AttributeExpression(oe, GeneralUtils.constX(propOrName));
		} else {
			return new AttributeExpression(oe, propOrName);
		}
	}

	static binX(left: Expression, token: Token, right: Expression): BinaryExpression {
		return new BinaryExpression(left, token, right);
	}

	static block(stmts: Array<Statement>, scope?: VariableScope): BlockStatement {
		const block = new BlockStatement();
		if (scope != null) {
			block.setVariableScope(scope);
		}
		(stmts ?? []).forEach(statement => block.addStatement(statement));
		return block;
	}

	static boolX(expr: Expression): BooleanExpression {
		return new BooleanExpression(expr);
	}

	static bytecodeX(writer: JavaConsumer<MethodVisitor>, type?: ClassNode): BytecodeExpression {
		const expr = new class extends BytecodeExpression {
			doVisit(visitor: MethodVisitor): void {
				writer.accept(visitor);
			}
		}();
		if (type != null) {
			expr.setType(type);
		}

		return expr;
	}

	static callSuperX(methodName: string, args: Expression = MethodCallExpression.NO_ARGUMENTS): MethodCallExpression {
		return GeneralUtils.callX(GeneralUtils.varX('super'), methodName, args) as MethodCallExpression;
	}

	static callThisX(methodName: string, args: Expression = MethodCallExpression.NO_ARGUMENTS): MethodCallExpression {
		return GeneralUtils.callX(GeneralUtils.varX('this'), methodName, args) as MethodCallExpression;
	}

	static callX(receiver: Expression | ClassNode, methodOrName: string | Expression, args: Expression = MethodCallExpression.NO_ARGUMENTS): MethodCallExpression | StaticMethodCallExpression {
		if (receiver instanceof ClassNode) {
			if (typeof methodOrName === 'string') {
				return new StaticMethodCallExpression(receiver, methodOrName, args);
			} else {
				throw new IllegalArgumentException(`Second parameter of StaticMethodCallExpression constructor must be a string.`);
			}
		} else {
			return new MethodCallExpression(receiver, methodOrName, args);
		}
	}

	static caseS(expression: Expression, code: Statement): CaseStatement {
		return new CaseStatement(expression, code);
	}

	static castX(type: ClassNode, expression: Expression, ignoreAutoboxing?: boolean): CastExpression {
		return new CastExpression(type, expression, ignoreAutoboxing);
	}

	static catchS(variable: Parameter, code: Statement): CatchStatement {
		return new CatchStatement(variable, code);
	}

	static classX(clazz: ClassNode | IClass): ClassExpression {
		if (clazz instanceof ClassNode) {
			return new ClassExpression(clazz);
		} else {
			return new ClassExpression(ClassHelper.make(clazz).getPlainNodeReference());
		}
	}

	static closureX(code: Statement, params: Array<Parameter> = Parameter.EMPTY_ARRAY): ClosureExpression {
		return new ClosureExpression(params, code);
	}

	/**
	 * Builds a lambda expression
	 *
	 * @param params lambda parameters
	 * @param code lambda code
	 * @return the lambda expression
	 */
	static lambdaX(code: Statement, params: Array<Parameter> = Parameter.EMPTY_ARRAY): LambdaExpression {
		return new LambdaExpression(params, code);
	}

	/**
	 * Builds a binary expression that compares two values.
	 *
	 * @param lhv expression for the value to compare from
	 * @param rhv expression for the value to compare to
	 * @return the expression comparing two values
	 */
	static cmpX(lhv: Expression, rhv: Expression): BinaryExpression {
		return GeneralUtils.binX(lhv, GeneralUtils.CMP, rhv);
	}

	static constX(val: any, keepPrimitive?: boolean): ConstantExpression {
		return new ConstantExpression(val, keepPrimitive);
	}

	static ctorX(type: ClassNode, args: Expression = ArgumentListExpression.EMPTY_ARGUMENTS): ConstructorCallExpression {
		return new ConstructorCallExpression(type, args);
	}

	static ctorSuperS(args?: Expression): Statement {
		return GeneralUtils.stmt(GeneralUtils.ctorSuperX(args));
	}

	static ctorSuperX(args?: Expression): ConstructorCallExpression {
		return GeneralUtils.ctorX(ClassNode.SUPER, args);
	}

	static ctorThisS(args?: Expression): Statement {
		return GeneralUtils.stmt(GeneralUtils.ctorThisX(args));
	}

	static ctorThisX(args?: Expression): ConstructorCallExpression {
		return GeneralUtils.ctorX(ClassNode.THIS, args);
	}

	static declS(target: Expression, init: Expression): Statement {
		return GeneralUtils.stmt(GeneralUtils.declX(target, init));
	}

	static declX(target: Expression, init: Expression): DeclarationExpression {
		return new DeclarationExpression(target, GeneralUtils.ASSIGN, init);
	}

	// noinspection GrazieInspection
	/**
	 * Returns a constant expression with the default value for the given type
	 * (i.e., {@code false} for boolean, {@code 0} for numbers or {@code null}.
	 *
	 * @since 4.0.0
	 */
	static defaultValueX(type: ClassNode): ConstantExpression {
		return (PrimitiveHelper.getDefaultValueForPrimitive(type) ?? GeneralUtils.nullX()) as ConstantExpression;
	}

	static elvisX(base: Expression, otherwise: Expression): ElvisOperatorExpression {
		return new ElvisOperatorExpression(base, otherwise);
	}

	static entryX(key: Expression, value: Expression): MapEntryExpression {
		return new MapEntryExpression(key, value);
	}

	static eqX(left: Expression, right: Expression): BinaryExpression {
		return GeneralUtils.binX(left, GeneralUtils.EQ, right);
	}

	static equalsNullX(expr: Expression): BooleanExpression {
		return GeneralUtils.boolX(GeneralUtils.eqX(GeneralUtils.nullX(), expr));
	}

	static fieldX(fieldNodeOrOwner: FieldNode | ClassNode, fieldName?: string): FieldExpression {
		if (fieldNodeOrOwner instanceof ClassNode) {
			return new FieldExpression(fieldNodeOrOwner.getField(fieldName));
		} else {
			return new FieldExpression(fieldNodeOrOwner);
		}
	}

	static findArg(argName: string): Expression {
		return GeneralUtils.propX(GeneralUtils.varX('args'), argName);
	}

	static forS(variable: Parameter, collectionExpression: Expression, loopS: Statement): ForStatement {
		return new ForStatement(variable, collectionExpression, loopS);
	}

	static getAllMethods(type: ClassNode): Array<MethodNode> {
		let node = type;
		const result: Array<MethodNode> = [];
		while (node != null) {
			result.push(...node.methods);
			node = node.superclass;
		}
		return result;
	}

	static getAllProperties(namesOrType: Array<string> | ClassNode,
	                        origType?: ClassNode, cNode?: ClassNode,
	                        includeProperties?: boolean, includeFields?: boolean, includePseudoGetters?: boolean,
	                        includePseudoSetters?: boolean, traverseSuperClasses?: boolean, skipReadonly?: boolean,
	                        reverse: boolean = false, allNames: boolean = false, includeStatic: boolean = false): Array<PropertyNode> {
		if (namesOrType instanceof ClassNode) {
			let node = namesOrType;
			const result: Array<PropertyNode> = [];
			while (node != null) {
				result.push(...node.properties);
				node = node.superclass;
			}
			return result;
		}
		const names = namesOrType;
		const result: Array<PropertyNode> = [];
		if (!(ClassHelper.isObjectType(cNode)) && traverseSuperClasses && !reverse) {
			result.push(...GeneralUtils.getAllProperties(names, origType, cNode.superclass,
				includeProperties, includeFields, includePseudoGetters, includePseudoSetters, true, skipReadonly));
		}
		if (includeProperties) {
			for (const pNode of cNode.properties) {
				if ((!pNode.isStatic || includeStatic) && !names.includes(pNode.name)) {
					result.push(pNode);
					names.push(pNode.name);
				}
			}
			if (includePseudoGetters || includePseudoSetters) {
				BeanUtils.addPseudoProperties(origType, cNode, result, names, includeStatic, includePseudoGetters, includePseudoSetters, traverseSuperClasses);
			}
		}
		if (includeFields) {
			for (const fNode of cNode.fields) {
				if ((fNode.isStatic && !includeStatic) || fNode.isSynthetic || cNode.getProperty(fNode.name) != null || names.includes(fNode.name)) {
					continue;
				}

				// internal field
				if (fNode.name.includes('$') && !allNames) {
					continue;
				}

				if (fNode.isPrivate && !cNode.equals(origType)) {
					continue;
				}
				if (fNode.isFinal && fNode.initialExpression != null && skipReadonly) {
					continue;
				}
				result.push(new PropertyNode(fNode, fNode.modifiers, null, null));
				names.push(fNode.name);
			}
		}
		if (!(ClassHelper.isObjectType(cNode)) && traverseSuperClasses && reverse) {
			result.push(...GeneralUtils.getAllProperties(names, origType, cNode.superclass,
				includeProperties, includeFields, includePseudoGetters, includePseudoSetters, true, skipReadonly));
		}
		return result;
	}

	static getInstanceNonPropertyFields(cNode: ClassNode): Array<FieldNode> {
		return cNode.fields.filter(fNode => !fNode.isStatic && cNode.getProperty(fNode.name) != null);
	}

	static getInstanceNonPropertyFieldNames(cNode: ClassNode): Array<string> {
		return GeneralUtils.getInstanceNonPropertyFields(cNode).map(fNode => fNode.name);
	}

	static getInstanceProperties(cNode: ClassNode): Array<PropertyNode> {
		return cNode.properties.filter(pNode => !pNode.isStatic);
	}

	static getInstancePropertyNames(cNode: ClassNode): Array<String> {
		return GeneralUtils.getInstanceProperties(cNode).map(pNode => pNode.name);
	}

	static getInstancePropertyFields(cNode: ClassNode): Array<FieldNode> {
		return cNode.properties.filter(pNode => !pNode.isStatic).map(pNode => pNode.field);
	}

	/**
	 * TODO NEED FILTER NODE WHICH ALREADY ADDED
	 */
	private static addAllInterfaces(result: Array<ClassNode>, source: ClassNode): void {
		for (const interfaceClassNode of source.interfaces) {
			const genericInterfaceClassNode = GenericsUtils.parameterizeType(source, interfaceClassNode);
			if (!result.includes(genericInterfaceClassNode)) {
				result.push(genericInterfaceClassNode);
				GeneralUtils.addAllInterfaces(result, genericInterfaceClassNode);
			}
		}
		const sc = source.redirect().getUnresolvedSuperclass(false);
		if (sc != null && !ClassHelper.isObjectType(sc)) {
			GeneralUtils.addAllInterfaces(result, GenericsUtils.parameterizeType(source, sc));
		}
	}

	static getInterfacesAndSuperInterfaces(cNode: ClassNode): Array<ClassNode> {
		const result = [];
		if (cNode.isInterface) {
			result.push(cNode);
		}
		GeneralUtils.addAllInterfaces(result, cNode);
		return result;
	}

	static getSuperNonPropertyFields(cNode: ClassNode): Array<FieldNode> {
		let result: Array<FieldNode>;
		if (ClassHelper.isObjectType(cNode)) {
			result = [];
		} else {
			result = GeneralUtils.getSuperNonPropertyFields(cNode.superclass);
		}
		for (const fNode of cNode.fields) {
			if (!fNode.isStatic && cNode.getProperty(fNode.name) == null) {
				result.push(fNode);
			}
		}
		return result;
	}

	static getSuperPropertyFields(cNode: ClassNode): Array<FieldNode> {
		let result: Array<FieldNode>;
		if (ClassHelper.isObjectType(cNode)) {
			result = [];
		} else {
			result = GeneralUtils.getSuperPropertyFields(cNode.superclass);
		}
		for (const pNode of cNode.properties) {
			if (!pNode.isStatic) {
				result.push(pNode.field);
			}
		}
		return result;
	}

	/**
	 * This method is similar to {@link #propX(Expression, Expression)} but will make sure that if the property
	 * being accessed is defined inside the classnode provided as a parameter, then a getter call is generated
	 * instead of a field access.
	 * @param annotatedNode the class node where the property node is accessed from
	 * @param pNode the property being accessed
	 * @return a method call expression or a property expression
	 */
	static getterThisX(annotatedNode: ClassNode, pNode: PropertyNode): Expression {
		const owner: ClassNode = pNode.declaringClass;
		if (annotatedNode.equals(owner)) {
			return GeneralUtils.callThisX(pNode.getterNameOrDefault);
		}
		return GeneralUtils.propX(GeneralUtils.varX('this'), pNode.name);
	}

	/**
	 * This method is similar to {@link #propX(Expression, Expression)} but will make sure that if the property
	 * being accessed is defined inside the classnode provided as a parameter, then a getter call is generated
	 * instead of a field access.
	 * @param annotatedNode the class node where the property node is accessed from
	 * @param receiver the object having the property
	 * @param pNode the property being accessed
	 * @return a method call expression or a property expression
	 */
	static getterX(annotatedNode: ClassNode, receiver: Expression, pNode: PropertyNode): Expression {
		const owner = pNode.declaringClass;
		if (annotatedNode.equals(owner)) {
			return GeneralUtils.callX(receiver, pNode.getterNameOrDefault);
		}
		return GeneralUtils.propX(receiver, pNode.name);
	}

	static hasClassX(instance: Expression, cNode: ClassNode): BinaryExpression {
		return GeneralUtils.eqX(GeneralUtils.classX(cNode), GeneralUtils.callX(instance, 'getClass'));
	}

	static hasEqualFieldX(fNode: FieldNode, other: Expression): BinaryExpression {
		return GeneralUtils.eqX(GeneralUtils.varX(fNode), GeneralUtils.propX(other, fNode.name));
	}

	static hasEqualPropertyX(cNode: ClassNode, pNode: PropertyNode, other: VariableExpression): BinaryExpression {
		return GeneralUtils.eqX(GeneralUtils.getterThisX(cNode, pNode), GeneralUtils.getterX(other.originType, other, pNode));
	}

	static hasSameFieldX(fNode: FieldNode, other: Expression): BooleanExpression {
		return GeneralUtils.sameX(GeneralUtils.varX(fNode), GeneralUtils.propX(other, fNode.name));
	}

	static hasSamePropertyX(pNode: PropertyNode, other: Expression): BooleanExpression {
		const cNode = pNode.declaringClass;
		return GeneralUtils.sameX(GeneralUtils.getterThisX(cNode, pNode), GeneralUtils.getterX(cNode, other, pNode));
	}

	/**
	 * @deprecated
	 */
	static ifElseS$$bridge(cond: Expression, thenStmt: Statement, elseStmt: Statement): Statement {
		return GeneralUtils.ifElseS(cond, thenStmt, elseStmt);
	}

	static ifElseS(cond: Expression, thenStmt: Statement, elseStmt: Statement): IfStatement {
		return new IfStatement(
			cond instanceof BooleanExpression ? cond : GeneralUtils.boolX(cond),
			thenStmt,
			elseStmt
		);
	}

	/**
	 * @deprecated
	 */
	static ifS$$bridge(cond: Expression, trueExprOrStmt: Expression | Statement): Statement {
		return GeneralUtils.ifS(cond, trueExprOrStmt);
	}

	static ifS(cond: Expression, trueExprOrStmt: Expression | Statement): IfStatement {
		return GeneralUtils.ifElseS(cond,
			trueExprOrStmt instanceof Statement ? trueExprOrStmt : GeneralUtils.stmt(trueExprOrStmt),
			EmptyStatement.INSTANCE);
	}

	static indexX(target: Expression, value: Expression): Expression {
		return GeneralUtils.binX(target, GeneralUtils.INDEX, value);
	}

	static isInstanceOfX(expr: Expression, type: ClassNode): BooleanExpression {
		return GeneralUtils.boolX(GeneralUtils.binX(expr, GeneralUtils.INSTANCEOF, GeneralUtils.classX(type)));
	}

	/**
	 * @since 4.0.8
	 */
	static isNullOrInstanceOfX(expr: Expression, type: ClassNode): BooleanExpression {
		return GeneralUtils.boolX(GeneralUtils.orX(
			GeneralUtils.binX(GeneralUtils.nullX(), Token.newSymbol(Types.COMPARE_IDENTICAL, -1, -1), expr),
			GeneralUtils.binX(expr, GeneralUtils.INSTANCEOF, GeneralUtils.classX(type))
		));
	}

	/**
	 * Alias for {@link #equalsNullX(Expression)}
	 */
	static isNullX(expr: Expression): BooleanExpression {
		return GeneralUtils.equalsNullX(expr);
	}

	static isOneX(expr: Expression): BooleanExpression {
		return GeneralUtils.boolX(GeneralUtils.binX(expr, GeneralUtils.EQ, GeneralUtils.constX(1)));
	}

	static isTrueX(argExpr: Expression): BooleanExpression {
		return GeneralUtils.boolX(GeneralUtils.binX(argExpr, GeneralUtils.EQ, GeneralUtils.constX(true)));
	}

	static isZeroX(expr: Expression): BooleanExpression {
		return GeneralUtils.boolX(GeneralUtils.binX(expr, GeneralUtils.EQ, GeneralUtils.constX(0)));
	}

	static listX(args: Array<Expression>): ListExpression {
		return new ListExpression(args);
	}

	static list2args(args: Array<any>): ListExpression {
		const result = new ListExpression();
		for (const o of args) {
			result.addExpression(GeneralUtils.constX(o));
		}
		return result;
	}

	static classList2args(args: Array<String>): ListExpression {
		const result = new ListExpression();
		for (const o of args) {
			result.addExpression(GeneralUtils.classX(ClassHelper.make(o.toString())));
		}
		return result;
	}

	static localVarX(name: string, type?: ClassNode): VariableExpression {
		const result = GeneralUtils.varX(name, type);
		result.setAccessedVariable(result);
		return result;
	}

	static ltX(lhv: Expression, rhv: Expression): BinaryExpression {
		return GeneralUtils.binX(lhv, GeneralUtils.LT, rhv);
	}

	static mapEntryX(keyOrExpr: string | Expression, valueExpr: Expression): MapEntryExpression {
		return new MapEntryExpression(typeof keyOrExpr === 'string' ? GeneralUtils.constX(keyOrExpr) : keyOrExpr, valueExpr);
	}

	static mapX(expressions: Array<MapEntryExpression>): MapExpression {
		return new MapExpression(expressions);
	}

	static neX(lhv: Expression, rhv: Expression): BinaryExpression {
		return GeneralUtils.binX(lhv, GeneralUtils.NE, rhv);
	}

	static notIdenticalX(lhv: Expression, rhv: Expression): BinaryExpression {
		return GeneralUtils.binX(lhv, GeneralUtils.NOT_IDENTICAL, rhv);
	}

	static notNullX(expr: Expression): BooleanExpression {
		return GeneralUtils.boolX(GeneralUtils.binX(GeneralUtils.nullX(), GeneralUtils.NE, expr));
	}

	static notX(expr: Expression): NotExpression {
		return new NotExpression(expr instanceof BooleanExpression ? expr : GeneralUtils.boolX(expr));
	}

	static nullX(): ConstantExpression {
		return GeneralUtils.constX(null);
	}

	static orX(lhv: Expression, rhv: Expression): BinaryExpression {
		return GeneralUtils.binX(lhv, GeneralUtils.OR, rhv);
	}

	static param(type: ClassNode, name: string, initialExpression?: Expression): Parameter {
		const param = new Parameter(type, name);
		if (initialExpression != null) {
			param.setInitialExpression(initialExpression);
		}
		return param;
	}

	static params(params: Array<Parameter>): Array<Parameter> {
		return (params != null ? params : Parameter.EMPTY_ARRAY);
	}

	static plusX(lhv: Expression, rhv: Expression): BinaryExpression {
		return GeneralUtils.binX(lhv, GeneralUtils.PLUS, rhv);
	}

	static propX(owner: Expression, propertyOrExpression: string | Expression, safe?: boolean): PropertyExpression {
		return new PropertyExpression(owner, propertyOrExpression, safe);
	}

	/**
	 * @deprecated
	 */
	static propX$$bridge(owner: Expression, property: string | Expression): Expression {
		return GeneralUtils.propX(owner, property);
	}

	static returnS(expr: Expression): Statement {
		return new ReturnStatement(expr);
	}

	static safeExpression(fieldExpr: Expression, expression: Expression): Statement {
		return new IfStatement(GeneralUtils.isNullX(fieldExpr), GeneralUtils.stmt(fieldExpr), GeneralUtils.stmt(expression));
	}

	static sameX(self: Expression, other: Expression): BooleanExpression {
		return GeneralUtils.boolX(GeneralUtils.callX(self, 'is', GeneralUtils.args(other)));
	}

	static stmt(expr: Expression): Statement {
		return new ExpressionStatement(expr);
	}

	static switchS(expr: Expression, caseStatements?: Array<CaseStatement>, defaultStatement?: Statement): SwitchStatement {
		return new SwitchStatement(expr, caseStatements, defaultStatement);
	}

	static ternaryX(cond: Expression, trueExpr: Expression, elseExpr: Expression): TernaryExpression {
		return new TernaryExpression(
			cond instanceof BooleanExpression ? cond : GeneralUtils.boolX(cond),
			trueExpr,
			elseExpr);
	}

	static thisPropX(implicit: boolean, property: string): PropertyExpression {
		const propX = GeneralUtils.propX(GeneralUtils.varX('this'), property);
		propX.setImplicitThis(implicit);
		return propX;
	}

	static throwS(expr: Expression): ThrowStatement {
		return new ThrowStatement(expr);
	}

	static tryCatchS(tryStatement: Statement, finallyStatement?: Statement, catchStatements?: Array<CatchStatement>): TryCatchStatement {
		const result = new TryCatchStatement(tryStatement, finallyStatement);
		for (const catchStatement of (catchStatements ?? [])) {
			result.addCatch(catchStatement);
		}
		return result;
	}

	static varX(nameOrVariable: string | Variable, type?: ClassNode): VariableExpression {
		return new VariableExpression(nameOrVariable, type);
	}

	static cloneParams(parameters: Array<Parameter>): Array<Parameter> {
		return parameters.map(parameter => GeneralUtils.param(parameter.originType, parameter.name));
	}

	/**
	 * Copies all <tt>candidateAnnotations</tt> with retention policy {@code RetentionPolicy#RUNTIME}
	 * and {@code RetentionPolicy#CLASS}.
	 * {@code groovy.transform.Generated} annotations will be copied if {@code includeGenerated} is true.
	 * <p>
	 * Annotations with {@code org.codehaus.groovy.runtime.GeneratedClosure} members are not supported at present.
	 */
	static copyAnnotatedNodeAnnotations(annotatedNode: AnnotatedNode, copied: Array<AnnotationNode>, notCopied: Array<AnnotationNode>, includeGenerated: boolean = true): void {
		const annotationList: Array<AnnotationNode> = annotatedNode.annotations;
		for (const annotation of annotationList) {
			const annotations = annotation.classNode.getAnnotations(AbstractASTTransformation.RETENTION_CLASSNODE);
			if (annotations.length === 0) {
				continue;
			}

			if (GeneralUtils.hasClosureMember(annotation)) {
				notCopied.push(annotation);
				continue;
			}

			if (!includeGenerated && annotation.classNode.name === 'groovy.transform.Generated') {
				continue;
			}

			const retentionPolicyAnnotation = annotations[0];
			const valueExpression = retentionPolicyAnnotation.getMember('value');
			if (!(valueExpression instanceof PropertyExpression)) {
				continue;
			}

			const propertyExpression = valueExpression;
			const processAnnotation = propertyExpression.property instanceof ConstantExpression
				&& ('RUNTIME' === propertyExpression.property.value || 'CLASS' === propertyExpression.property.value);
			if (processAnnotation) {
				const newAnnotation = new AnnotationNode(annotation.classNode);
				for (const [key, value] of annotation.members.entries()) {
					newAnnotation.addMember(key, value);
				}
				newAnnotation.setSourcePosition(annotatedNode);

				copied.push(newAnnotation);
			}
		}
	}

	static createConstructorStatementDefault(fNode: FieldNode): Statement {
		const name = fNode.name;
		const fType = fNode.type;
		const fieldExpr = GeneralUtils.propX(GeneralUtils.varX('this'), name);
		const initExpr = fNode.initialValueExpression;
		let assignInit: Statement;
		if (initExpr == null || (initExpr instanceof ConstantExpression && initExpr.isNullExpression)) {
			if (ClassHelper.isPrimitiveType(fType)) {
				assignInit = EmptyStatement.INSTANCE;
			} else {
				assignInit = GeneralUtils.assignS(fieldExpr, ConstantExpression.EMPTY_EXPRESSION);
			}
		} else {
			assignInit = GeneralUtils.assignS(fieldExpr, initExpr);
		}
		fNode.setInitialValueExpression(null);
		const value = GeneralUtils.findArg(name);
		return GeneralUtils.ifElseS(GeneralUtils.isNullX(value), assignInit, GeneralUtils.assignS(fieldExpr, GeneralUtils.castX(fType, value)));
	}

	/**
	 * Generally preferred to use {@link PropertyNode#getterNameOrDefault} directly.
	 */
	static getGetterName(nameOrNode: string | PropertyNode, type?: IClass): string {
		if (typeof nameOrNode === 'string') {
			return MetaProperty.getGetterName(nameOrNode, type ?? Object.class);
		} else {
			return nameOrNode.getterNameOrDefault;
		}
	}

	static getSetterName(name: string): string {
		return MetaProperty.getSetterName(name);
	}

	/**
	 * Converts an expression into the String source. Only some specific expressions like closure expression
	 * support this.
	 *
	 * @param readerSource a source
	 * @param expression an expression. Can't be null
	 * @return the source the closure was created from
	 * @throws java.lang.IllegalArgumentException when expression is null
	 * @throws java.lang.Exception when closure can't be read from source
	 */
	static convertASTToSource(readerSource: ReaderSource, expression: ASTNode): string {
		if (expression == null) {
			throw new IllegalArgumentException('Null: expression');
		}

		let result: string = '';
		for (let x = expression.lineNumber, y = expression.lastLineNumber; x <= y; x += 1) {
			let line: string = readerSource.getLine(x, null);
			if (line == null) {
				throw new Exception('Error calculating source code for expression. Trying to read line ' + x + ' from ' + readerSource.constructor.name
				);
			}
			if (x == expression.lastLineNumber) {
				line = line.substring(0, expression.lastColumnNumber - 1);
			}
			if (x == expression.lineNumber) {
				line = line.substring(expression.columnNumber - 1);
			}
			//restoring line breaks is important b/c of lack of semicolons
			result += line + '\n';
		}

		return result.trim();
	}

	static copyStatementsWithSuperAdjustment(pre: ClosureExpression, body: BlockStatement): boolean {
		const preCode = pre.code;
		let changed = false;
		if (preCode instanceof BlockStatement) {
			const statements = preCode.statements;
			for (let i = 0, n = statements.length; i < n; i += 1) {
				const statement = statements[i];
				// adjust the first statement if it's a super call
				if (i == 0 && statement instanceof ExpressionStatement) {
					const es = statement;
					const preExp = es.expression;
					if (preExp instanceof MethodCallExpression) {
						const mce = preExp;
						const name: string = mce.methodAsString;
						if ('super' === name) {
							es.setExpression(new ConstructorCallExpression(ClassNode.SUPER, mce.arguments));
							changed = true;
						}
					}
				}
				body.addStatement(statement);
			}
		}
		return changed;
	}

	private static hasClosureMember(annotation: AnnotationNode): boolean {
		const members = annotation.members;
		for (const [, value] of members.entries()) {
			if (value instanceof ClosureExpression) {
				return true;
			}

			if (value instanceof ClassExpression) {
				const classExpression = value;
				const typeClass: IClass = classExpression.type.isResolved ? classExpression.type.redirect().typeClass : null;
				if (typeClass != null && GeneratedClosure.class.isAssignableFrom(typeClass)) {
					return true;
				}
			}
		}
		return false;
	}

	static hasDeclaredMethod(cNode: ClassNode, name: string, argsCount: number): boolean {
		const methods = cNode.getDeclaredMethods(name);
		for (const method of methods) {
			const params = method.parameters;
			if (params != null && params.length == argsCount) {
				return true;
			}
		}
		return false;
	}

	static findDeclaredMethod(cNode: ClassNode, name: string, argsCount: number): MethodNode {
		// TODO COPY FROM GROOVY: ignore bridge methods?
		const methods = cNode.getDeclaredMethods(name);
		for (const method of methods) {
			const params = method.parameters;
			if (params != null && params.length == argsCount) {
				return method;
			}
		}
		return null;
	}

	static inSamePackage(first: ClassNode | IClass, second: ClassNode | IClass): boolean {
		const firstPackage = first.package;
		const secondPackage = second.package;
		return (firstPackage == null && secondPackage == null)
			|| (firstPackage != null && secondPackage != null && firstPackage.name === secondPackage.name);
	}

	static isDefaultVisibility(modifiers: number): boolean {
		return (modifiers & (Modifier.PRIVATE | Modifier.PUBLIC | Modifier.PROTECTED)) == 0;
	}

	static isOrImplements(type: ClassNode, interfaceType: ClassNode): boolean {
		return type.equals(interfaceType) || type.implementsInterface(interfaceType);
	}

	/**
	 * @deprecated use {@link MethodNodeUtils#methodDescriptorWithoutReturnType} instead
	 */
	static makeDescriptorWithoutReturnType(mn: MethodNode): string {
		let sb: string = '';
		sb = sb + mn.name + ':';
		for (const p of mn.parameters) {
			sb = sb + p.type + ',';
		}
		return sb;
	}

	static maybeFallsThrough(statement: Statement): boolean {
		if (statement.isEmpty) {
			return true;
		}

		if (statement instanceof ReturnStatement) {
			return false;
		} else if (statement instanceof ThrowStatement) {
			return false;
		} else if (statement instanceof BlockStatement) {
			const list = statement.statements;
			const last = list.length - 1;
			if (!GeneralUtils.maybeFallsThrough(list[last])) {
				return false;
			}
			for (let i = 0; i < last; i += 1) {
				if (!GeneralUtils.maybeFallsThrough(list[i])) {
					return false;
				}
			}
		} else if (statement instanceof IfStatement) {
			return GeneralUtils.maybeFallsThrough(statement.elseBlock)
				|| GeneralUtils.maybeFallsThrough(statement.ifBlock);
		} else if (statement instanceof SwitchStatement) {
			// TODO COPY FROM GROOVY:
		} else if (statement instanceof TryCatchStatement) {
			const tryCatch = statement;
			if (!GeneralUtils.maybeFallsThrough(tryCatch.finallyStatement)) {
				return false;
			}
			for (const cs of tryCatch.catchStatements) {
				if (GeneralUtils.maybeFallsThrough(cs.code)) {
					return true;
				}
			}
			return GeneralUtils.maybeFallsThrough(tryCatch.tryStatement);
		} else if (statement instanceof SynchronizedStatement) {
			return GeneralUtils.maybeFallsThrough(statement.code);
		}

		return true;
	}
}
