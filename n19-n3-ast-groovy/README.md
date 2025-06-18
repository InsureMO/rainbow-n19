![Static Badge](https://img.shields.io/badge/InsureMO-777AF2.svg)

# n19/n3-ast-groovy

## Atomic Tokens

| Token          | Id                                         | Type                  | Captor                                        | Capture Rule                                                                                     |
|----------------|--------------------------------------------|-----------------------|-----------------------------------------------|--------------------------------------------------------------------------------------------------|
| `boolean`      | 1, BOOLEAN                                 | 7, PrimitiveType      | PtBooleanCaptor                               | Exactly match, and following char cannot be any of java identifier chars.                        |
| `char`         | 2, CHAR                                    | 7, PrimitiveType      | PtCharCaptor                                  | Exactly match, and following char cannot be any of java identifier chars.                        |
| `byte`         | 3, BYTE                                    | 7, PrimitiveType      | PtByteCaptor                                  | Exactly match, and following char cannot be any of java identifier chars.                        |
| `short`        | 4, SHORT                                   | 7, PrimitiveType      | PtShortCaptor                                 | Exactly match, and following char cannot be any of java identifier chars.                        |
| `int`          | 5, INT                                     | 7, PrimitiveType      | PtIntCaptor                                   | Exactly match, and following char cannot be any of java identifier chars.                        |
| `long`         | 6, LONG                                    | 7, PrimitiveType      | PtLongCaptor                                  | Exactly match, and following char cannot be any of java identifier chars.                        |
| `float`        | 7, FLOAT                                   | 7, PrimitiveType      | PtFloatCaptor                                 | Exactly match, and following char cannot be any of java identifier chars.                        |
| `double`       | 8, DOUBLE                                  | 7, PrimitiveType      | PtDoubleCaptor                                | Exactly match, and following char cannot be any of java identifier chars.                        |
| `as`           | 9, AS                                      | 4, Keyword            | GkAsCaptor                                    | Exactly match, and following char cannot be any of java identifier chars.                        |
| `def`          | 10, DEF                                    | 4, Keyword            | GkDefCaptor                                   | Exactly match, and following char cannot be any of java identifier chars.                        |
| `in`           | 11, IN                                     | 6, Operator           | GoInCaptor                                    | Exactly match, and following char cannot be any of java identifier chars.                        |
| `trait`        | 12, TRAIT                                  | 4, Keyword            | GkTraitCaptor                                 | Exactly match, and following char cannot be any of java identifier chars.                        |
| `@ThreadSafe`  | 13, THREADSAFE                             | 4, Keyword            | GkAtThreadSafeCaptor                          | Exactly match, and following char cannot be any of java identifier chars.                        |
| `abstract`     | 14, ABSTRACT                               | 4, Keyword            | JkAbstractCaptor                              | Exactly match, and following char cannot be any of java identifier chars.                        |
| `assert`       | 15, ASSERT                                 | 4, Keyword            | JkAssertCaptor                                | Exactly match, and following char cannot be any of java identifier chars.                        |
| `@interface`   | 16, AT_INTERFACE                           | 4, Keyword            | JkAtInterfaceCaptor                           | Exactly match, and following char cannot be any of java identifier chars.                        |
| `break`        | 17, BREAK                                  | 4, Keyword            | JkBreakCaptor                                 | Exactly match, and following char cannot be any of java identifier chars.                        |
| `case`         | 18, CASE                                   | 4, Keyword            | JkCaseCaptor                                  | Exactly match, and following char cannot be any of java identifier chars.                        |
| `catch`        | 19, CATCH                                  | 4, Keyword            | JkCatchCaptor                                 | Exactly match, and following char cannot be any of java identifier chars.                        |
| `class`        | 20, CLASS                                  | 4, Keyword            | JkClassCaptor                                 | Exactly match, and following char cannot be any of java identifier chars.                        |
| `const`        | 21, CONST                                  | 4, Keyword            | JkConstCaptor                                 | Exactly match, and following char cannot be any of java identifier chars.                        |
| `continue`     | 22, CONTINUE                               | 4, Keyword            | JkContinueCaptor                              | Exactly match, and following char cannot be any of java identifier chars.                        |
| `default`      | 23, DEFAULT                                | 4, Keyword            | JkDefaultCaptor                               | Exactly match, and following char cannot be any of java identifier chars.                        |
| `do`           | 24, DO                                     | 4, Keyword            | JkDoCaptor                                    | Exactly match, and following char cannot be any of java identifier chars.                        |
| `else`         | 25, ELSE                                   | 4, Keyword            | JkElseCaptor                                  | Exactly match, and following char cannot be any of java identifier chars.                        |
| `enum`         | 26, ENUM                                   | 4, Keyword            | JkEnumCaptor                                  | Exactly match, and following char cannot be any of java identifier chars.                        |
| `extends`      | 27, EXTENDS                                | 4, Keyword            | JkExtendsCaptor                               | Exactly match, and following char cannot be any of java identifier chars.                        |
| `final`        | 28, FINAL                                  | 4, Keyword            | JkFinalCaptor                                 | Exactly match, and following char cannot be any of java identifier chars.                        |
| `finally`      | 29, FINALLY                                | 4, Keyword            | JkFinallyCaptor                               | Exactly match, and following char cannot be any of java identifier chars.                        |
| `for`          | 30, FOR                                    | 4, Keyword            | JkForCaptor                                   | Exactly match, and following char cannot be any of java identifier chars.                        |
| `goto`         | 31, GOTO                                   | 4, Keyword            | JkGotoCaptor                                  | Exactly match, and following char cannot be any of java identifier chars.                        |
| `if`           | 32, IF                                     | 4, Keyword            | JkIfCaptor                                    | Exactly match, and following char cannot be any of java identifier chars.                        |
| `implements`   | 33, IMPLEMENTS                             | 4, Keyword            | JkImplementsCaptor                            | Exactly match, and following char cannot be any of java identifier chars.                        |
| `import`       | 34, IMPORT                                 | 4, Keyword            | JkImportCaptor                                | Exactly match, and following char cannot be any of java identifier chars.                        |
| `instanceof`   | 35, INSTANCEOF                             | 6, Operator           | JoInstanceofCaptor                            | Exactly match, and following char cannot be any of java identifier chars.                        |
| `interface`    | 36, INTERFACE                              | 4, Keyword            | JkInterfaceCaptor                             | Exactly match, and following char cannot be any of java identifier chars.                        |
| `native`       | 37, NATIVE                                 | 4, Keyword            | JkNativeCaptor                                | Exactly match, and following char cannot be any of java identifier chars.                        |
| `new`          | 38, NEW                                    | 4, Keyword            | JkNewCaptor                                   | Exactly match, and following char cannot be any of java identifier chars.                        |
| `non-sealed`   | 39, NON_SEALED                             | 4, Keyword            | JkNonSealedCaptor                             | Exactly match, and following char cannot be any of java identifier chars.                        |
| `!in`          | 40, NOT_IN                                 | 6, Operator           | GoNotInCaptor                                 | Exactly match, and following char cannot be any of java identifier chars.                        |
| `!instanceof`  | 41, NOT_INSTANCEOF                         | 6, Operator           | GoNotInstanceofCaptor                         | Exactly match, and following char cannot be any of java identifier chars.                        |
| `null`         | 42, NULL                                   | 4, Keyword            | JkNullCaptor                                  | Exactly match, and following char cannot be any of java identifier chars.                        |
| `package`      | 43, PACKAGE                                | 4, Keyword            | JkPackageCaptor                               | Exactly match, and following char cannot be any of java identifier chars.                        |
| `permits`      | 44, PERMITS                                | 4, Keyword            | JkPermitsCaptor                               | Exactly match, and following char cannot be any of java identifier chars.                        |
| `private`      | 45, PRIVATE                                | 4, Keyword            | JkPrivateCaptor                               | Exactly match, and following char cannot be any of java identifier chars.                        |
| `protected`    | 46, PROTECTED                              | 4, Keyword            | JkProtectedCaptor                             | Exactly match, and following char cannot be any of java identifier chars.                        |
| `public`       | 47, PUBLIC                                 | 4, Keyword            | JkPublicCaptor                                | Exactly match, and following char cannot be any of java identifier chars.                        |
| `record`       | 48, RECORD                                 | 4, Keyword            | JkRecordCaptor                                | Exactly match, and following char cannot be any of java identifier chars.                        |
| `return`       | 49, RETURN                                 | 4, Keyword            | JkReturnCaptor                                | Exactly match, and following char cannot be any of java identifier chars.                        |
| `sealed`       | 50, SEALED                                 | 4, Keyword            | JkSealedCaptor                                | Exactly match, and following char cannot be any of java identifier chars.                        |
| `static`       | 51, STATIC                                 | 4, Keyword            | JkStaticCaptor                                | Exactly match, and following char cannot be any of java identifier chars.                        |
| `strictfp`     | 52, STRICTFP                               | 4, Keyword            | JkStrictfpCaptor                              | Exactly match, and following char cannot be any of java identifier chars.                        |
| `super`        | 53, SUPER                                  | 4, Keyword            | JkSuperCaptor                                 | Exactly match, and following char cannot be any of java identifier chars.                        |
| `switch`       | 54, SWITCH                                 | 4, Keyword            | JkSwitchCaptor                                | Exactly match, and following char cannot be any of java identifier chars.                        |
| `synchronized` | 55, SYNCHRONIZED                           | 4, Keyword            | JkSynchronizedCaptor                          | Exactly match, and following char cannot be any of java identifier chars.                        |
| `this`         | 56, THIS                                   | 4, Keyword            | JkThisCaptor                                  | Exactly match, and following char cannot be any of java identifier chars.                        |
| `throw`        | 57, THROW                                  | 4, Keyword            | JkThrowCaptor                                 | Exactly match, and following char cannot be any of java identifier chars.                        |
| `throws`       | 58, THROWS                                 | 4, Keyword            | JkThrowsCaptor                                | Exactly match, and following char cannot be any of java identifier chars.                        |
| `transient`    | 59, TRANSIENT                              | 4, Keyword            | JkTransientCaptor                             | Exactly match, and following char cannot be any of java identifier chars.                        |
| `try`          | 60, TRY                                    | 4, Keyword            | JkTryCaptor                                   | Exactly match, and following char cannot be any of java identifier chars.                        |
| `var`          | 61, VAR                                    | 4, Keyword            | JkVarCaptor                                   | Exactly match, and following char cannot be any of java identifier chars.                        |
| `void`         | 62, VOID                                   | 4, Keyword            | JkVoidCaptor                                  | Exactly match, and following char cannot be any of java identifier chars.                        |
| `volatile`     | 63, VOLATILE                               | 4, Keyword            | JkVolatileCaptor                              | Exactly match, and following char cannot be any of java identifier chars.                        |
| `while`        | 64, WHILE                                  | 4, Keyword            | JkWhileCaptor                                 | Exactly match, and following char cannot be any of java identifier chars.                        |
| `yield`        | 65, YIELD                                  | 4, Keyword            | JkYieldCaptor                                 | Exactly match, and following char cannot be any of java identifier chars.                        |
| `true`         | 66, BooleanTrue                            | 9, BooleanLiteral     | LtBooleanTrueCaptor                           | Exactly match, and following char cannot be any of java identifier chars.                        |
| `false`        | 67, BooleanFalse                           | 9, BooleanLiteral     | LtBooleanFalseCaptor                          | Exactly match, and following char cannot be any of java identifier chars.                        |
| `0...`         | 69, NumericBasePart                        | 10, NumberLiteral     | LtNumericBasePartCaptorStartsWith0            | Groovy numeric, starts with `0`.                                                                 |
| `1...`         | 69, NumericBasePart                        | 10, NumberLiteral     | LtNumericBasePartCaptorStartsWith1            | Groovy numeric, starts with `1`.                                                                 |
| `2...`         | 69, NumericBasePart                        | 10, NumberLiteral     | LtNumericBasePartCaptorStartsWith2            | Groovy numeric, starts with `2`.                                                                 |
| `3...`         | 69, NumericBasePart                        | 10, NumberLiteral     | LtNumericBasePartCaptorStartsWith3            | Groovy numeric, starts with `3`.                                                                 |
| `4...`         | 69, NumericBasePart                        | 10, NumberLiteral     | LtNumericBasePartCaptorStartsWith4            | Groovy numeric, starts with `4`.                                                                 |
| `5...`         | 69, NumericBasePart                        | 10, NumberLiteral     | LtNumericBasePartCaptorStartsWith5            | Groovy numeric, starts with `5`.                                                                 |
| `6...`         | 69, NumericBasePart                        | 10, NumberLiteral     | LtNumericBasePartCaptorStartsWith6            | Groovy numeric, starts with `6`.                                                                 |
| `7...`         | 69, NumericBasePart                        | 10, NumberLiteral     | LtNumericBasePartCaptorStartsWith7            | Groovy numeric, starts with `7`.                                                                 |
| `8...`         | 69, NumericBasePart                        | 10, NumberLiteral     | LtNumericBasePartCaptorStartsWith8            | Groovy numeric, starts with `8`.                                                                 |
| `9...`         | 69, NumericBasePart                        | 10, NumberLiteral     | LtNumericBasePartCaptorStartsWith9            | Groovy numeric, starts with `9`.                                                                 |
| `....`         | 69, NumericBasePart                        | 10, NumberLiteral     | LtNumericBasePartCaptorStartsWithDot          | Groovy decimal, starts with `.`.                                                                 |
| `'`            | 81, StringQuotationMark                    | 5, Mark               | LtStringQuotationMarkCaptor                   | Exactly match.                                                                                   |
| `'''`          | 82, StringQuotationMarkML                  | 5, Mark               | LtStringQuotationMarkMLCaptor                 | Exactly match.                                                                                   |
| `\b`           | 84, StringBackspaceEscape                  | 5, Mark               | LtStringBackspaceEscapeCaptor                 | Exactly match.                                                                                   |
| `\f`           | 85, StringFormFeedEscape                   | 5, Mark               | LtStringFormFeedEscapeCaptor                  | Exactly match.                                                                                   |
| `\n`           | 86, StringNewLineEscape                    | 5, Mark               | LtStringNewLineEscapeCaptor                   | Exactly match.                                                                                   |
| `\r`           | 87, StringCarriageReturnEscape             | 5, Mark               | LtStringCarriageReturnEscapeCaptor            | Exactly match.                                                                                   |
| `\t`           | 88, StringTabulationEscape                 | 5, Mark               | LtStringTabulationEscapeCaptor                | Exactly match.                                                                                   |
| `\\`           | 89, StringBackslashEscape                  | 5, Mark               | LtStringBackslashEscapeCaptor                 | Exactly match.                                                                                   |
| `\'`           | 90, StringSingleQuoteEscape                | 5, Mark               | LtStringSingleQuoteEscapeCaptor               | Exactly match.                                                                                   |
| `\"`           | 91, StringDoubleQuoteEscape                | 5, Mark               | LtStringDoubleQuoteEscapeCaptor               | Exactly match.                                                                                   |
| `\$`           | 92, StringDollarEscape                     | 5, Mark               | LtStringDollarEscapeCaptor                    | Exactly match.                                                                                   |
| `\...`         | 93, StringOctalEscape                      | 5, Mark               | LtOctalEscapeCaptor                           | Starts with `\`, and the following 0-3 characters are all in the range of `0-7`.                 |
| `\u....`       | 96, StringUnicodeEscape                    | 5, Mark               | LtUnicodeEscapeCaptor                         | Starts with `\u`, and the following four characters are all in the range of `0-9a-fA-F`.         |
| `"`            | 100, GStringQuotationMark                  | 5, Mark               | LtGStringQuotationMarkCaptor                  | Exactly match.                                                                                   |
| `"""`          | 101, GStringQuotationMarkML                | 5, Mark               | LtGStringQuotationMarkMLCaptor                | Exactly match.                                                                                   |
| `$/`           | 103, DollarSlashyGStringQuotationStartMark | 5, Mark               | LtDollarSlashyGStringQuotationStartMarkCaptor | Exactly match.                                                                                   |
| `/$`           | 104, DollarSlashyGStringQuotationEndMark   | 5, Mark               | LtDollarSlashyGStringQuotationEndMarkCaptor   | Exactly match.                                                                                   |
| `\/`           | 105, SlashyGStringSlashEscape              | 5, Mark               | LtSlashyGStringSlashEscapeCaptor              | Exactly match.                                                                                   |
| `$$`           | 106, DollarSlashyGStringDollarEscape       | 5, Mark               | LtDollarSlashyGStringDollarEscapeCaptor       | Exactly match.                                                                                   |
| `${`           | 109, GStringInterpolationLBraceStartMark   | 5, Mark               | LtGStringInterpolationLBraceStartMarkCaptor   | Exactly match.                                                                                   |
| `..`           | 115, RangeInclusive                        | 6, Operator           | GoRangeInclusiveCaptor                        | Exactly match.                                                                                   |
| `<..`          | 116, RangeExclusiveLeft                    | 6, Operator           | GoRangeExclusiveLeftCaptor                    | Exactly match.                                                                                   |
| `..<`          | 117, RangeExclusiveRight                   | 6, Operator           | GoRangeExclusiveRightCaptor                   | Exactly match.                                                                                   |
| `<..<`         | 118, RangeExclusiveFull                    | 6, Operator           | GoRangeExclusiveFullCaptor                    | Exactly match.                                                                                   |
| `*.`           | 119, SpreadDot                             | 6, Operator           | GoSpreadDotCaptor                             | Exactly match.                                                                                   |
| `?.`           | 120, SafeDot                               | 6, Operator           | GoSafeDotCaptor                               | Exactly match.                                                                                   |
| `?[`           | 121, SafeIndex                             | 6, Operator           | GoSafeIndexCaptor                             | Exactly match.                                                                                   |
| `??.`          | 123, SafeChainDot                          | 6, Operator           | GoSafeChainDotCaptor                          | Exactly match.                                                                                   |
| `?:`           | 124, Elvis                                 | 6, Operator           | GoElvisCaptor                                 | Exactly match.                                                                                   |
| `.&`           | 125, MethodPointer                         | 6, Operator           | GoMethodPointerCaptor                         | Exactly match.                                                                                   |
| `::`           | 126, MethodReference                       | 6, Operator           | JoMethodReferenceCaptor                       | Exactly match.                                                                                   |
| `=~`           | 127, RegexFind                             | 6, Operator           | GoRegexFindCaptor                             | Exactly match.                                                                                   |
| `==~`          | 128, RegexMatch                            | 6, Operator           | GoRegexMatchCaptor                            | Exactly match.                                                                                   |
| `**`           | 129, Power                                 | 6, Operator           | GoPowerCaptor                                 | Exactly match.                                                                                   |
| `**=`          | 130, PowerAssign                           | 6, Operator           | GoPowerAssignCaptor                           | Exactly match.                                                                                   |
| `<=>`          | 131, Spaceship                             | 6, Operator           | GoSpaceshipCaptor                             | Exactly match.                                                                                   |
| `===`          | 132, Identical                             | 6, Operator           | GoIdenticalCaptor                             | Exactly match.                                                                                   |
| `!==`          | 133, NotIdentical                          | 6, Operator           | GoNotIdenticalCaptor                          | Exactly match.                                                                                   |
| `->`           | 134, Arrow                                 | 6, Operator           | JoArrowCaptor                                 | Exactly match.                                                                                   |
| `{`            | 135, LBrace                                | 3, Separator          | SpLBraceCaptor                                | Exactly match.                                                                                   |
| `}`            | 136, RBrace                                | 3, Separator          | SpRBraceCaptor                                | Exactly match.                                                                                   |
| `(`            | 137, LParen                                | 3, Separator          | SpLParenCaptor                                | Exactly match.                                                                                   |
| `)`            | 138, RParen                                | 3, Separator          | SpRParenCaptor                                | Exactly match.                                                                                   |
| `[`            | 139, LBrack                                | 3, Separator          | SpLBrackCaptor                                | Exactly match.                                                                                   |
| `]`            | 140, RBrack                                | 3, Separator          | SpRBrackCaptor                                | Exactly match.                                                                                   |
| `@`            | 141, At                                    | 3, Separator          | SpAtCaptor                                    | Exactly match.                                                                                   |
| `;`            | 142, Semicolon                             | 3, Separator          | SpSemicolonCaptor                             | Exactly match.                                                                                   |
| `,`            | 143, Comma                                 | 3, Separator          | SpCommaCaptor                                 | Exactly match.                                                                                   |
| `.`            | 144, Dot                                   | 3, Separator          | SpDotCaptor                                   | Exactly match.                                                                                   |
| `=`            | 145, Assign                                | 6, Operator           | JoAssignCaptor                                | Exactly match.                                                                                   |
| `>`            | 146, GreaterThan                           | 6, Operator           | JoGreaterThanCaptor                           | Exactly match.                                                                                   |
| `<`            | 147, LessThan                              | 6, Operator           | JoLessThanCaptor                              | Exactly match.                                                                                   |
| `!`            | 148, Not                                   | 6, Operator           | JoNotCaptor                                   | Exactly match.                                                                                   |
| `~`            | 149, Bitnot                                | 6, Operator           | JoBitnotCaptor                                | Exactly match.                                                                                   |
| `?`            | 150, Question                              | 6, Operator           | JoQuestionCaptor                              | Exactly match.                                                                                   |
| `:`            | 151, Colon                                 | 6, Operator           | JoColonCaptor                                 | Exactly match.                                                                                   |
| `==`           | 152, Equal                                 | 6, Operator           | JoEqualCaptor                                 | Exactly match.                                                                                   |
| `<=`           | 153, LessThanOrEqual                       | 6, Operator           | JoLessThanOrEqualCaptor                       | Exactly match.                                                                                   |
| `>=`           | 154, GreaterThanOrEqual                    | 6, Operator           | JoGreaterThanOrEqualCaptor                    | Exactly match.                                                                                   |
| `!=`           | 155, NotEqual                              | 6, Operator           | JoNotEqualCaptor                              | Exactly match.                                                                                   |
| `&&`           | 156, And                                   | 6, Operator           | JoAndCaptor                                   | Exactly match.                                                                                   |
| `\|\|`         | 157, Or                                    | 6, Operator           | JoOrCaptor                                    | Exactly match.                                                                                   |
| `++`           | 158, Increase                              | 6, Operator           | JoIncreaseCaptor                              | Exactly match.                                                                                   |
| `--`           | 159, Decrease                              | 6, Operator           | JoDecreaseCaptor                              | Exactly match.                                                                                   |
| `+`            | 160, Add                                   | 6, Operator           | JoAddCaptor                                   | Exactly match.                                                                                   |
| `-`            | 161, Subtract                              | 6, Operator           | JoSubtractCaptor                              | Exactly match.                                                                                   |
| `*`            | 162, Multiple                              | 6, Operator           | JoMultipleCaptor                              | Exactly match.                                                                                   |
| `/`            | 163, Divide                                | 6, Operator           | JoDivideCaptor                                | Exactly match.                                                                                   |
| `&`            | 164, Bitand                                | 6, Operator           | JoBitandCaptor                                | Exactly match.                                                                                   |
| `\|`           | 165, Bitor                                 | 6, Operator           | JoBitorCaptor                                 | Exactly match.                                                                                   |
| `^`            | 166, Xor                                   | 6, Operator           | JoXorCaptor                                   | Exactly match.                                                                                   |
| `%`            | 167, Mod                                   | 6, Operator           | JoModCaptor                                   | Exactly match.                                                                                   |
| `<<`           | 168, Lshift                                | 6, Operator           | JoLshiftCaptor                                | Exactly match.                                                                                   |
| `>>`           | 169, Rshift                                | 6, Operator           | JoRshiftCaptor                                | Exactly match.                                                                                   |
| `>>>`          | 170, Urshift                               | 6, Operator           | JoUrshiftCaptor                               | Exactly match.                                                                                   |
| `+=`           | 171, AddAssign                             | 6, Operator           | JoAddAssignCaptor                             | Exactly match.                                                                                   |
| `-=`           | 172, SubtractAssign                        | 6, Operator           | JoSubtractAssignCaptor                        | Exactly match.                                                                                   |
| `*=`           | 173, MultipleAssign                        | 6, Operator           | JoMultipleAssignCaptor                        | Exactly match.                                                                                   |
| `/=`           | 174, DivideAssign                          | 6, Operator           | JoDivideAssignCaptor                          | Exactly match.                                                                                   |
| `&=`           | 175, BitandAssign                          | 6, Operator           | JoBitandAssignCaptor                          | Exactly match.                                                                                   |
| `\|=`          | 176, BitorAssign                           | 6, Operator           | JoBitorAssignCaptor                           | Exactly match.                                                                                   |
| `^=`           | 177, XorAssign                             | 6, Operator           | JoXorAssignCaptor                             | Exactly match.                                                                                   |
| `%=`           | 178, ModAssign                             | 6, Operator           | JoModAssignCaptor                             | Exactly match.                                                                                   |
| `<<=`          | 179, LshiftAssign                          | 6, Operator           | JoLshiftAssignCaptor                          | Exactly match.                                                                                   |
| `>>=`          | 180, RshiftAssign                          | 6, Operator           | JoRshiftAssignCaptor                          | Exactly match.                                                                                   |
| `>>>=`         | 181, UrshiftAssign                         | 6, Operator           | JoUrshiftAssignCaptor                         | Exactly match.                                                                                   |
| `?=`           | 182, ElvisAssign                           | 6, Operator           | GoElvisAssignCaptor                           | Exactly match.                                                                                   |
| `...`          | 183, Ellipsis                              | 6, Operator           | JoEllipsisCaptor                              | Exactly match.                                                                                   |
| `//`           | 186, SingleLineCommentStartMark            | 5, Mark               | SingleLineCommentStartMarkCaptor              | Exactly match.                                                                                   |
| `/*`           | 188, MultipleLinesCommentStartMark         | 5, Mark               | MultipleLinesCommentStartMarkCaptor           | Exactly match.                                                                                   |
| `*/`           | 189, MultipleLinesCommentEndMark           | 5, Mark               | MultipleLinesCommentEndMarkCaptor             | Exactly match.                                                                                   |
| `#!`           | 192, ScriptCommandStartMark                | 5, Mark               | ScriptCommandStartMarkCaptor                  | Exactly match.                                                                                   |
| ` `            | 194, Whitespaces                           | 1, WhitespaceOrTabs   | WhitespacesCaptor                             | Starts with ` `, and all of rest chars are also ` `.                                             |
| `\t`           | 195, Tabs                                  | 1, WhitespaceOrTabs   | TabsCaptor                                    | Starts with `\t`, and all of rest chars are also `\t`.                                           |
| `\n`           | 196, NewLine                               | 2, NewLine            | Newline1CharCaptor                            | Exactly match.                                                                                   |
| `\r\n`         | 196, NewLine                               | 2, NewLine            | Newline2CharsCaptor                           | Exactly match.                                                                                   |
| `...`          | 198, Identifier                            | 8, Identifier         | IdentifierCaptor                              | First is one of the java identifier start chars, optional rest are any of java identifier chars. |
| `any`          | 199, UndeterminedChars                     | 13, UndeterminedChars | UndeterminedCharsCaptor                       | Any char doesn't captured by any captor.                                                         |

## TODO

- [ ] Annotation
- [ ] Generic Type
- [ ] Expression, auto weave by execution priority
- [ ] Anonymous Class
- [ ] Java Style Array Initializer
- [ ] List: []
- [ ] Map: [:]
- [ ] Acceptable token of 6 classes, before body appended
- [ ] Acceptable token of constructor/method, before body appended
- [ ] Acceptable token of field
- [ ] Closure
- [ ] Lambda
- [ ] Record class parameters
- [ ] Super call, e.g. A.super.x(), calling super class's/interface's member, extends trait classes or interfaces
- [ ] This call, e.g. B.this.y(), calling host class's member in not-static inner class
- [ ] Path element, to visit properties, or call executable (closure, lambda, method, etc)
- [ ] Build visitable variables in every level

## Notes

### GString interpolation start mark in Dollar Slashy GString Literal

```groovy
def abc = 'xyz'
println $/$$$abc $abc abc/$              // $$abc xyz abc, $abc of $$$abc not works
println $/$abc $$$abc abc/$              // xyz $xyz abc, $abc of $$$abc worked
println $/$$${abc} $abc abc/$            // $${abc} xyz abc, ${abc} of $$${abc} not works
println $/$abc $$${abc} abc/$            // xyz $xyz abc, ${abc} of $$${abc} worked
println $/$/$abc $abc abc/$              // /$abc xyz abc, $abc of $/$abc not works
println $/$abc $/$abc abc/$              // xyz /$abc abc, $abc of $/$abc not works 
println $/$/${abc} $abc abc/$            // /${abc} xyz abc, ${abc} of $/${abc} not works
println $/$abc $/${abc} abc/$            // xyz /${abc} abc, ${abc} of $/${abc} not works
```

Which means:

- `$$$abc` and `$$${abc}` works only when there is interpolation before,
- `$/$abc` and `$/${abc}` never works.
