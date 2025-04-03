export enum AstChars {
	Whitespace = ' ',
	Tab = '\t',
	NewLine = '\n',
	CarriageReturn = '\r',
	WellNumberMark = '#',
	ExclamationMark = '!',
	SlashMark = '/',
	AsteriskMark = '*',
	Semicolon = ';',
	Colon = ':',
	Dot = '.',
	Comma = ',',
	LBrace = '{',
	RBrace = '}',
	LBrack = '[',
	RBrack = ']',
	LParen = '(',
	RParen = ')',
	// At = '@'
}

export enum AstOperators {
	Assign = '=',
	GreaterThan = '>',
	LessThan = '<',
	Not = '!',
	Bitnot = '~',
	Question = '?',
	Colon = ':',
	Equal = '==',
	LessThanOrEqual = '<=',
	GreaterThanOrEqual = '>=',
	NotEqual = '!=',
	And = '&&',
	Or = '||',
	Increase = '++',
	Decrease = '--',
	Add = '+',
	Subtract = '-',
	Multiple = '*',
	Divide = '/',
	Bitand = '&',
	Bitor = '|',
	Xor = '^',
	Mod = '%',
	AddAssign = '+=',
	SubtractAssign = '-=',
	MultipleAssign = '*=',
	DivideAssign = '/=',
	AndAssign = '&=',
	OrAssign = '|=',
	XorAssign = '^=',
	ModAssign = '%=',
	LshiftAssign = '<<=',
	RshiftAssign = '>>=',
	UrshiftAssign = '>>>=',
	ElvisAssign = '?=',
	Ellipsis = '...',
	// groovy
	RangeInclusive = '..',
	RangeExclusiveLeft = '<..',
	RangeExclusiveRight = '..<',
	RangeExclusiveFull = '<..<',
	SpreadDot = '*.',
	SafeDot = '?.',
	SafeIndex = '?[',
	SafeIndexClose = ']',
	SafeChainDot = '??.',
	Elvis = '?:',
	MethodPointer = '.&',
	MethodReference = '::',
	RegexFind = '=~',
	RegexMatch = '==~',
	Power = '**',
	PowerAssign = '**=',
	Spaceship = '<=>',
	Identical = '===',
	NotIdentical = '!==',
	Arrow = '->',
	NotInstanceOf = '!instanceof',
	NotIn = '!in'
}

export enum AstMarks {
	CarriageReturnNewLine = '\r\n',
	ScriptCommandStartMark = '#!',
	SLCommentStartMark = '//',
	MLCommentStartMark = '/*',
	MLCommentEndMark = '*/',
}

export enum AstKeywords {
	Package = 'package',
	Import = 'import',
	Static = 'static',
	As = 'as',
	Public = 'public',
	Protected = 'protected',
	Private = 'private',
	Abstract = 'abstract',
	Final = 'final',
	Strictfp = 'strictfp',
	Record = 'record',
	Sealed = 'sealed',
	Permits = 'permits',
	NonSealed = 'non-sealed',
	Interface = 'interface',
	Class = 'class',
	AtInterface = '@interface',
	Enum = 'enum',
	Trait = 'trait',
	Extends = 'extends',
	Implements = 'implements',
	Default = 'default',
	Synchronized = 'synchronized',
	Transient = 'transient',
	Volatile = 'volatile',
	Native = 'native',
	Def = 'def',
	Var = 'var',
	Const = 'const',
	Goto = 'goto'
}

// The following code is copied from the JDK and moderately modified while maintaining the original logic.
export interface CharacterData {
	isIdentifierIgnorable(codePoint: number): boolean;
	isJavaIdentifierStart(codePoint: number): boolean;
	isJavaIdentifierPart(codePoint: number): boolean;
}

abstract class AbstractCharacterData implements CharacterData {
	/** same as java {@code (char) value}, value is an int value */
	javaCastToChar(codePoint: number): number {
		return codePoint & 0xFFFF;
	}

	/** default return false */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	isIdentifierIgnorable(_codePoint: number): boolean {
		return false;
	}

	/** default return false */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	isJavaIdentifierPart(_codePoint: number): boolean {
		return false;
	}

	/** default return false */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	isJavaIdentifierStart(_codePoint: number): boolean {
		return false;
	}
}

abstract class AbstractCheckableCharacterData extends AbstractCharacterData {
	protected abstract getProperties(codePoint: number): number;

	isIdentifierIgnorable(codePoint: number): boolean {
		return ((this.getProperties(codePoint) & 0x00007000) === 0x00001000);
	}

	isJavaIdentifierPart(codePoint: number): boolean {
		return ((this.getProperties(codePoint) & 0x00003000) !== 0);
	}

	isJavaIdentifierStart(codePoint: number): boolean {
		return ((this.getProperties(codePoint) & 0x00007000) >= 0x00005000);
	}
}

class CharacterDataLatin1 extends AbstractCheckableCharacterData {
	static instance = new CharacterDataLatin1();

	protected static A: Array<number> = [
		0x4800100F,  //   0   Cc, ignorable
		0x4800100F,  //   1   Cc, ignorable
		0x4800100F,  //   2   Cc, ignorable
		0x4800100F,  //   3   Cc, ignorable
		0x4800100F,  //   4   Cc, ignorable
		0x4800100F,  //   5   Cc, ignorable
		0x4800100F,  //   6   Cc, ignorable
		0x4800100F,  //   7   Cc, ignorable
		0x4800100F,  //   8   Cc, ignorable
		0x5800400F,  //   9   Cc, S, whitespace
		0x5000400F,  //  10   Cc, B, whitespace
		0x5800400F,  //  11   Cc, S, whitespace
		0x6000400F,  //  12   Cc, WS, whitespace
		0x5000400F,  //  13   Cc, B, whitespace
		0x4800100F,  //  14   Cc, ignorable
		0x4800100F,  //  15   Cc, ignorable
		0x4800100F,  //  16   Cc, ignorable
		0x4800100F,  //  17   Cc, ignorable
		0x4800100F,  //  18   Cc, ignorable
		0x4800100F,  //  19   Cc, ignorable
		0x4800100F,  //  20   Cc, ignorable
		0x4800100F,  //  21   Cc, ignorable
		0x4800100F,  //  22   Cc, ignorable
		0x4800100F,  //  23   Cc, ignorable
		0x4800100F,  //  24   Cc, ignorable
		0x4800100F,  //  25   Cc, ignorable
		0x4800100F,  //  26   Cc, ignorable
		0x4800100F,  //  27   Cc, ignorable
		0x5000400F,  //  28   Cc, B, whitespace
		0x5000400F,  //  29   Cc, B, whitespace
		0x5000400F,  //  30   Cc, B, whitespace
		0x5800400F,  //  31   Cc, S, whitespace
		0x6000400C,  //  32   Zs, WS, whitespace
		0x68000018,  //  33   Po, ON
		0x68000018,  //  34   Po, ON
		0x28000018,  //  35   Po, ET
		0x2800601A,  //  36   Sc, ET, currency
		0x28000018,  //  37   Po, ET
		0x68000018,  //  38   Po, ON
		0x68000018,  //  39   Po, ON
		-0x17FFFFEB,  //  40   No, hasUpper (subtract 511), hasLower (add 511), hasTitle, identifier start, supradecimal 31
		-0x17FFFFEA,  //  41   Nl, hasUpper (subtract 511), hasLower (add 511), hasTitle, identifier start, supradecimal 31
		0x68000018,  //  42   Po, ON
		0x20000019,  //  43   Sm, ES
		0x38000018,  //  44   Po, CS
		0x20000014,  //  45   Pd, ES
		0x38000018,  //  46   Po, CS
		0x38000018,  //  47   Po, CS
		0x18003609,  //  48   Nd, EN, identifier part, decimal 16
		0x18003609,  //  49   Nd, EN, identifier part, decimal 16
		0x18003609,  //  50   Nd, EN, identifier part, decimal 16
		0x18003609,  //  51   Nd, EN, identifier part, decimal 16
		0x18003609,  //  52   Nd, EN, identifier part, decimal 16
		0x18003609,  //  53   Nd, EN, identifier part, decimal 16
		0x18003609,  //  54   Nd, EN, identifier part, decimal 16
		0x18003609,  //  55   Nd, EN, identifier part, decimal 16
		0x18003609,  //  56   Nd, EN, identifier part, decimal 16
		0x18003609,  //  57   Nd, EN, identifier part, decimal 16
		0x38000018,  //  58   Po, CS
		0x68000018,  //  59   Po, ON
		-0x17FFFFE7,  //  60   Me, hasUpper (subtract 511), hasLower (add 511), hasTitle, identifier start, supradecimal 31
		0x68000019,  //  61   Sm, ON
		-0x17FFFFE7,  //  62   Me, hasUpper (subtract 511), hasLower (add 511), hasTitle, identifier start, supradecimal 31
		0x68000018,  //  63   Po, ON
		0x68000018,  //  64   Po, ON
		0x00827FE1,  //  65   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  66   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  67   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  68   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  69   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  70   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  71   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  72   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  73   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  74   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  75   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  76   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  77   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  78   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  79   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  80   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  81   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  82   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  83   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  84   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  85   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  86   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  87   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  88   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  89   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		0x00827FE1,  //  90   Lu, L, hasLower (add 32), identifier start, supradecimal 31
		-0x17FFFFEB,  //  91   No, hasUpper (subtract 511), hasLower (add 511), hasTitle, identifier start, supradecimal 31
		0x68000018,  //  92   Po, ON
		-0x17FFFFEA,  //  93   Nl, hasUpper (subtract 511), hasLower (add 511), hasTitle, identifier start, supradecimal 31
		0x6800001B,  //  94   Sk, ON
		0x68005017,  //  95   Pc, ON, underscore
		0x6800001B,  //  96   Sk, ON
		0x00817FE2,  //  97   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  //  98   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  //  99   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 100   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 101   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 102   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 103   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 104   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 105   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 106   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 107   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 108   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 109   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 110   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 111   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 112   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 113   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 114   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 115   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 116   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 117   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 118   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 119   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 120   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 121   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		0x00817FE2,  // 122   Ll, L, hasUpper (subtract 32), identifier start, supradecimal 31
		-0x17FFFFEB,  // 123   No, hasUpper (subtract 511), hasLower (add 511), hasTitle, identifier start, supradecimal 31
		0x68000019,  // 124   Sm, ON
		-0x17FFFFEA,  // 125   Nl, hasUpper (subtract 511), hasLower (add 511), hasTitle, identifier start, supradecimal 31
		0x68000019,  // 126   Sm, ON
		0x4800100F,  // 127   Cc, ignorable
		0x4800100F,  // 128   Cc, ignorable
		0x4800100F,  // 129   Cc, ignorable
		0x4800100F,  // 130   Cc, ignorable
		0x4800100F,  // 131   Cc, ignorable
		0x4800100F,  // 132   Cc, ignorable
		0x5000100F,  // 133   Cc, B, ignorable
		0x4800100F,  // 134   Cc, ignorable
		0x4800100F,  // 135   Cc, ignorable
		0x4800100F,  // 136   Cc, ignorable
		0x4800100F,  // 137   Cc, ignorable
		0x4800100F,  // 138   Cc, ignorable
		0x4800100F,  // 139   Cc, ignorable
		0x4800100F,  // 140   Cc, ignorable
		0x4800100F,  // 141   Cc, ignorable
		0x4800100F,  // 142   Cc, ignorable
		0x4800100F,  // 143   Cc, ignorable
		0x4800100F,  // 144   Cc, ignorable
		0x4800100F,  // 145   Cc, ignorable
		0x4800100F,  // 146   Cc, ignorable
		0x4800100F,  // 147   Cc, ignorable
		0x4800100F,  // 148   Cc, ignorable
		0x4800100F,  // 149   Cc, ignorable
		0x4800100F,  // 150   Cc, ignorable
		0x4800100F,  // 151   Cc, ignorable
		0x4800100F,  // 152   Cc, ignorable
		0x4800100F,  // 153   Cc, ignorable
		0x4800100F,  // 154   Cc, ignorable
		0x4800100F,  // 155   Cc, ignorable
		0x4800100F,  // 156   Cc, ignorable
		0x4800100F,  // 157   Cc, ignorable
		0x4800100F,  // 158   Cc, ignorable
		0x4800100F,  // 159   Cc, ignorable
		0x3800000C,  // 160   Zs, CS
		0x68000018,  // 161   Po, ON
		0x2800601A,  // 162   Sc, ET, currency
		0x2800601A,  // 163   Sc, ET, currency
		0x2800601A,  // 164   Sc, ET, currency
		0x2800601A,  // 165   Sc, ET, currency
		0x6800001C,  // 166   So, ON
		0x68000018,  // 167   Po, ON
		0x6800001B,  // 168   Sk, ON
		0x6800001C,  // 169   So, ON
		-0xFFFF8FFB,  // 170   Sk, hasUpper (subtract 511), hasLower (add 511), hasTitle, supradecimal 31
		-0x17FFFFE3,  // 171   Lt, hasUpper (subtract 511), hasLower (add 511), hasTitle, identifier start, supradecimal 31
		0x68000019,  // 172   Sm, ON
		0x48001010,  // 173   Cf, ignorable
		0x6800001C,  // 174   So, ON
		0x6800001B,  // 175   Sk, ON
		0x2800001C,  // 176   So, ET
		0x28000019,  // 177   Sm, ET
		0x1800060B,  // 178   No, EN, decimal 16
		0x1800060B,  // 179   No, EN, decimal 16
		0x6800001B,  // 180   Sk, ON
		0x07FD7002,  // 181   Ll, L, hasUpper (subtract 511), identifier start
		0x68000018,  // 182   Po, ON
		0x68000018,  // 183   Po, ON
		0x6800001B,  // 184   Sk, ON
		0x1800050B,  // 185   No, EN, decimal 8
		-0xFFFF8FFB,  // 186   Sk, hasUpper (subtract 511), hasLower (add 511), hasTitle, supradecimal 31
		-0x17FFFFE2,  // 187   Ll, hasUpper (subtract 511), hasLower (add 511), hasTitle, identifier start, supradecimal 31
		0x6800080B,  // 188   No, ON, strange
		0x6800080B,  // 189   No, ON, strange
		0x6800080B,  // 190   No, ON, strange
		0x68000018,  // 191   Po, ON
		0x00827001,  // 192   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 193   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 194   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 195   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 196   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 197   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 198   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 199   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 200   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 201   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 202   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 203   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 204   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 205   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 206   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 207   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 208   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 209   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 210   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 211   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 212   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 213   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 214   Lu, L, hasLower (add 32), identifier start
		0x68000019,  // 215   Sm, ON
		0x00827001,  // 216   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 217   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 218   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 219   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 220   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 221   Lu, L, hasLower (add 32), identifier start
		0x00827001,  // 222   Lu, L, hasLower (add 32), identifier start
		0x07FD7002,  // 223   Ll, L, hasUpper (subtract 511), identifier start
		0x00817002,  // 224   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 225   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 226   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 227   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 228   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 229   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 230   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 231   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 232   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 233   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 234   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 235   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 236   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 237   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 238   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 239   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 240   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 241   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 242   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 243   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 244   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 245   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 246   Ll, L, hasUpper (subtract 32), identifier start
		0x68000019,  // 247   Sm, ON
		0x00817002,  // 248   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 249   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 250   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 251   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 252   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 253   Ll, L, hasUpper (subtract 32), identifier start
		0x00817002,  // 254   Ll, L, hasUpper (subtract 32), identifier start
		0x061D7002   // 255   Ll, L, hasUpper (subtract 391), identifier start
	];

