import {IClass} from '../Java';
import {AnnotationNode, ClassHelper, ClassNode} from '../OrgCodehausGroovyAst';
import {ClassExpression, ConstantExpression, Expression, ListExpression} from '../OrgCodehausGroovyAstExpr';
import {GeneralUtils} from '../OrgCodehausGroovyAstTools';
import {AbstractASTTransformation} from '../OrgCodehausGroovyTransform';
import {GroovyAstMakeFirst} from '../TsAddon';

export class ImmutablePropertyUtils {
	private static readonly CLONEABLE_TYPE: ClassNode = ClassHelper.make(GroovyAstMakeFirst.JavaLang.Cloneable);
	private static readonly DATE_TYPE: ClassNode = ClassHelper.make(GroovyAstMakeFirst.JavaUtil.Date);
	private static readonly OBJECT_UTIL_TYPE: ClassNode = ClassHelper.make(GroovyAstMakeFirst.OrgCodehausGroovyRuntime.ObjectUtil);
	static readonly IMMUTABLE_OPTIONS_TYPE: ClassNode = ClassHelper.makeWithoutCaching(GroovyAstMakeFirst.GroovyTransform.ImmutableOptions, false);
	private static readonly MEMBER_KNOWN_IMMUTABLE_CLASSES: string = 'knownImmutableClasses';
	private static readonly MEMBER_KNOWN_IMMUTABLES: string = 'knownImmutables';
	/*
	 * Currently leaving BigInteger and BigDecimal in list but see:
	 * http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=6348370
	 *
	 * Also, Color is not final so while not normally used with child
	 * classes, it isn't strictly immutable. Use at your own risk.
	 *
	 * This list can be extended by providing "known immutable" classes
	 * via Immutable.knownImmutableClasses
	 */
	private static readonly BUILTIN_IMMUTABLES: Array<string> = [
		'boolean',
		'byte',
		'char',
		'double',
		'float',
		'int',
		'long',
		'short',
		'java.lang.Class',
		'java.lang.Boolean',
		'java.lang.Byte',
		'java.lang.Character',
		'java.lang.Double',
		'java.lang.Float',
		'java.lang.Integer',
		'java.lang.Long',
		'java.lang.Short',
		'java.lang.String',
		'java.math.BigInteger',
		'java.math.BigDecimal',
		'java.awt.Color',
		'java.net.URI',
		'java.util.UUID',
		'java.time.DayOfWeek',
		'java.time.Duration',
		'java.time.Instant',
		'java.time.LocalDate',
		'java.time.LocalDateTime',
		'java.time.LocalTime',
		'java.time.Month',
		'java.time.MonthDay',
		'java.time.OffsetDateTime',
		'java.time.OffsetTime',
		'java.time.Period',
		'java.time.Year',
		'java.time.YearMonth',
		'java.time.ZonedDateTime',
		'java.time.ZoneOffset',
		'java.time.ZoneRegion',
		'java.time.chrono.ChronoLocalDate',
		'java.time.chrono.ChronoLocalDateTime',
		'java.time.chrono.Chronology',
		'java.time.chrono.ChronoPeriod',
		'java.time.chrono.ChronoZonedDateTime',
		'java.time.chrono.Era',
		'java.time.format.DecimalStyle',
		'java.time.format.FormatStyle',
		'java.time.format.ResolverStyle',
		'java.time.format.SignStyle',
		'java.time.format.TextStyle',
		'java.time.temporal.IsoFields',
		'java.time.temporal.JulianFields',
		'java.time.temporal.ValueRange',
		'java.time.temporal.WeekFields',
		'java.io.File'
	];

	private static readonly BUILTIN_IMMUTABLE_ANNOTATIONS: Array<string> = [
		'groovy.transform.Immutable',
		'groovy.transform.KnownImmutable',
		//"javax.annotation.concurrent.Immutable", // its RetentionPolicy is CLASS, can not be got via reflection
		'net.jcip.annotations.Immutable' // supported by Findbugs and IntelliJ IDEA
	];

	private constructor() {
		// avoid extend
	}

	static cloneArrayOrCloneableExpr(fieldExpr: Expression, type: ClassNode): Expression {
		const smce = GeneralUtils.callX(ImmutablePropertyUtils.OBJECT_UTIL_TYPE, 'cloneObject', GeneralUtils.args(fieldExpr));
		return GeneralUtils.castX(type, smce);
	}

	static implementsCloneable(fieldType: ClassNode): boolean {
		return GeneralUtils.isOrImplements(fieldType, ImmutablePropertyUtils.CLONEABLE_TYPE);
	}

	static cloneDateExpr(origDate: Expression): Expression {
		return GeneralUtils.ctorX(ImmutablePropertyUtils.DATE_TYPE, GeneralUtils.callX(origDate, 'getTime'));
	}

	static derivesFromDate(fieldType: ClassNode): boolean {
		return fieldType.isDerivedFrom(ImmutablePropertyUtils.DATE_TYPE);
	}

