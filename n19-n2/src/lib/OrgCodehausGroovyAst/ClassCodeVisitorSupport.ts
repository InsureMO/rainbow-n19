import {DeclarationExpression} from '../OrgCodehausGroovyAstExpr';
import {
	AssertStatement,
	BlockStatement,
	BreakStatement,
	CaseStatement,
	CatchStatement,
	ContinueStatement,
	DoWhileStatement,
	ExpressionStatement,
	ForStatement,
	IfStatement,
	ReturnStatement,
	Statement,
	SwitchStatement,
	SynchronizedStatement,
	ThrowStatement,
	TryCatchStatement,
	WhileStatement
} from '../OrgCodehausGroovyAstStmt';
import {SourceUnit} from '../OrgCodehausGroovyControl';
import {SyntaxErrorMessage} from '../OrgCodehausGroovyControlMessages';
import {SyntaxException} from '../OrgCodehausGroovySyntax';
import {GroovyErrorCollecting} from '../OrgCodehausGroovyTransform';
import {AnnotatedNode} from './AnnotatedNode';
import {AnnotationNode} from './AnnotationNode';
import {ASTNode} from './ASTNode';
import {ClassNode} from './ClassNode';
import {CodeVisitorSupport} from './CodeVisitorSupport';
import {ConstructorNode} from './ConstructorNode';
import {FieldNode} from './FieldNode';
import {GroovyClassVisitor} from './GroovyClassVisitor';
import { MethodNode } from './MethodNode';
import {ModuleNode} from './ModuleNode';
import {PackageNode} from './PackageNode';
import {PropertyNode} from './PropertyNode';

export abstract class ClassCodeVisitorSupport extends CodeVisitorSupport implements GroovyErrorCollecting, GroovyClassVisitor {
	visitClass(node: ClassNode): void {
		this.visitAnnotations(node);
		this.visitPackage(node.package);
		this.visitImports(node.module);
		node.visitContents(this);
		this.visitObjectInitializerStatements(node);
	}

	visitAnnotations(annotatedNodeOrAnnotationNodes: AnnotatedNode | Array<AnnotationNode>): void {
		let annotations: Array<AnnotationNode>;
		if (annotatedNodeOrAnnotationNodes instanceof AnnotatedNode) {
			annotations = annotatedNodeOrAnnotationNodes.annotations;
		} else {
			annotations = annotatedNodeOrAnnotationNodes;
		}
		for (const node of annotations) {
			// skip built-in properties
			if (!node.isBuiltIn) {
				this.visitAnnotation(node);
			}
		}
	}

	protected visitAnnotation(node: AnnotationNode): void {
		for (const expr of node.members.values()) {
			expr.visit(this);
		}
	}

	visitPackage(node: PackageNode): void {
		if (node != null) {
			this.visitAnnotations(node);
			node.visit(this);
		}
	}

	visitImports(node: ModuleNode): void {
		if (node != null) {
			for (const importNode of node.imports) {
				this.visitAnnotations(importNode);
				importNode.visit(this);
			}
			for (const importStarNode of node.starImports) {
				this.visitAnnotations(importStarNode);
				importStarNode.visit(this);
			}
			for (const importStaticNode of node.staticImports.values()) {
				this.visitAnnotations(importStaticNode);
				importStaticNode.visit(this);
			}
			for (const importStaticStarNode of node.staticStarImports.values()) {
				this.visitAnnotations(importStaticStarNode);
				importStaticStarNode.visit(this);
			}
		}
	}

	visitConstructor(node: ConstructorNode): void {
		this.visitConstructorOrMethod(node, true);
	}

	visitMethod(node: MethodNode): void {
		this.visitConstructorOrMethod(node, false);
	}

	protected visitConstructorOrMethod(node: MethodNode, isConstructor: boolean): void {
		this.visitAnnotations(node);
		this.visitClassCodeContainer(node.code);
		for (const param of node.parameters) {
			this.visitAnnotations(param);
		}
	}

	visitField(node: FieldNode): void {
		this.visitAnnotations(node);
		const init = node.initialExpression;
		if (init != null) {
			init.visit(this);
		}
	}

	visitProperty(node: PropertyNode): void {
		this.visitAnnotations(node);
		let statement = node.getterBlock;
		this.visitClassCodeContainer(statement);

		statement = node.setterBlock;
		this.visitClassCodeContainer(statement);

		const init = node.initialExpression;
		if (init != null) {
			init.visit(this);
		}
	}

	protected visitClassCodeContainer(code: Statement): void {
		if (code != null) {
			code.visit(this);
		}
	}

	protected visitObjectInitializerStatements(node: ClassNode): void {
		for (const statement of node.objectInitializerStatements) {
			statement.visit(this);
		}
	}

	visitDeclarationExpression(expression: DeclarationExpression): void {
		this.visitAnnotations(expression);
		super.visitDeclarationExpression(expression);
	}

	visitAssertStatement(statement: AssertStatement): void {
		this.visitStatement(statement);
		super.visitAssertStatement(statement);
	}

	visitBlockStatement(statement: BlockStatement): void {
		this.visitStatement(statement);
		super.visitBlockStatement(statement);
	}

	visitBreakStatement(statement: BreakStatement): void {
		this.visitStatement(statement);
		super.visitBreakStatement(statement);
	}

	visitCaseStatement(statement: CaseStatement): void {
		this.visitStatement(statement);
		super.visitCaseStatement(statement);
	}

	visitCatchStatement(statement: CatchStatement): void {
		this.visitStatement(statement);
		super.visitCatchStatement(statement);
	}

	visitContinueStatement(statement: ContinueStatement): void {
		this.visitStatement(statement);
		super.visitContinueStatement(statement);
	}

	visitDoWhileLoop(statement: DoWhileStatement): void {
		this.visitStatement(statement);
		super.visitDoWhileLoop(statement);
	}

	visitExpressionStatement(statement: ExpressionStatement): void {
		this.visitStatement(statement);
		super.visitExpressionStatement(statement);
	}

	visitForLoop(statement: ForStatement): void {
		this.visitStatement(statement);
		super.visitForLoop(statement);
	}

	visitIfElse(statement: IfStatement): void {
		this.visitStatement(statement);
		super.visitIfElse(statement);
	}

	visitReturnStatement(statement: ReturnStatement): void {
		this.visitStatement(statement);
		super.visitReturnStatement(statement);
	}

	visitSwitch(statement: SwitchStatement): void {
		this.visitStatement(statement);
		super.visitSwitch(statement);
	}

	visitSynchronizedStatement(statement: SynchronizedStatement): void {
		this.visitStatement(statement);
		super.visitSynchronizedStatement(statement);
	}

	visitThrowStatement(statement: ThrowStatement): void {
		this.visitStatement(statement);
		super.visitThrowStatement(statement);
	}

	visitTryCatchFinally(statement: TryCatchStatement): void {
		this.visitStatement(statement);
		super.visitTryCatchFinally(statement);
	}

	visitWhileLoop(statement: WhileStatement): void {
		this.visitStatement(statement);
		super.visitWhileLoop(statement);
	}

	/** default do nothing, should be overridden or something */
	protected visitStatement(statement: Statement): void {
	}

	protected abstract get sourceUnit(): SourceUnit;

	addError(error: string, node: ASTNode): void {
		const source = this.sourceUnit;
		source.errorCollector.addErrorAndContinue(
			new SyntaxErrorMessage(new SyntaxException({
				message: error + '\n',
				startLine: node.lineNumber, startColumn: node.columnNumber,
				endLine: node.lastLineNumber, endColumn: node.lastColumnNumber
			}), source)
		);
	}
}