	protected getProperties(codePoint: number): number {
		return CharacterDataLatin1.A[this.javaCastToChar(codePoint)];
	}
}

// the X, Y and A values are copied from results of following java code:
// List.of(
// 	"java.lang.CharacterData00",
// 	"java.lang.CharacterData01",
// 	"java.lang.CharacterData02",
// 	"java.lang.CharacterData0E"
// ).stream().forEach(className -> {
// 	try {//1207963663, 18432, 4111
// 		Class cls = Class.forName(className);
// 		System.out.println(cls.getSimpleName());
// 		Field f = cls.getDeclaredField("X");
// 		f.setAccessible(true);
// 		char[] xValue = (char[]) f.get(null);
// 		int[] xIntValue = new int[xValue.length];
// 		for (int i = 0; i < xValue.length; i++) {
// 			xIntValue[i] = xValue[i];
// 		}
// 		System.out.println("static X: Readonly<Array<number>> = " + Arrays.toString(xIntValue) + ";");
// 		f = cls.getDeclaredField("Y");
// 		f.setAccessible(true);
// 		char[] yValue = (char[]) f.get(null);
// 		int[] yIntValue = new int[yValue.length];
// 		for (int i = 0; i < yValue.length; i++) {
// 			yIntValue[i] = yValue[i];
// 		}
// 		System.out.println("static Y: Readonly<Array<number>> = " + Arrays.toString(yIntValue) + ";");
// 		f = cls.getDeclaredField("A");
// 		f.setAccessible(true);
// 		int[] aValue = (int[]) f.get(null);
// 		System.out.println("static A: Readonly<Array<number>> = " + Arrays.toString(aValue) + ";");
// 	} catch (ClassNotFoundException e) {
// 		throw new RuntimeException(e);
// 	} catch (NoSuchFieldException e) {
// 		throw new RuntimeException(e);
// 	} catch (IllegalAccessException e) {
// 		throw new RuntimeException(e);
// 	}
// });

class CharacterData00 extends AbstractCheckableCharacterData {
	static instance = new CharacterData00();