	static createErrorMessage(className: string, fieldName: string, typeName: string, mode: string): string {
		return 'Unsupported type (' + ImmutablePropertyUtils.prettyTypeName(typeName) + ') found for field \'' + fieldName + '\' while ' + mode + ' immutable class ' + className + '.\n' +
			'Immutable classes only support properties with effectively immutable types including:\n' +
			'- Strings, primitive types, wrapper types, Class, BigInteger and BigDecimal, enums\n' +
			'- classes annotated with @KnownImmutable and known immutables (java.awt.Color, java.net.URI)\n' +
			'- Cloneable classes, collections, maps and arrays, and other classes with special handling\n' +
			'  (java.util.Date and various java.time.* classes and interfaces)\n' +
			'Other restrictions apply, please see the groovydoc for ' + ImmutablePropertyUtils.IMMUTABLE_OPTIONS_TYPE.nameWithoutPackage + ' for further details';
	}

	private static prettyTypeName(name: string): string {
		return name === 'java.lang.Object' ? name + ' or def' : name;
	}

	static isKnownImmutableType(fieldType: ClassNode, knownImmutableClasses: Array<string>): boolean {
		if (ImmutablePropertyUtils.builtinOrDeemedType(fieldType, knownImmutableClasses)) {
			return true;
		}
		if (!fieldType.isResolved)
			return false;
		if ('java.util.Optional' === fieldType.name && fieldType.genericsTypes != null && fieldType.genericsTypes.length == 1) {
			const optionalType = fieldType.genericsTypes[0];
			if (optionalType.isResolved && !optionalType.isPlaceholder && !optionalType.isWildcard) {
				const valueType = optionalType.type;
				if (ImmutablePropertyUtils.builtinOrDeemedType(valueType, knownImmutableClasses)) return true;
				if (valueType.isEnum) {
					return true;
				}
			}
		}
		return fieldType.isEnum || ClassHelper.isPrimitiveType(fieldType) || ImmutablePropertyUtils.hasImmutableAnnotation(fieldType);
	}

	private static builtinOrDeemedType(fieldType: ClassNode, knownImmutableClasses: Array<string>): boolean {
		return ImmutablePropertyUtils.isBuiltinImmutable(fieldType.name) || knownImmutableClasses.includes(fieldType.name) || ImmutablePropertyUtils.hasImmutableAnnotation(fieldType);
	}

	private static hasImmutableAnnotation(type: ClassNode | IClass): boolean {
		const annotations = type.annotations;
		for (const next of annotations) {
			const name = next instanceof AnnotationNode ? next.classNode.name : next.type.name;
			if (ImmutablePropertyUtils.matchingImmutableMarkerName(name)) {
				return true;
			}
		}
		return false;
	}

	private static matchingImmutableMarkerName(name: string): boolean {
		return ImmutablePropertyUtils.BUILTIN_IMMUTABLE_ANNOTATIONS.includes(name);
	}

	static isBuiltinImmutable(typeName: string): boolean {
		return ImmutablePropertyUtils.BUILTIN_IMMUTABLES.includes(typeName);
	}

	static builtinOrMarkedImmutableClass(clazz: IClass): boolean {
		return ImmutablePropertyUtils.isBuiltinImmutable(clazz.name) || ImmutablePropertyUtils.hasImmutableAnnotation(clazz);
	}

	static getKnownImmutables(xform: AbstractASTTransformation, cNode: ClassNode): Array<string> {
		const annotations = cNode.getAnnotations(ImmutablePropertyUtils.IMMUTABLE_OPTIONS_TYPE);
		const anno = annotations.length === 0 ? null : annotations[0];
		const immutables: Array<string> = [];
		if (anno == null) {
			return immutables;
		}

		const expression = anno.getMember(ImmutablePropertyUtils.MEMBER_KNOWN_IMMUTABLES);
		if (expression == null) {
			return immutables;
		}

		if (!(expression instanceof ListExpression)) {
			xform.addError('Use the Groovy list notation [el1, el2] to specify known immutable property names via "' + ImmutablePropertyUtils.MEMBER_KNOWN_IMMUTABLES + '"', anno);
			return immutables;
		}

		for (const listItemExpression of expression.expressions) {
			if (listItemExpression instanceof ConstantExpression) {
				immutables.push(listItemExpression.value);
			}
		}
		if (!xform.checkPropertyList(cNode, immutables, 'knownImmutables', anno, 'immutable class', false)) {
			return immutables;
		}

		return immutables;
	}

	static getKnownImmutableClasses(xform: AbstractASTTransformation, cNode: ClassNode): Array<string> {
		const annotations = cNode.getAnnotations(ImmutablePropertyUtils.IMMUTABLE_OPTIONS_TYPE);
		const anno = annotations.length === 0 ? null : annotations[0];
		const immutableClasses: Array<string> = [];
		if (anno == null) {
			return immutableClasses;
		}
		const expression = anno.getMember(ImmutablePropertyUtils.MEMBER_KNOWN_IMMUTABLE_CLASSES);
		if (expression == null) {
			return immutableClasses;
		}

		if (!(expression instanceof ListExpression)) {
			xform.addError('Use the Groovy list notation [el1, el2] to specify known immutable classes via "' + ImmutablePropertyUtils.MEMBER_KNOWN_IMMUTABLE_CLASSES + '"', anno);
			return immutableClasses;
		}

		for (const listItemExpression of expression.expressions) {
			if (listItemExpression instanceof ClassExpression) {
				immutableClasses.push(listItemExpression.type.name);
			}
		}

		return immutableClasses;
	}
}