	static X: Readonly<Array<number>> = [0, 16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 128, 256, 272, 288, 304, 320, 336, 352, 368, 368, 384, 400, 416, 432, 448, 464, 480, 496, 512, 128, 528, 128, 544, 128, 128, 560, 576, 592, 608, 624, 640, 656, 672, 688, 704, 720, 688, 688, 736, 752, 768, 784, 800, 688, 688, 816, 832, 848, 864, 880, 896, 912, 928, 944, 960, 976, 992, 1008, 1024, 1040, 1056, 1072, 1088, 1104, 1120, 1136, 1152, 1168, 1184, 1200, 1216, 1232, 1248, 1264, 1280, 1296, 1312, 1328, 1344, 1360, 1376, 1392, 1408, 1424, 1440, 1456, 1472, 1488, 1504, 1520, 1536, 1552, 1568, 1584, 1600, 1616, 1632, 1648, 1664, 928, 1680, 1696, 1712, 928, 1728, 1744, 1760, 1776, 1792, 1808, 1824, 928, 1840, 1856, 1872, 1888, 1904, 1920, 1936, 1952, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1968, 1840, 1984, 2000, 2016, 1840, 2032, 1840, 2048, 2064, 2080, 1920, 1920, 2096, 2112, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 2128, 2144, 1840, 1840, 2160, 2176, 2192, 2208, 2224, 1840, 2240, 2256, 2272, 2288, 1840, 2304, 2320, 2336, 2352, 1840, 2368, 2384, 2400, 2416, 2432, 1840, 2448, 2464, 2480, 2496, 1840, 2512, 2528, 2544, 2560, 928, 928, 2576, 2592, 2608, 2624, 2640, 2656, 1840, 2672, 1840, 2688, 2704, 2720, 2736, 928, 2752, 2768, 2784, 2800, 2816, 2832, 2848, 2816, 368, 2864, 128, 128, 128, 128, 2880, 128, 128, 128, 2896, 2912, 2928, 2944, 2960, 2976, 2992, 3008, 3024, 3040, 3056, 3072, 3088, 3104, 3120, 3136, 3152, 3168, 3184, 3200, 3216, 3232, 3248, 3264, 3280, 3296, 3312, 3328, 3344, 3360, 3376, 3392, 3408, 3424, 3440, 3456, 3472, 3488, 3504, 3520, 2480, 3536, 3552, 3568, 3584, 3600, 3616, 3632, 2480, 2480, 2480, 2480, 2480, 3648, 3664, 3680, 2480, 2480, 2480, 3696, 2480, 3712, 2480, 2480, 2480, 2480, 2480, 3728, 3744, 2480, 3760, 3776, 3440, 3440, 3440, 3440, 3440, 3440, 3440, 3440, 3792, 3792, 3792, 3792, 3808, 3824, 3840, 3856, 3872, 3888, 3904, 3920, 3936, 3952, 3968, 3984, 2480, 4000, 4016, 4032, 4048, 4064, 4080, 4096, 4112, 4128, 4144, 4160, 128, 128, 128, 4176, 4192, 4208, 1840, 4224, 4240, 4256, 4256, 4272, 4288, 4304, 4320, 928, 4336, 2480, 2480, 4352, 2480, 2480, 2480, 2480, 2480, 2480, 4368, 4384, 4400, 4416, 1632, 1840, 4432, 2112, 1840, 4448, 4464, 4480, 1840, 1840, 4496, 4512, 2480, 4528, 4544, 4560, 4576, 4592, 4560, 4608, 4624, 3440, 3440, 3440, 3440, 4640, 3440, 3440, 4656, 4672, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4704, 2480, 2480, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4688, 4720, 4736, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 4752, 2480, 4768, 2720, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 4784, 4800, 128, 4816, 4832, 1840, 1840, 4848, 4864, 4880, 128, 4896, 4912, 4928, 928, 4944, 4960, 4976, 1840, 4992, 5008, 5024, 5040, 5056, 5072, 5088, 5104, 5120, 992, 5136, 5152, 5168, 1840, 5184, 5200, 5216, 1840, 5232, 5248, 5264, 5280, 5296, 5312, 5328, 4192, 4192, 1840, 5344, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 5360, 5376, 5392, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5408, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 5424, 4688, 4688, 4688, 5440, 4688, 5456, 5472, 5488, 4688, 4688, 4688, 5504, 4688, 4688, 5520, 928, 5536, 5552, 5568, 688, 688, 5584, 5600, 688, 688, 688, 688, 688, 688, 688, 688, 688, 688, 5616, 5632, 688, 5648, 688, 5664, 5680, 5696, 5712, 5728, 5744, 688, 688, 688, 5760, 5776, 32, 5792, 5808, 5824, 2384, 5840, 5856];
	static Y: Readonly<Array<number>> = [0, 0, 0, 0, 2, 4, 6, 0, 0, 0, 0, 0, 0, 0, 8, 4, 10, 12, 14, 16, 18, 20, 22, 24, 26, 26, 26, 26, 26, 28, 30, 32, 34, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 38, 40, 42, 44, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 48, 50, 52, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 58, 58, 60, 62, 64, 66, 68, 70, 72, 74, 16, 76, 78, 80, 82, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 86, 84, 84, 84, 88, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 92, 90, 90, 90, 94, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 98, 96, 96, 96, 100, 102, 102, 102, 102, 102, 102, 102, 104, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 106, 102, 102, 104, 108, 96, 96, 110, 112, 114, 116, 118, 120, 112, 122, 124, 96, 126, 128, 130, 96, 96, 96, 132, 134, 136, 96, 132, 138, 140, 102, 142, 96, 144, 96, 146, 148, 148, 150, 152, 154, 150, 156, 102, 102, 102, 102, 102, 102, 102, 158, 96, 96, 96, 96, 96, 96, 96, 96, 96, 160, 154, 96, 162, 96, 96, 96, 96, 164, 96, 96, 96, 96, 96, 96, 96, 96, 96, 136, 136, 136, 166, 168, 170, 172, 174, 176, 96, 96, 96, 96, 96, 178, 180, 182, 184, 186, 188, 190, 136, 192, 194, 196, 190, 198, 178, 190, 200, 196, 202, 204, 136, 136, 136, 196, 136, 206, 208, 136, 196, 210, 212, 214, 136, 136, 216, 218, 136, 136, 136, 196, 190, 136, 136, 136, 136, 136, 136, 136, 136, 220, 220, 220, 220, 222, 224, 226, 226, 220, 228, 228, 230, 230, 230, 230, 230, 226, 228, 228, 228, 228, 228, 228, 228, 220, 220, 232, 228, 228, 228, 234, 236, 228, 228, 228, 228, 228, 228, 228, 228, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 240, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 96, 96, 234, 96, 242, 244, 246, 248, 242, 242, 228, 250, 252, 254, 256, 258, 260, 84, 84, 84, 84, 84, 84, 84, 84, 262, 84, 84, 84, 84, 264, 266, 268, 90, 90, 90, 90, 90, 90, 90, 90, 270, 90, 90, 90, 90, 272, 274, 276, 278, 280, 282, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 284, 286, 288, 290, 292, 96, 294, 296, 298, 298, 298, 298, 298, 298, 298, 298, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 84, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 300, 300, 300, 300, 300, 300, 300, 300, 96, 302, 238, 238, 304, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 306, 102, 102, 102, 102, 102, 102, 308, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 310, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 314, 316, 318, 318, 318, 320, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 324, 326, 328, 330, 332, 334, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 238, 336, 336, 336, 336, 336, 336, 336, 338, 340, 342, 336, 340, 242, 242, 242, 242, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 346, 242, 242, 344, 348, 350, 242, 242, 242, 242, 242, 352, 352, 352, 354, 356, 358, 360, 362, 336, 336, 336, 336, 336, 364, 366, 368, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 372, 370, 370, 370, 370, 374, 336, 336, 336, 336, 336, 336, 376, 336, 336, 336, 378, 378, 378, 378, 378, 380, 382, 370, 384, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 386, 336, 336, 336, 388, 390, 376, 336, 392, 394, 396, 238, 376, 370, 26, 26, 26, 26, 26, 370, 398, 400, 368, 368, 368, 368, 368, 368, 368, 402, 374, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 336, 336, 336, 336, 336, 336, 336, 336, 238, 238, 238, 238, 238, 404, 406, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 336, 336, 336, 336, 336, 384, 242, 242, 242, 242, 242, 242, 242, 408, 408, 408, 408, 408, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 410, 238, 238, 238, 238, 412, 60, 16, 414, 242, 242, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 336, 238, 416, 336, 336, 336, 336, 416, 336, 416, 336, 418, 242, 420, 420, 420, 420, 420, 420, 420, 350, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 344, 410, 238, 242, 350, 370, 370, 370, 370, 370, 422, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 422, 370, 370, 370, 370, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 336, 336, 336, 336, 336, 336, 238, 424, 336, 336, 336, 238, 238, 238, 336, 336, 336, 336, 336, 336, 336, 336, 336, 426, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 426, 428, 430, 432, 336, 336, 336, 426, 430, 434, 430, 436, 238, 376, 336, 148, 148, 148, 148, 148, 336, 318, 438, 438, 438, 438, 438, 440, 148, 148, 148, 148, 148, 148, 148, 442, 430, 444, 148, 148, 148, 446, 444, 446, 444, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 148, 148, 148, 446, 446, 242, 148, 148, 242, 428, 430, 432, 336, 448, 450, 452, 450, 434, 446, 242, 242, 242, 450, 242, 242, 148, 444, 148, 336, 242, 438, 438, 438, 438, 438, 148, 58, 454, 454, 456, 458, 460, 242, 462, 426, 444, 148, 148, 446, 242, 444, 446, 444, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 148, 148, 148, 446, 148, 444, 446, 148, 242, 404, 430, 432, 448, 242, 462, 448, 462, 418, 242, 462, 242, 242, 242, 444, 148, 446, 446, 242, 242, 242, 438, 438, 438, 438, 438, 336, 148, 442, 242, 242, 242, 242, 242, 462, 426, 444, 148, 148, 148, 148, 444, 148, 444, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 148, 148, 148, 446, 148, 444, 148, 148, 242, 428, 430, 432, 336, 336, 462, 426, 450, 434, 242, 446, 242, 242, 242, 242, 242, 242, 242, 148, 336, 242, 438, 438, 438, 438, 438, 464, 242, 242, 242, 444, 336, 418, 238, 462, 430, 444, 148, 148, 148, 446, 444, 446, 444, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 148, 148, 148, 446, 148, 444, 148, 148, 242, 428, 432, 432, 336, 448, 450, 452, 450, 434, 242, 242, 242, 242, 426, 242, 242, 148, 444, 148, 336, 242, 438, 438, 438, 438, 438, 466, 454, 454, 454, 242, 242, 242, 242, 242, 468, 444, 148, 148, 446, 242, 148, 446, 148, 148, 242, 444, 446, 446, 148, 242, 444, 446, 242, 148, 446, 242, 148, 148, 148, 148, 148, 148, 242, 242, 430, 426, 452, 242, 430, 452, 430, 434, 242, 446, 242, 242, 450, 242, 242, 242, 242, 242, 242, 242, 438, 438, 438, 438, 438, 470, 472, 362, 362, 332, 474, 242, 242, 426, 430, 444, 148, 148, 148, 446, 148, 446, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 148, 148, 148, 148, 148, 148, 148, 148, 242, 444, 336, 426, 430, 452, 336, 448, 336, 418, 242, 242, 242, 462, 448, 148, 446, 242, 242, 148, 336, 242, 438, 438, 438, 438, 438, 242, 242, 242, 242, 476, 476, 478, 480, 442, 430, 444, 148, 148, 148, 446, 148, 446, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 148, 148, 148, 148, 148, 444, 148, 148, 242, 428, 482, 430, 430, 452, 484, 452, 430, 418, 242, 242, 242, 450, 452, 242, 242, 242, 446, 148, 336, 242, 438, 438, 438, 438, 438, 444, 446, 242, 242, 242, 242, 242, 242, 336, 430, 444, 148, 148, 148, 446, 148, 446, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 436, 428, 430, 432, 336, 448, 430, 452, 430, 434, 486, 242, 242, 148, 488, 454, 454, 454, 490, 148, 336, 242, 438, 438, 438, 438, 438, 470, 454, 454, 454, 492, 148, 148, 148, 242, 430, 444, 148, 148, 148, 148, 148, 148, 148, 148, 446, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 444, 148, 148, 148, 148, 444, 242, 148, 148, 148, 446, 242, 404, 242, 450, 430, 336, 448, 448, 430, 430, 430, 430, 242, 242, 242, 438, 438, 438, 438, 438, 242, 430, 494, 242, 242, 242, 242, 242, 444, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 442, 148, 336, 336, 336, 448, 242, 496, 148, 148, 148, 498, 238, 238, 376, 500, 502, 502, 502, 502, 502, 318, 242, 242, 444, 446, 446, 444, 446, 446, 444, 242, 242, 242, 148, 148, 444, 148, 148, 148, 444, 148, 444, 444, 242, 148, 444, 148, 442, 148, 336, 336, 336, 462, 468, 242, 148, 148, 446, 504, 238, 238, 376, 242, 502, 502, 502, 502, 502, 242, 148, 148, 486, 506, 318, 318, 318, 318, 318, 318, 318, 508, 508, 506, 238, 506, 506, 506, 510, 510, 510, 510, 510, 454, 454, 454, 454, 454, 302, 302, 302, 18, 18, 512, 148, 148, 148, 148, 444, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 242, 462, 336, 336, 336, 336, 336, 336, 426, 336, 238, 500, 238, 148, 148, 442, 336, 336, 336, 336, 336, 462, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 448, 506, 506, 506, 506, 514, 506, 506, 516, 506, 318, 318, 508, 506, 518, 494, 242, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 488, 432, 336, 426, 336, 336, 418, 434, 520, 432, 468, 510, 510, 510, 510, 510, 318, 318, 318, 148, 148, 148, 430, 336, 148, 148, 336, 468, 522, 524, 488, 522, 512, 512, 148, 442, 336, 468, 148, 148, 148, 148, 148, 148, 426, 432, 526, 512, 512, 528, 530, 502, 502, 502, 502, 502, 512, 432, 506, 532, 532, 532, 532, 532, 532, 532, 532, 532, 532, 532, 532, 532, 532, 532, 532, 532, 532, 532, 534, 242, 242, 534, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 460, 536, 148, 148, 148, 148, 148, 446, 148, 148, 242, 148, 148, 148, 446, 446, 148, 148, 242, 148, 148, 148, 148, 446, 148, 148, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 148, 148, 242, 148, 148, 148, 446, 446, 148, 148, 242, 148, 148, 148, 148, 148, 148, 148, 446, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 148, 148, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 334, 376, 318, 318, 318, 318, 538, 540, 540, 540, 540, 542, 544, 454, 454, 454, 546, 242, 148, 148, 148, 148, 148, 148, 148, 148, 362, 362, 362, 362, 362, 242, 242, 242, 532, 532, 532, 532, 532, 532, 532, 532, 548, 548, 548, 242, 550, 550, 550, 242, 552, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 460, 554, 148, 148, 148, 148, 148, 148, 148, 148, 556, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 558, 560, 242, 148, 148, 148, 148, 148, 460, 318, 562, 564, 148, 148, 148, 446, 242, 242, 242, 148, 148, 148, 148, 148, 148, 446, 148, 148, 336, 404, 242, 242, 242, 242, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 336, 500, 494, 242, 242, 242, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 336, 242, 242, 242, 242, 242, 242, 148, 148, 148, 148, 148, 148, 446, 148, 446, 336, 242, 242, 242, 242, 242, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 238, 432, 336, 336, 336, 430, 430, 430, 430, 426, 434, 238, 238, 238, 238, 238, 318, 440, 318, 464, 436, 242, 510, 510, 510, 510, 510, 242, 242, 242, 566, 566, 566, 566, 566, 242, 242, 242, 16, 16, 16, 568, 16, 570, 238, 572, 502, 502, 502, 502, 502, 242, 242, 242, 148, 574, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 242, 242, 242, 242, 148, 148, 442, 468, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 442, 446, 242, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 242, 242, 242, 242, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 336, 426, 430, 432, 426, 430, 242, 242, 430, 426, 430, 430, 434, 238, 242, 242, 474, 242, 16, 438, 438, 438, 438, 438, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 242, 148, 148, 446, 242, 242, 242, 242, 242, 148, 148, 148, 148, 148, 148, 242, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 242, 242, 242, 502, 502, 502, 502, 502, 576, 242, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 442, 426, 432, 242, 318, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 488, 426, 336, 336, 336, 448, 520, 426, 432, 336, 336, 336, 426, 430, 430, 432, 418, 238, 238, 238, 404, 334, 510, 510, 510, 510, 510, 242, 242, 242, 502, 502, 502, 502, 502, 242, 242, 242, 318, 318, 318, 440, 318, 318, 318, 242, 238, 238, 238, 238, 238, 238, 238, 578, 336, 336, 580, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 520, 336, 336, 426, 426, 430, 430, 426, 524, 148, 148, 148, 242, 242, 502, 502, 502, 502, 502, 318, 318, 318, 508, 506, 506, 506, 506, 302, 238, 238, 238, 238, 506, 506, 506, 506, 516, 242, 336, 580, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 488, 336, 336, 430, 336, 528, 336, 148, 502, 502, 502, 502, 502, 148, 148, 148, 148, 148, 148, 520, 336, 430, 432, 432, 336, 512, 242, 242, 242, 242, 318, 318, 148, 148, 430, 430, 430, 430, 336, 336, 336, 336, 430, 238, 242, 326, 318, 318, 510, 510, 510, 510, 510, 242, 444, 148, 502, 502, 502, 502, 502, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 226, 226, 226, 318, 178, 178, 178, 178, 582, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 318, 318, 318, 318, 242, 242, 242, 242, 238, 500, 238, 238, 238, 238, 238, 238, 584, 238, 238, 238, 428, 148, 436, 148, 148, 430, 428, 530, 238, 242, 242, 242, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 586, 136, 136, 136, 136, 136, 136, 588, 136, 196, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 590, 220, 220, 238, 238, 238, 376, 336, 336, 336, 336, 336, 336, 418, 238, 238, 334, 238, 238, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 178, 178, 592, 136, 594, 596, 596, 596, 596, 598, 598, 598, 598, 596, 596, 596, 242, 598, 598, 598, 242, 596, 596, 596, 596, 598, 598, 598, 598, 596, 596, 596, 596, 598, 598, 598, 598, 596, 596, 596, 242, 598, 598, 598, 242, 600, 600, 600, 600, 602, 602, 602, 602, 596, 596, 596, 596, 598, 598, 598, 598, 604, 606, 606, 608, 610, 612, 614, 242, 178, 178, 178, 178, 616, 616, 616, 616, 178, 178, 178, 178, 616, 616, 616, 616, 178, 178, 178, 178, 616, 616, 616, 616, 596, 178, 582, 178, 598, 618, 620, 622, 228, 178, 582, 178, 624, 624, 620, 228, 596, 178, 242, 178, 598, 626, 628, 228, 596, 178, 630, 178, 598, 632, 634, 228, 242, 178, 582, 178, 636, 638, 620, 640, 642, 642, 642, 644, 642, 646, 648, 650, 652, 652, 652, 16, 654, 656, 654, 656, 16, 16, 16, 16, 658, 660, 660, 662, 664, 664, 666, 16, 668, 670, 16, 672, 674, 16, 676, 678, 16, 16, 16, 16, 16, 680, 674, 16, 16, 16, 16, 682, 648, 648, 572, 660, 660, 648, 648, 648, 684, 242, 72, 72, 72, 686, 688, 690, 692, 692, 692, 692, 692, 686, 688, 560, 220, 220, 220, 220, 220, 220, 694, 242, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 242, 242, 242, 242, 242, 242, 242, 242, 238, 238, 238, 238, 238, 238, 696, 304, 698, 304, 698, 238, 238, 238, 238, 238, 404, 242, 242, 242, 242, 242, 242, 242, 362, 700, 362, 702, 362, 704, 278, 136, 278, 706, 702, 362, 708, 278, 278, 362, 362, 362, 700, 710, 700, 532, 278, 712, 278, 714, 144, 148, 218, 362, 136, 278, 30, 354, 708, 136, 136, 716, 362, 718, 80, 80, 80, 80, 80, 80, 80, 80, 720, 720, 720, 720, 720, 720, 722, 722, 724, 724, 724, 724, 724, 724, 726, 726, 728, 730, 732, 728, 734, 362, 242, 242, 354, 354, 736, 362, 362, 354, 362, 362, 736, 716, 362, 736, 362, 362, 362, 736, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 354, 362, 736, 736, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 354, 354, 354, 354, 354, 354, 738, 740, 30, 354, 740, 740, 740, 354, 738, 742, 738, 30, 354, 740, 740, 738, 740, 30, 30, 30, 354, 738, 740, 740, 740, 740, 354, 354, 738, 738, 740, 740, 740, 740, 740, 740, 740, 740, 30, 354, 354, 740, 740, 354, 354, 354, 354, 738, 30, 30, 740, 740, 740, 740, 354, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 30, 738, 740, 30, 354, 354, 30, 354, 354, 354, 354, 740, 354, 740, 740, 740, 740, 740, 740, 740, 740, 740, 30, 354, 354, 740, 354, 354, 354, 354, 738, 740, 740, 354, 740, 354, 354, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 354, 740, 740, 740, 740, 740, 740, 740, 740, 362, 362, 362, 362, 18, 18, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 740, 362, 362, 362, 744, 746, 362, 362, 362, 362, 362, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 748, 736, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 750, 362, 362, 716, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 354, 354, 354, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 474, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 362, 362, 362, 362, 362, 474, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 752, 752, 752, 752, 752, 752, 752, 752, 752, 752, 754, 754, 754, 754, 754, 754, 754, 754, 754, 754, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 758, 758, 758, 758, 758, 758, 758, 758, 758, 758, 758, 758, 758, 760, 760, 760, 760, 760, 760, 760, 760, 760, 760, 760, 760, 760, 762, 764, 764, 764, 764, 766, 768, 768, 768, 768, 770, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 716, 362, 362, 362, 362, 716, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 354, 354, 354, 354, 362, 362, 362, 362, 362, 362, 362, 716, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 748, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 18, 18, 18, 18, 18, 18, 18, 772, 772, 772, 772, 772, 752, 752, 752, 752, 752, 774, 774, 774, 774, 774, 362, 362, 362, 362, 362, 362, 30, 738, 776, 778, 740, 738, 740, 354, 354, 738, 740, 30, 354, 354, 740, 30, 354, 740, 740, 18, 18, 18, 18, 18, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 688, 780, 780, 780, 780, 780, 780, 780, 780, 780, 780, 778, 738, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 354, 354, 354, 354, 30, 354, 354, 354, 740, 740, 740, 354, 738, 354, 354, 740, 740, 30, 740, 354, 18, 18, 30, 354, 738, 738, 740, 354, 740, 354, 354, 354, 354, 354, 740, 740, 740, 354, 18, 354, 354, 354, 354, 354, 354, 740, 740, 740, 740, 740, 740, 740, 740, 740, 30, 740, 740, 354, 30, 30, 738, 738, 740, 30, 354, 354, 740, 354, 354, 354, 740, 30, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 738, 30, 354, 354, 354, 354, 354, 740, 354, 354, 740, 740, 738, 30, 738, 30, 354, 738, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 354, 740, 740, 740, 740, 738, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 740, 30, 354, 354, 30, 30, 354, 740, 740, 30, 354, 354, 740, 30, 354, 738, 354, 738, 740, 740, 738, 354, 362, 362, 362, 362, 362, 362, 362, 362, 354, 354, 354, 354, 354, 354, 354, 354, 354, 354, 736, 716, 354, 354, 736, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 242, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 242, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 242, 330, 362, 362, 362, 362, 362, 474, 362, 362, 362, 362, 474, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 362, 362, 242, 242, 242, 242, 242, 242, 242, 242, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 312, 314, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 322, 782, 96, 532, 170, 172, 102, 102, 784, 532, 594, 96, 100, 116, 136, 136, 220, 532, 96, 96, 786, 362, 362, 788, 102, 790, 238, 96, 242, 242, 792, 16, 794, 16, 178, 178, 178, 178, 178, 178, 178, 178, 178, 178, 178, 178, 178, 178, 178, 178, 178, 178, 178, 796, 242, 242, 796, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 242, 242, 242, 316, 494, 242, 242, 242, 242, 242, 242, 334, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 242, 242, 242, 242, 148, 148, 148, 446, 148, 148, 148, 446, 148, 148, 148, 446, 148, 148, 148, 446, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 336, 16, 798, 798, 16, 668, 670, 798, 16, 16, 16, 16, 800, 16, 568, 798, 16, 798, 18, 18, 18, 18, 16, 16, 802, 16, 16, 16, 16, 16, 652, 16, 16, 568, 804, 16, 16, 16, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 330, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 242, 242, 242, 242, 242, 242, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 362, 362, 362, 362, 362, 362, 242, 242, 10, 16, 806, 808, 18, 18, 18, 18, 18, 362, 18, 18, 18, 18, 810, 812, 814, 816, 816, 816, 816, 238, 238, 512, 818, 226, 226, 362, 820, 822, 824, 362, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 334, 826, 828, 536, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 824, 226, 536, 242, 242, 444, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 444, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 506, 830, 830, 506, 506, 506, 506, 506, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 242, 242, 362, 362, 242, 242, 242, 242, 242, 242, 148, 148, 148, 148, 148, 148, 148, 148, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 748, 474, 832, 832, 832, 832, 832, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 834, 836, 454, 454, 838, 840, 840, 840, 840, 840, 80, 80, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 362, 750, 506, 506, 506, 506, 506, 506, 506, 506, 842, 80, 80, 80, 80, 80, 80, 80, 506, 506, 506, 506, 506, 506, 362, 362, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 748, 362, 750, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 362, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 506, 748, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 242, 242, 242, 242, 242, 844, 844, 844, 844, 844, 846, 148, 148, 242, 242, 242, 242, 242, 242, 242, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 574, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 242, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 362, 474, 242, 242, 242, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 848, 16, 148, 148, 148, 148, 148, 148, 148, 148, 510, 510, 510, 510, 510, 148, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 96, 96, 96, 96, 96, 96, 96, 436, 304, 850, 336, 336, 336, 336, 238, 802, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 220, 336, 148, 148, 148, 852, 852, 852, 852, 854, 238, 318, 318, 318, 242, 242, 242, 242, 228, 228, 228, 228, 228, 228, 228, 228, 228, 228, 228, 856, 230, 230, 230, 230, 228, 96, 96, 96, 96, 96, 96, 96, 136, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 586, 136, 136, 136, 100, 102, 784, 96, 96, 96, 96, 96, 858, 860, 784, 144, 96, 96, 136, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 532, 532, 862, 532, 532, 96, 96, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 444, 220, 144, 148, 148, 148, 428, 148, 428, 148, 436, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 488, 432, 426, 362, 362, 242, 242, 454, 454, 454, 506, 864, 242, 242, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 16, 16, 242, 242, 242, 242, 430, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 430, 430, 430, 430, 430, 430, 430, 430, 376, 242, 242, 242, 242, 318, 502, 502, 502, 502, 502, 242, 242, 242, 238, 238, 238, 238, 238, 238, 238, 238, 238, 148, 148, 148, 318, 554, 554, 242, 510, 510, 510, 510, 510, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 336, 336, 418, 238, 318, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 442, 336, 336, 336, 336, 336, 522, 242, 242, 242, 242, 242, 326, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 436, 430, 336, 336, 430, 426, 430, 866, 318, 318, 318, 318, 318, 318, 316, 502, 502, 502, 502, 502, 242, 242, 318, 148, 148, 436, 536, 148, 148, 148, 148, 502, 502, 502, 502, 502, 148, 148, 446, 148, 148, 148, 148, 442, 336, 336, 426, 432, 426, 432, 448, 242, 242, 242, 242, 148, 442, 148, 148, 148, 148, 426, 242, 502, 502, 502, 502, 502, 242, 318, 318, 148, 148, 148, 148, 148, 148, 148, 148, 536, 148, 148, 486, 506, 530, 584, 148, 148, 148, 148, 148, 148, 148, 148, 148, 468, 336, 468, 442, 468, 148, 148, 418, 436, 446, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 444, 574, 318, 148, 148, 148, 148, 148, 488, 336, 430, 318, 574, 868, 404, 242, 242, 242, 242, 444, 148, 148, 446, 444, 148, 148, 446, 444, 148, 148, 446, 242, 242, 242, 242, 148, 148, 148, 446, 148, 148, 148, 446, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 196, 136, 136, 136, 870, 220, 220, 136, 136, 136, 242, 242, 242, 242, 242, 178, 178, 178, 178, 178, 178, 178, 178, 148, 488, 432, 430, 426, 872, 528, 242, 502, 502, 502, 502, 502, 242, 242, 242, 148, 148, 242, 242, 242, 242, 242, 242, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 446, 242, 444, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 242, 242, 874, 874, 874, 874, 874, 874, 874, 874, 874, 874, 874, 874, 874, 874, 874, 874, 876, 876, 876, 876, 876, 876, 876, 876, 876, 876, 876, 876, 876, 876, 876, 876, 844, 844, 844, 844, 844, 878, 844, 844, 844, 880, 844, 844, 882, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 884, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 886, 888, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 890, 844, 844, 844, 844, 844, 844, 844, 844, 242, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 844, 242, 242, 242, 178, 178, 178, 582, 242, 242, 242, 242, 242, 796, 178, 178, 242, 242, 892, 894, 344, 344, 344, 344, 896, 344, 344, 344, 344, 344, 344, 346, 344, 344, 346, 346, 344, 892, 346, 344, 344, 344, 344, 344, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 898, 898, 898, 898, 898, 898, 898, 898, 242, 242, 242, 242, 242, 242, 242, 242, 406, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 900, 242, 242, 242, 242, 242, 242, 242, 242, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 242, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 242, 370, 370, 370, 370, 370, 370, 902, 242, 238, 238, 238, 238, 238, 238, 238, 238, 16, 16, 16, 904, 906, 242, 242, 242, 238, 238, 238, 238, 238, 238, 238, 238, 800, 908, 910, 900, 900, 900, 900, 900, 900, 900, 906, 904, 906, 16, 672, 912, 28, 914, 916, 16, 918, 780, 780, 920, 16, 922, 740, 924, 926, 666, 242, 242, 370, 370, 422, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 370, 422, 928, 792, 12, 14, 16, 18, 20, 22, 24, 26, 26, 26, 26, 26, 28, 30, 32, 44, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 48, 50, 688, 678, 18, 16, 148, 148, 148, 148, 148, 536, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 148, 226, 242, 148, 148, 148, 242, 148, 148, 148, 242, 148, 148, 148, 242, 148, 446, 242, 58, 930, 332, 932, 716, 354, 736, 474, 242, 242, 242, 242, 934, 936, 362, 242];
	static A: Readonly<Array<number>> = [1207963663, 1207963663, 1207963663, 1476411407, 1342193679, 1476411407, 1610629135, 1342193679, 1342193679, 1342193679, 1610629132, 1744830488, 1744830488, 671088664, 671113242, 671088664, 1744830488, 1744830488, -402653163, -402653162, 1744830488, 536870937, 939524120, 536870932, 939524120, 939524120, 402667017, 402667017, 939524120, 1744830488, -402653159, 1744830489, -402653159, 1744830488, 1744830488, 8552417, 8552417, 8552417, 8552417, -402653163, 1744830488, -402653162, 1744830491, 1744850967, 1744830491, 8486882, 8486882, 8486882, 8486882, -402653163, 1744830489, -402653162, 1744830489, 1207963663, 1207963663, 1342181391, 939524108, 1744830488, 671113242, 671113242, 1744830492, 1744830488, 1744830491, 1744830492, 28677, -402653155, 1744830489, 1207963664, 1744830492, 1744830491, 671088668, 671088665, 402654731, 402654731, 1744830491, 134049794, 1744830491, 402654475, 28677, -402653154, 1744832523, 1744832523, 1744832523, 1744830488, 8548353, 8548353, 8548353, 1744830489, 8548353, 134049794, 8482818, 8482818, 8482818, 1744830489, 8482818, 102592514, 421889, 356354, 134213633, 60911618, 28674, 421889, 356354, 421889, 356354, 134049794, 102658049, 421889, 83193858, 55209985, 54161409, 421889, 356354, 53899265, 53899265, 421889, 356354, 28674, 20869121, 53112833, 53374977, 421889, 54423553, 108883970, 55472129, 54947841, 91582466, 28674, 55472129, 55996417, 100233218, 56258561, 57307137, 421889, 356354, 57307137, 28674, 28674, 356354, 57044993, 57044993, 421889, 356354, 57569281, 28674, 28677, 28674, 119631874, 28677, 28677, 716801, 520195, 651266, 716801, 520195, 651266, 651266, 421889, 356354, 20803586, 134049794, 716801, 108949505, 119697409, 100298753, 28674, 134115329, 421889, 356354, 91648001, 134115329, 134049794, 134049794, 421889, 356354, 83259393, 18247681, 18771969, 134049794, 134049794, 134049794, 55144450, 54095874, 28674, 53833730, 53833730, 28674, 53047298, 28674, 53309442, 134049794, 28674, 53833730, 134049794, 28674, 54358018, 28674, 134049794, 54882306, 55406594, 28674, 55406594, 55930882, 28674, 28674, 56193026, 57241602, 28674, 28674, 57241602, 57241602, 18182146, 56979458, 56979458, 18706434, 28674, 57503746, 28674, 28677, 28674, 28676, 28676, 28676, 1744859140, 1744859140, 28676, 28676, 28676, 1744830491, 1744830491, 1744859140, 1744859140, 28676, 1744830491, 1744859140, 1744830491, 28676, 1744830491, 1073754118, 1073754118, 1073754118, 1186017286, 2013265920, 2013265920, 28676, 100233218, 100233218, 100233218, 1744830488, 30568449, 10121217, 1744830488, 9859073, 9859073, 9859073, 2013265920, 16936961, 2013265920, 16674817, 16674817, 134049794, 8548353, 2013265920, 8548353, 10055682, 9793538, 9793538, 9793538, 134049794, 8482818, 8220674, 8482818, 16871426, 16609282, 16609282, 2256897, 16347138, 15036418, 28673, 28673, 28673, 12414978, 14249986, 2191362, 22638594, 21065730, 132476930, 30502914, 118648833, 25260034, 1744830489, 421889, 356354, 132542465, 28674, 100298753, 100298753, 100298753, 21131265, 21131265, 21065730, 21065730, 28, 1073754118, 1073741831, 1073741831, 4091905, 421889, 356354, 4026370, 2013265920, 12742657, 12742657, 12742657, 12742657, 2013265920, 2013265920, 28676, 24, 24, 2013265920, 12677122, 12677122, 12677122, 12677122, 134049794, 2013265920, 24, 1744830484, 2013265920, 2013265920, 1744830492, 1744830492, 671113242, 2013265920, 1073754118, 1073754118, 1073754118, 134217748, 1073754118, 134217752, 1073754118, 1073754118, 134217752, 134246405, 134246405, 134246405, 2013265920, 134246405, 134217752, 134217752, 2013265920, 805310480, 805310480, 1744830489, 1744830489, 268435481, 671088664, 671088664, 268460058, 939524120, 268435480, 1744830492, 1744830492, 1073754118, 268435480, 268439568, 2013265920, 268435480, 268435480, 268464133, 268464133, 268464132, 268464133, 268464133, 1073754118, 1073754118, 1073754118, 805319689, 805319689, 671088664, 805306392, 805306392, 268435480, 1073754118, 268464133, 268435480, 268464133, 1073754118, 805310480, 1744830492, 1073754118, 1073754118, 268464132, 268464132, 1073754118, 1073754118, 1744830492, 268464133, 268435484, 268435484, 268464133, 2013265920, 268439568, 1073754118, 2013265920, 2013265920, 268464133, 134231049, 134231049, 134246405, 1073754118, 134246404, 134246404, 134246404, 2013265920, 134246404, 1073754118, 1073754118, 1073754118, 134217752, 134217752, 268464133, 2013265920, 805310480, 1073754118, 1073754118, 12296, 1073754118, 28677, 12296, 12296, 12296, 1073754118, 12296, 1073754118, 28677, 1073754118, 14153, 14153, 24, 28676, 28677, 1073754118, 2013265920, 28677, 28677, 2013265920, 1073754118, 2013265920, 2013265920, 12296, 12296, 2013265920, 2059, 2059, 2059, 1771, 28, 671113242, 28677, 24, 2013265920, 1073754118, 24, 671113242, 28, 28677, 1073754118, 28677, 1867, 2059, 2059, 1744830492, 1744830492, 2013265920, 1744831755, 1744831755, 1744831659, 1744831659, 1744831659, 28, 12296, 12294, 12294, 12296, 28677, 28, 28677, 12296, 2059, 28677, 2059, 28, 24, 2013265920, 2013265920, 671113242, 28676, 1073754118, 1073754118, 24, 13833, 13833, 28676, 2013265920, 28, 28, 24, 28, 13321, 13321, 12296, 12296, 1073754118, 28, 28, 2013265920, 28, 24, 1073754118, 12296, 12296, 12296, 12296, 28677, 1073754118, 12296, 12296, 1073754118, 28677, 12296, 134115329, 134115329, 2013265920, 134115329, 28676, 28677, 24, 1803, 1803, 1803, 1803, 1067, 1355, 2059, 2059, 2013265920, 2256897, 2256897, 2191362, 2191362, 1744830484, 28677, 24, 28677, 1610629132, 28677, 28677, -402653163, -402653162, 2013265920, 29802, 29802, 29802, 28677, 1744832011, 1744832011, 1744830484, 1744830488, 1744830488, 1073754118, 1207963664, 2013265920, 28677, 28676, 1259, 2013265920, 1073741831, 2013265920, 12296, 28677, 134049794, 2013265920, 1073754118, 12296, 28676, 28674, 28676, 134049794, 28674, 28676, 134049794, 15560706, 134115329, 28674, 132214786, 132214786, 132280321, 132280321, 134049794, 132214786, 2013265920, 132280321, 114913282, 114913282, 111767554, 111767554, 108097538, 108097538, 100757506, 100757506, 104951810, 104951810, 101281794, 101281794, 134213635, 134213635, 114978817, 114978817, 134213635, 1744830491, 134049794, 1744830491, 111833089, 111833089, 108163073, 108163073, 2013265920, 1744830491, 134049794, 132476930, 105017345, 105017345, 132542465, 1744830491, 100823041, 100823041, 101347329, 101347329, 1744830491, 2013265920, 1610629132, 1610629132, 1610629132, 1610612748, 1610629132, 1207963664, 1207963664, 1207963664, 4112, 134221840, 1744830484, 1744830484, 1744830493, 1744830494, 1744830485, 1744830493, 1610629133, 1342193678, 2013270032, 2013270032, 2013270032, 939524108, 671088664, 671088664, 671088664, 1744830488, 1744830488, -402653155, -402653154, 1744830488, 1744830488, 1744850967, 1744850967, 1744830488, 939524121, -402653163, -402653162, 1744830488, 1744830489, 1744830488, 1744830488, 1610629132, 402654731, 28676, 536870937, 536870937, 1744830489, -402653163, -402653162, 28676, 402654219, 402654219, 28676, 2013265920, 1073754118, 1073741831, 1073741831, 1073754118, 28673, 1744830492, 1744830492, 28673, 28674, 28673, 28673, 28674, 1744830489, 28673, 134115329, 1744830492, 671088668, 28674, 7499777, 28673, 1744830492, 1744830489, 7434242, 28, 4355114, 4355114, 4356106, 4356106, 4290090, 4290090, 4290570, 4290570, 30730, 30730, 30730, 421889, 356354, 29738, 30730, 1744832235, 1744830489, 1744830492, 1744830489, -402653159, -402653159, -402653159, 536870937, 671088665, 1744830492, -402653163, -402653162, 1744830492, 28, 1744830492, 1744830492, 28, 1744831531, 1744831531, 1744831915, 1744831915, 402655019, 402655019, 6946844, 6946844, 6881308, 6881308, 1744832203, 1744831499, 1744831499, 1744831499, 1744831499, 1744831883, 1744831883, 1744831883, 1744831883, 1744831531, 1744831851, 1744831851, 1744832235, 1744832235, -402653159, -402653163, -402653162, 1744830489, -402653162, -402653163, 12677122, 2013265920, 356354, 134115329, 28674, 1744830492, 1744830492, 421889, 356354, 1073754118, 2013265920, 1744830488, 1744830488, 1744832523, 2013265920, 134049794, -402653155, -402653154, 1744830488, 1744830484, 1744830488, 1744859140, 1744830485, 1744830488, 1744830492, 28676, 28677, 30506, 1744830484, 1744830485, 1744830486, 1744830486, 1744830492, 29706, 29706, 29706, 1744830484, 28676, 30282, 30570, 29834, 28676, 28677, 1744830488, 1073754118, 1744830491, 1744830491, 28676, 1515, 1515, 1067, 1067, 1099, 1387, 1675, 2059, 1744830492, 1744831627, 1744831627, 1744831627, 28, 1744832523, 28677, 28677, 28677, 28677, 28676, 1744830488, 1073741831, 1744830488, 30570, 30570, 30570, 30250, 1744830491, 1744859140, 1744859140, 27, 27, 421889, 134115329, 2013265920, 671113242, 671088668, 12296, 24, 28676, 12296, 28674, 27, 12296, 24, 19, 19, 18, 18, 28677, 30469, 28677, 30437, 30021, 28677, 30149, 28677, 28677, 30373, 28677, 30309, 28677, 30117, 2013265920, 134246405, 1073754118, 134246405, 134246405, 536870937, 268435483, 268435483, 1744830486, 1744830485, 268460058, 1744830492, 1744830488, 1744830485, 1744830486, 1744830488, 1744830484, 1744850967, 1744850967, 1744830485, 1744850967, 1744850967, 939524120, 2013265920, 1744830488, 939524120, 1744830484, -402653163, -402653162, 671088664, 536870937, 536870932, 1744830489, 2013265920, 1744830488, 671113242, 2013265920, 1207963664, 1744830489, 1744830491, 671113242, 2013265920, 2013265920, 1744834576, 1744834576, 1744834576];

	getProperties(codePoint: number): number {
		const offset = this.javaCastToChar(codePoint);
		return CharacterData00.A[CharacterData00.Y[CharacterData00.X[offset >> 5] | ((offset >> 1) & 0xF)] | (offset & 0x1)];
	}

	isJavaIdentifierPart(codePoint: number): boolean {
		// isJavaIdentifierPart strictly conforms to code points assigned
		// in Unicode 10.0. Since code points {32FF} and {9FEB..9FEF} are
		// not from Unicode 10.0, return false.
		if (codePoint === 0x32FF || (codePoint >= 0x9FEB && codePoint <= 0x9FEF)) {
			return false;
		} else {
			return super.isJavaIdentifierPart(codePoint);
		}
	}

	isJavaIdentifierStart(codePoint: number): boolean {
		// isJavaIdentifierStart strictly conforms to code points assigned
		// in Unicode 10.0. Since code points {32FF} and {9FEB..9FEF} are
		// not from Unicode 10.0, return false.
		if (codePoint === 0x32FF || (codePoint >= 0x9FEB && codePoint <= 0x9FEF)) {
			return false;
		} else {
			return super.isJavaIdentifierStart(codePoint);
		}
	}
}

class CharacterData01 extends AbstractCheckableCharacterData {
	static instance = new CharacterData01();

	static X: Readonly<Array<number>> = [0, 1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 3, 3, 3, 3, 14, 4, 15, 16, 4, 17, 18, 19, 20, 4, 21, 3, 22, 23, 24, 4, 25, 26, 27, 28, 4, 29, 4, 30, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 31, 32, 33, 3, 3, 3, 3, 34, 35, 36, 37, 38, 39, 3, 40, 41, 42, 3, 3, 43, 44, 45, 46, 47, 48, 49, 50, 51, 3, 52, 53, 43, 54, 55, 56, 57, 58, 3, 3, 43, 43, 59, 3, 60, 61, 62, 63, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 64, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 3, 3, 83, 84, 85, 86, 87, 88, 89, 90, 3, 3, 3, 3, 4, 91, 92, 3, 4, 93, 94, 3, 3, 3, 3, 3, 4, 95, 96, 3, 4, 97, 98, 99, 4, 100, 101, 3, 102, 103, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 104, 105, 106, 3, 3, 3, 3, 3, 3, 3, 3, 107, 108, 109, 4, 110, 111, 4, 112, 3, 3, 3, 3, 3, 3, 3, 3, 113, 114, 115, 116, 117, 118, 3, 3, 119, 120, 121, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 122, 3, 3, 3, 123, 124, 125, 126, 4, 4, 4, 4, 4, 4, 127, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 128, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 129, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 112, 130, 131, 3, 3, 132, 133, 4, 134, 135, 136, 137, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 138, 139, 140, 3, 3, 141, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 143, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 144, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 130, 3, 3, 145, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 142, 146, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 147, 148, 149, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 150, 150, 150, 150, 150, 150, 150, 151, 150, 152, 150, 153, 154, 155, 150, 156, 157, 157, 158, 3, 3, 3, 3, 3, 157, 157, 159, 160, 3, 3, 3, 3, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 161, 162, 174, 164, 175, 176, 177, 168, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 189, 190, 189, 191, 192, 193, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 194, 195, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 43, 43, 43, 43, 43, 43, 196, 3, 197, 198, 199, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 200, 201, 202, 203, 204, 205, 3, 206, 3, 3, 3, 3, 3, 3, 3, 3, 157, 207, 157, 157, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 3, 218, 219, 220, 221, 222, 3, 3, 3, 3, 157, 157, 157, 157, 157, 157, 157, 223, 157, 157, 157, 157, 157, 157, 157, 157, 157, 157, 157, 157, 157, 157, 157, 157, 157, 157, 157, 157, 157, 157, 224, 225, 157, 157, 157, 208, 157, 157, 224, 3, 207, 157, 226, 157, 227, 228, 3, 3, 207, 229, 230, 231, 232, 3, 233, 234, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
	static Y: Readonly<Array<number>> = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 4, 5, 3, 6, 7, 7, 7, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 3, 11, 12, 12, 12, 12, 13, 14, 13, 13, 15, 13, 13, 16, 17, 13, 13, 18, 19, 20, 21, 22, 23, 24, 25, 13, 13, 13, 13, 13, 13, 26, 27, 28, 29, 30, 30, 30, 30, 30, 30, 30, 30, 31, 32, 33, 30, 30, 30, 30, 30, 30, 3, 3, 34, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 35, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 36, 37, 37, 37, 37, 38, 39, 40, 40, 40, 40, 40, 40, 40, 3, 3, 41, 42, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 0, 0, 0, 0, 44, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 45, 46, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 3, 3, 0, 0, 0, 0, 48, 49, 50, 3, 3, 3, 3, 3, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 53, 53, 53, 53, 53, 3, 3, 3, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 3, 3, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 47, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 54, 54, 54, 3, 55, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 56, 55, 3, 55, 56, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 57, 58, 59, 60, 61, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 62, 63, 64, 64, 65, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 55, 3, 3, 3, 66, 67, 68, 69, 70, 3, 3, 3, 3, 3, 3, 3, 3, 54, 54, 54, 54, 54, 54, 54, 54, 54, 55, 54, 3, 3, 71, 72, 73, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 74, 75, 64, 3, 76, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 3, 3, 57, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 3, 3, 61, 54, 77, 77, 77, 77, 77, 78, 61, 61, 3, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 79, 45, 80, 46, 3, 3, 45, 45, 54, 54, 56, 54, 56, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 3, 3, 81, 82, 3, 83, 77, 77, 84, 61, 3, 3, 3, 3, 85, 85, 85, 85, 86, 3, 3, 3, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 87, 88, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 87, 65, 54, 54, 54, 54, 89, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 90, 82, 3, 91, 69, 70, 85, 85, 85, 86, 3, 3, 3, 3, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 3, 76, 92, 92, 92, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 3, 58, 58, 93, 61, 54, 54, 54, 54, 54, 54, 54, 54, 54, 55, 3, 3, 58, 58, 93, 61, 54, 54, 54, 54, 54, 54, 54, 54, 54, 3, 3, 3, 57, 85, 86, 3, 3, 3, 3, 3, 94, 95, 96, 70, 3, 3, 3, 3, 3, 3, 3, 3, 54, 54, 54, 54, 55, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 97, 98, 3, 3, 3, 3, 3, 3, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 100, 3, 3, 3, 101, 102, 61, 103, 103, 103, 103, 103, 104, 105, 105, 105, 105, 105, 105, 105, 105, 105, 106, 107, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 45, 45, 45, 45, 45, 45, 109, 110, 110, 110, 3, 3, 111, 111, 111, 111, 111, 112, 28, 28, 28, 28, 113, 113, 113, 113, 113, 3, 3, 3, 3, 3, 3, 3, 83, 81, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 107, 45, 115, 116, 109, 117, 110, 110, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 118, 118, 118, 118, 118, 3, 3, 3, 45, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 45, 45, 107, 45, 45, 121, 82, 122, 122, 122, 122, 122, 110, 110, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123, 110, 2, 3, 3, 3, 3, 45, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 114, 45, 45, 45, 45, 115, 125, 0, 126, 110, 110, 81, 109, 3, 118, 118, 118, 118, 118, 126, 126, 110, 127, 128, 128, 128, 128, 129, 130, 10, 10, 10, 131, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 107, 45, 114, 132, 133, 110, 110, 110, 46, 0, 0, 0, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 126, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 114, 107, 45, 45, 121, 82, 3, 3, 118, 118, 118, 118, 118, 3, 3, 3, 45, 114, 1, 0, 0, 0, 2, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 1, 0, 0, 3, 134, 114, 115, 114, 135, 136, 135, 136, 137, 3, 2, 3, 3, 136, 3, 3, 1, 0, 0, 114, 3, 81, 81, 81, 82, 3, 81, 81, 82, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 114, 45, 45, 45, 45, 114, 133, 115, 134, 0, 126, 110, 110, 118, 118, 118, 118, 118, 47, 47, 3, 0, 0, 0, 0, 0, 0, 0, 0, 114, 107, 45, 45, 115, 115, 114, 107, 115, 81, 0, 138, 3, 3, 3, 3, 118, 118, 118, 118, 118, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 124, 114, 45, 45, 3, 114, 114, 45, 116, 109, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 0, 0, 45, 3, 0, 0, 0, 0, 0, 0, 0, 0, 114, 107, 45, 45, 45, 115, 107, 116, 139, 110, 2, 3, 3, 3, 3, 3, 118, 118, 118, 118, 118, 3, 3, 3, 92, 92, 92, 92, 92, 92, 140, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 120, 107, 114, 45, 45, 45, 141, 3, 3, 3, 3, 53, 53, 53, 53, 53, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 80, 45, 114, 45, 45, 107, 45, 121, 3, 3, 118, 118, 118, 118, 118, 142, 110, 143, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 144, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 145, 53, 53, 53, 53, 53, 129, 130, 10, 10, 131, 3, 3, 3, 3, 3, 1, 120, 45, 45, 115, 107, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123, 133, 45, 115, 120, 45, 139, 110, 110, 110, 146, 3, 3, 3, 3, 120, 45, 45, 115, 107, 45, 0, 0, 0, 0, 3, 0, 0, 45, 45, 45, 45, 45, 45, 115, 81, 110, 5, 110, 110, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 45, 45, 45, 46, 45, 45, 45, 147, 126, 110, 110, 3, 3, 3, 3, 3, 118, 118, 118, 118, 118, 148, 148, 148, 148, 148, 142, 10, 10, 10, 131, 3, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 136, 45, 45, 45, 115, 45, 107, 46, 3, 3, 3, 3, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 45, 45, 46, 3, 46, 45, 80, 45, 133, 81, 120, 3, 3, 3, 3, 118, 118, 118, 118, 118, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 149, 149, 149, 149, 150, 150, 150, 151, 152, 152, 153, 154, 154, 154, 154, 155, 155, 156, 157, 158, 158, 158, 152, 159, 160, 161, 162, 163, 154, 164, 165, 166, 167, 168, 169, 170, 171, 172, 172, 173, 174, 175, 176, 154, 177, 161, 161, 161, 161, 161, 161, 161, 178, 150, 150, 179, 110, 110, 5, 3, 3, 3, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 53, 53, 53, 53, 53, 3, 3, 110, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 81, 81, 109, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 45, 45, 45, 139, 110, 110, 12, 12, 180, 180, 143, 3, 3, 3, 3, 3, 118, 118, 118, 118, 118, 181, 10, 10, 10, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 2, 3, 3, 3, 3, 3, 124, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 114, 135, 3, 3, 3, 3, 3, 3, 3, 83, 81, 182, 180, 180, 180, 180, 180, 180, 180, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 184, 3, 3, 3, 3, 3, 3, 3, 3, 3, 183, 183, 183, 183, 183, 183, 183, 183, 183, 184, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 183, 3, 3, 0, 0, 0, 0, 0, 2, 3, 3, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 2, 3, 3, 3, 0, 0, 0, 0, 0, 3, 35, 139, 185, 185, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 3, 3, 3, 3, 3, 12, 12, 12, 33, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 186, 141, 81, 12, 186, 187, 187, 188, 185, 185, 185, 189, 81, 81, 81, 190, 35, 81, 81, 81, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 81, 81, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 33, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 81, 191, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 34, 3, 3, 3, 3, 192, 192, 192, 192, 192, 193, 10, 10, 10, 3, 3, 3, 3, 3, 3, 3, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 195, 195, 195, 196, 195, 195, 195, 195, 195, 195, 195, 195, 195, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 197, 194, 3, 197, 198, 197, 198, 194, 197, 194, 194, 194, 194, 195, 195, 199, 199, 195, 195, 195, 199, 195, 195, 195, 195, 195, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 194, 198, 194, 197, 198, 194, 194, 194, 197, 194, 194, 194, 197, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 194, 198, 194, 197, 194, 194, 197, 197, 3, 194, 194, 194, 197, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 194, 194, 194, 194, 194, 194, 194, 195, 195, 195, 195, 195, 195, 195, 195, 195, 194, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 194, 194, 194, 194, 194, 194, 194, 194, 195, 195, 195, 3, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 200, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 201, 195, 195, 195, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 200, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 201, 195, 195, 195, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 200, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 201, 195, 195, 195, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 200, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 201, 195, 195, 195, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 194, 200, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 195, 201, 195, 195, 195, 202, 3, 203, 203, 203, 203, 203, 204, 204, 204, 204, 204, 205, 205, 205, 205, 205, 206, 206, 206, 206, 206, 207, 207, 207, 207, 207, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 190, 12, 35, 81, 81, 81, 81, 81, 81, 81, 81, 190, 12, 12, 12, 35, 12, 12, 12, 12, 12, 12, 12, 190, 208, 110, 110, 3, 3, 3, 3, 3, 3, 3, 83, 81, 81, 83, 81, 81, 81, 81, 81, 81, 81, 3, 3, 3, 3, 3, 3, 3, 3, 45, 45, 45, 46, 45, 45, 45, 45, 45, 45, 45, 45, 46, 80, 45, 45, 45, 80, 46, 45, 45, 46, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 54, 54, 55, 66, 67, 67, 67, 67, 81, 81, 81, 82, 3, 3, 3, 3, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 209, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 81, 133, 81, 82, 3, 3, 211, 211, 211, 211, 211, 3, 3, 85, 212, 212, 213, 212, 212, 212, 212, 212, 212, 212, 212, 212, 212, 212, 212, 212, 213, 214, 214, 213, 213, 212, 212, 212, 212, 214, 212, 212, 213, 213, 3, 3, 3, 214, 3, 213, 213, 213, 213, 212, 213, 214, 214, 213, 213, 213, 213, 213, 213, 214, 214, 213, 212, 214, 212, 212, 212, 214, 212, 212, 213, 212, 214, 214, 212, 212, 212, 212, 212, 213, 212, 212, 212, 212, 212, 212, 212, 212, 3, 3, 213, 212, 213, 212, 212, 213, 212, 212, 212, 212, 212, 212, 212, 212, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 215, 3, 3, 3, 3, 3, 3, 3, 30, 30, 30, 30, 30, 30, 3, 3, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 3, 3, 3, 3, 3, 3, 30, 30, 30, 30, 30, 30, 30, 34, 216, 30, 30, 30, 30, 30, 30, 30, 216, 30, 30, 30, 30, 30, 30, 30, 216, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 3, 3, 3, 3, 3, 217, 218, 218, 218, 218, 219, 220, 3, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 33, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 12, 12, 12, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 30, 3, 3, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 33, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 33, 3, 3, 3, 3, 3, 3, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 3, 3, 12, 12, 12, 12, 33, 3, 3, 3, 12, 3, 3, 3, 3, 3, 3, 3, 30, 30, 30, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 222, 223, 223, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 34, 3, 3, 3, 3, 3, 30, 30, 30, 30, 30, 30, 34, 3, 30, 30, 30, 30, 34, 3, 3, 3, 30, 30, 30, 30, 3, 3, 3, 3, 30, 30, 30, 30, 30, 3, 3, 3, 30, 30, 30, 30, 3, 3, 3, 3, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 3, 3, 3, 3, 3, 3, 3, 3, 3, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 34, 30, 30, 30, 30, 30, 30, 34, 3, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 3, 3, 3, 3, 34, 3, 3, 3, 3, 3, 3, 3, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 34, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
	static A: Readonly<Array<number>> = [28677, 28677, 2013265920, 28677, 28677, 2013265920, 2013265920, 2013265920, 24, 1744830488, 24, 2013265920, 2013265920, 1867, 1867, 1867, 1867, 1131, 1419, 2059, 2059, 2059, 2013265920, 28, 28, 28, 1744861194, 1744861194, 1744861162, 1744860234, 1744861098, 1744860202, 1744861194, 1744860874, 1744861002, 1744861194, 1744861194, 1744860778, 1744860458, 1744860426, 1744860394, 1744860394, 1744860362, 1744860330, 1744860298, 1744860362, 1744860490, 1744860458, 1744860426, 1744860394, 1744860362, 1744860970, 1744861194, 1744860746, 1744861194, 1744832523, 1744832523, 1744832523, 1744832523, 1744830492, 1744830492, 1744830492, 1744832203, 1744832523, 1744830492, 28, 28, 2013265920, 1744830492, 2013265920, 28, 1073754118, 1073754118, 402654219, 402654219, 402654219, 402654219, 402654507, 402654795, 402655243, 402655243, 402655243, 1067, 1163, 1291, 2059, 28677, 30730, 30730, 2013265920, 1073754118, 1073754118, 1073754118, 2013265920, 2013265920, 24, 24, 30218, 30218, 30442, 29706, 30730, 10645505, 10645505, 10579970, 10579970, 13321, 13321, 134246405, 134246405, 134246405, 2013265920, 2013265920, 134246405, 2013265920, 134217752, 134219051, 134219051, 134219051, 134219243, 134219531, 134219787, 134219787, 134219787, 134246405, 134217756, 134217756, 134219019, 134219019, 134219019, 134219147, 134219435, 2013265920, 134219595, 134219595, 134219595, 134219595, 134219563, 134219563, 134219691, 134218955, 134219787, 2013265920, 134218955, 134219051, 134219179, 134219467, 134219787, 134219115, 134219371, 134219659, 134219787, 2013265920, 1744830488, 134218795, 134218795, 134219083, 134219371, 134246405, 1073754118, 2013265920, 1073754118, 1073754118, 1073754118, 1073754118, 2013265920, 2013265920, 1073754118, 134218955, 134219243, 134217752, 134217752, 134217752, 2013265920, 134246405, 134218891, 134219787, 134217752, 134217756, 134246405, 134246405, 1073754118, 2013265920, 134219467, 1744830488, 1744830488, 134219211, 134219499, 2013265920, 134219531, 134219531, 134219531, 134219531, 134219691, 151154689, 151154689, 151154689, 2013265920, 151089154, 151089154, 151089154, 2013265920, 134218987, 134219083, 134219211, 134219787, 805307435, 805307435, 805307723, 805308011, 805308427, 805308427, 805308427, 2013265920, 12296, 1073754118, 12296, 28677, 1073754118, 24, 24, 24, 1744831979, 1744831979, 1744832267, 1744831531, 14153, 14153, 12296, 12296, 1073754118, 12296, 12296, 1073754118, 24, 4112, 13833, 13833, 1073754118, 28677, 28677, 1073754118, 1073754118, 1073754118, 13641, 13641, 28677, 1073754118, 28677, 12296, 12296, 28677, 28677, 24, 2013265920, 1035, 1035, 1035, 1035, 1323, 1611, 2059, 2059, 2013265920, 1073754118, 12296, 1073754118, 1073754118, 1073754118, 28677, 12296, 2013265920, 2013265920, 12296, 12296, 12296, 24, 28677, 1073754118, 24, 1744830488, 2013265920, 12296, 1073754118, 1547, 1835, 24, 28, 8548353, 8548353, 8482818, 8482818, 24, 1073754118, 12296, 12294, 1259, 1259, 29770, 29770, 30570, 30570, 30570, 30378, 30378, 30378, 30378, 30090, 30090, 30090, 29802, 29802, 29802, 30698, 30698, 30666, 30666, 30666, 30378, 30346, 30346, 30346, 30730, 30730, 30122, 30122, 30122, 30090, 29994, 29962, 29962, 29930, 29898, 29866, 29898, 29898, 29866, 29834, 29834, 29802, 29802, 29770, 29738, 29706, 30474, 30474, 30474, 30282, 30282, 30282, 30282, 30250, 30250, 30218, 29994, 29994, 30730, 30570, 30570, 2013265920, 28676, 28676, 2013265920, 1515, 1073754118, 28676, 28677, 28677, 28677, 2013265920, 1207963664, 1207963664, 28, 12296, 12296, 12296, 12296, 1207963664, 1207963664, 1073754118, 1073754118, 28, 1073754118, 1744830492, 1067, 1067, 1355, 1643, 28673, 28673, 28674, 28674, 28674, 2013265920, 28673, 2013265920, 2013265920, 28673, 2013265920, 28674, 28673, 25, 28674, -402653159, 28673, 28674, 402667081, 402667081, 402666761, 402666761, 402667465, 402667465, 402667145, 402667145, 402666825, 402666825, 28, 24, 143290369, 143290369, 143224834, 143224834, 134231561, 134231561, 268464133, 268464133, 2013265920, 268464133, 268464133, 2013265920, 1744830489, 1744830489, 2013265920, 1744830492, 402654219, 402655211, 402655211, 402655211, 402655211, 1744832171, 1744832139, 2013265920, 28, 28, 1744830492, 1744830491, 1744830491, 1744830491];

	getProperties(codePoint: number): number {
		const offset = this.javaCastToChar(codePoint);
		return CharacterData01.A[(CharacterData01.Y[(CharacterData01.X[offset >> 5] << 4) | ((offset >> 1) & 0xF)] << 1) | (offset & 0x1)];
	}
}

class CharacterData02 extends AbstractCheckableCharacterData {
	static instance = new CharacterData02();

	static X: Readonly<Array<number>> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 0, 0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32];
	static Y: Readonly<Array<number>> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0];
	static A: Readonly<Array<number>> = [28677, 28677, 28677, 2013265920, 2013265920, 2013265920, 30501, 28677];

	getProperties(codePoint: number): number {
		const offset = this.javaCastToChar(codePoint);
		return CharacterData02.A[CharacterData02.Y[CharacterData02.X[offset >> 5] | ((offset >> 1) & 0xF)] | (offset & 0x1)];
	}
}

class CharacterData0E extends AbstractCheckableCharacterData {
	static instance = new CharacterData0E();

	static X: Readonly<Array<number>> = [0, 16, 16, 16, 32, 32, 32, 32, 48, 48, 48, 48, 48, 48, 48, 64, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32];
	static Y: Readonly<Array<number>> = [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2];
	static A: Readonly<Array<number>> = [2013265920, 1207963664, 2013265920, 2013265920, 1207963664, 1207963664, 1073754118, 1073754118];

	getProperties(codePoint: number): number {
		const offset = this.javaCastToChar(codePoint);
		return CharacterData0E.A[CharacterData0E.Y[CharacterData0E.X[offset >> 5] | ((offset >> 1) & 0xF)] | (offset & 0x1)];
	}
}

class CharacterDataPrivateUse extends AbstractCharacterData {
	static instance = new CharacterDataPrivateUse();
}

class CharacterDataUndefined extends AbstractCharacterData {
	static instance = new CharacterDataUndefined();
}

class CharacterDataSelector {
	static of(codePoint: number): CharacterData {
		if (codePoint >>> 8 == 0) {     // fast-path
			// 0 - 255
			return CharacterDataLatin1.instance;
		} else {
			switch (codePoint >>> 16) {  // plane 00-16
				case(0):
					return CharacterData00.instance;
				case(1):
					return CharacterData01.instance;
				case(2):
					return CharacterData02.instance;
				case(14):
					return CharacterData0E.instance;
				case(15):   // Private Use
				case(16):   // Private Use
					return CharacterDataPrivateUse.instance;
				default:
					return CharacterDataUndefined.instance;
			}
		}
	}
}

export class Character {
	static isIdentifierIgnorable(codePoint: number): boolean {
		return CharacterDataSelector.of(codePoint).isIdentifierIgnorable(codePoint);
	}

	static isJavaIdentifierStart(codePoint: number): boolean {
		return CharacterDataSelector.of(codePoint).isJavaIdentifierStart(codePoint);
	}

	static isJavaIdentifierPart(codePoint: number): boolean {
		return CharacterDataSelector.of(codePoint).isJavaIdentifierPart(codePoint);
	}

	static isJavaIdentifierStartAndNotIdentifierIgnorable(codePoint: number): boolean {
		return Character.isJavaIdentifierStart(codePoint) && !Character.isIdentifierIgnorable(codePoint);
	}

	static isJavaIdentifierPartAndNotIdentifierIgnorable(codePoint: number): boolean {
		return Character.isJavaIdentifierPart(codePoint) && !Character.isIdentifierIgnorable(codePoint);
	}
}
