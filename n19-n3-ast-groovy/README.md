![Static Badge](https://img.shields.io/badge/InsureMO-777AF2.svg)

# n19/n3-ast-groovy

## Atomic Tokens

| Token            | Id                                      | Type                | Captor                                          | Capture Rule                                                                      |
|------------------|-----------------------------------------|---------------------|-------------------------------------------------|-----------------------------------------------------------------------------------|
| ` ` (space)      | `Whitespaces`                           | `WhitespaceOrTabs`  | `WhitespacesCaptor`                             | Continuous same chars                                                             |
| `\t`             | `Tabs`                                  | `WhitespaceOrTabs`  | `TabsCaptor`                                    | Continuous same chars                                                             |
| `\n`             | `NewLine`                               | `NewLine`           | `Newline1CharCaptor`                            | Single char                                                                       |
| `\r\n`           | `NewLine`                               | `NewLine`           | `Newline2CharCaptor`                            | Multiple chars                                                                    |
| `,`              | `Comma`                                 | `Separator`         | `SpCommaCaptor`                                 | Single char                                                                       |
| `;`              | `Semicolon`                             | `Separator`         | `SpSemicolonCaptor`                             | Single char                                                                       |
| `.`              | `Dot`                                   | `Separator`         | `SpDotCaptor`                                   | Single char                                                                       |
| `(`              | `LParen`                                | `Separator`         | `SpLParenCaptor`                                | Single char                                                                       |
| `)`              | `RParen`                                | `Separator`         | `SpRParenCaptor`                                | Single char                                                                       |
| `[`              | `LBrack`                                | `Separator`         | `SpLBrackCaptor`                                | Single char                                                                       |
| `]`              | `RBrack`                                | `Separator`         | `SpRBrackCaptor`                                | Single char                                                                       |
| `{`              | `LBrace`                                | `Separator`         | `SpLBraceCaptor`                                | Single char                                                                       |
| `}`              | `RBrace`                                | `Separator`         | `SpRBraceCaptor`                                | Single char                                                                       |
| `@`              | `At`                                    | `Separator`         | `SpAtCaptor`                                    | Single char                                                                       |
| `-`              | `Subtract`                              | `Operator`          | `JoSubtractCaptor`                              | Single char                                                                       |
| `--`             | `Decrease`                              | `Operator`          | `JoDecreaseCaptor`                              | Multiple chars                                                                    |
| `-=`             | `SubtractAssign`                        | `Operator`          | `JoSubtractAssignCaptor`                        | Multiple chars                                                                    |
| `->`             | `Arrow`                                 | `Operator`          | `JoArrowCaptor`                                 | Multiple chars                                                                    |
| `:`              | `Colon`                                 | `Operator`          | `JoColonCaptor`                                 | Single char                                                                       |
| `::`             | `MethodReference`                       | `Operator`          | `JoMethodReferenceCaptor`                       | Multiple chars                                                                    |
| `!`              | `Not`                                   | `Operator`          | `JoNotCaptor`                                   | Single char                                                                       |
| `!=`             | `NotEqual`                              | `Operator`          | `JoNotEqualCaptor`                              | Multiple chars                                                                    |
| `!==`            | `NotIdentical`                          | `Operator`          | `GoNotIdenticalCaptor`                          | Multiple chars                                                                    |
| `!in`            | `NOT_IN`                                | `Operator`          | `GoNotInCaptor`                                 | Keyword, ends with not java identifier char                                       |
| `!instanceof`    | `NOT_INSTANCEOF`                        | `Operator`          | `GoNotInstanceofCaptor`                         | Keyword, ends with not java identifier char                                       |
| `?`              | `Question`                              | `Operator`          | `JoQuestionCaptor`                              | Single char                                                                       |
| `?:`             | `Elvis`                                 | `Operator`          | `GoElvisCaptor`                                 | Multiple chars                                                                    |
| `??.`            | `SafeChainDot`                          | `Operator`          | `GoSafeChainDotCaptor`                          | Multiple chars                                                                    |
| `?.`             | `SafeDot`                               | `Operator`          | `GoSafeDotCaptor`                               | Multiple chars                                                                    |
| `?[`             | `SafeIndex`                             | `Operator`          | `GoSafeIndexCaptor`                             | Multiple chars                                                                    |
| `?=`             | `ElvisAssign`                           | `Operator`          | `GoElvisAssignCaptor`                           | Multiple chars                                                                    |
| `.&`             | `MethodPointer`                         | `Operator`          | `GoMethodPointerCaptor`                         | Multiple chars                                                                    |
| `..`             | `RangeInclusive`                        | `Operator`          | `GoRangeInclusiveCaptor`                        | Multiple chars                                                                    |
| `...`            | `Ellipsis`                              | `Operator`          | `JoEllipsisCaptor`                              | Multiple chars                                                                    |
| `..<`            | `RangeExclusiveRight`                   | `Operator`          | `GoRangeExclusiveRightCaptor`                   | Multiple chars                                                                    |
| `]`              | `SafeIndexClose`                        | `Operator`          |                                                 |                                                                                   |
| `*`              | `Multiple`                              | `Operator`          | `JoMultipleCaptor`                              | Single char                                                                       |
| `*.`             | `SpreadDot`                             | `Operator`          | `GoSpreadDotCaptor`                             | Multiple chars                                                                    |
| `**`             | `Power`                                 | `Operator`          | `GoPowerCaptor`                                 | Multiple chars                                                                    |
| `**=`            | `PowerAssign`                           | `Operator`          | `GoPowerAssignCaptor`                           | Multiple chars                                                                    |
| `*=`             | `MultipleAssign`                        | `Operator`          | `JoMultipleAssignCaptor`                        | Multiple chars                                                                    |
| `/`              | `Divide`                                | `Operator`          | `JoDivideCaptor`                                | Single char                                                                       |
| `/=`             | `DivideAssign`                          | `Operator`          | `JoDivideAssignCaptor`                          | Multiple chars                                                                    |
| `&`              | `Bitand`                                | `Operator`          | `JoBitandCaptor`                                | Single char                                                                       |
| `&&`             | `And`                                   | `Operator`          | `JoAndCaptor`                                   | Multiple chars                                                                    |
| `&=`             | `BitandAssign`                          | `Operator`          | `JoBitandAssignCaptor`                          | Multiple chars                                                                    |
| `%`              | `Mod`                                   | `Operator`          | `JoModCaptor`                                   | Single char                                                                       |
| `%=`             | `ModAssign`                             | `Operator`          | `JoModAssignCaptor`                             | Multiple chars                                                                    |
| `^`              | `Xor`                                   | `Operator`          | `JoXorCaptor`                                   | Single char                                                                       |
| `^=`             | `XorAssign`                             | `Operator`          | `JoXorAssignCaptor`                             | Multiple chars                                                                    |
| `+`              | `Add`                                   | `Operator`          | `JoAddCaptor`                                   | Single char                                                                       |
| `++`             | `Increase`                              | `Operator`          | `JoIncreaseCaptor`                              | Multiple chars                                                                    |
| `+=`             | `AddAssign`                             | `Operator`          | `JoAddAssignCaptor`                             | Multiple chars                                                                    |
| `<`              | `LessThan`                              | `Operator`          | `JoLessThanCaptor`                              | Single char                                                                       |
| `<..`            | `RangeExclusiveLeft`                    | `Operator`          | `GoRangeExclusiveLeftCaptor`                    | Multiple chars                                                                    |
| `<..<`           | `RangeExclusiveFull`                    | `Operator`          | `GoRangeExclusiveFullCaptor`                    | Multiple chars                                                                    |
| `<<`             | `LshiftAssign`                          | `Operator`          | `JoLshiftAssignCaptor`                          | Multiple chars                                                                    |
| `<=`             | `LessThanOrEqual`                       | `Operator`          | `JoLessThanOrEqualCaptor`                       | Multiple chars                                                                    |
| `<=>`            | `Spaceship`                             | `Operator`          | `GoSpaceshipCaptor`                             | Multiple chars                                                                    |
| `=`              | `Assign`                                | `Operator`          | `JoAssignCaptor`                                | Single char                                                                       |
| `==`             | `Equal`                                 | `Operator`          | `JoEqualCaptor`                                 | Multiple chars                                                                    |
| `===`            | `Identical`                             | `Operator`          | `GoIdenticalCaptor`                             | Multiple chars                                                                    |
| `==~`            | `RegexMatch`                            | `Operator`          | `GoRegexMatchCaptor`                            | Multiple chars                                                                    |
| `=~`             | `RegexFind`                             | `Operator`          | `GoRegexFindCaptor`                             | Multiple chars                                                                    |
| `>`              | `GreaterThan`                           | `Operator`          | `JoGreaterThanCaptor`                           | Single char                                                                       |
| `>=`             | `GreaterThanOrEqual`                    | `Operator`          | `JoGreaterThanOrEqualCaptor`                    | Multiple chars                                                                    |
| `>>=`            | `RshiftAssign`                          | `Operator`          | `JoRshiftAssignCaptor`                          | Multiple chars                                                                    |
| `>>>=`           | `UrshiftAssign`                         | `Operator`          | `JoUrshiftAssignCaptor`                         | Multiple chars                                                                    |
| `\|`             | `Bitor`                                 | `Operator`          | `JoBitorCaptor`                                 | Single char                                                                       |
| `\|=`            | `BitorAssign`                           | `Operator`          | `JoBitorAssignCaptor`                           | Multiple chars                                                                    |
| `\|\|`           | `Or`                                    | `Operator`          | `JoOrCaptor`                                    | Multiple chars                                                                    |
| `in`             | `IN`                                    | `Operator`          | `GoInCaptor`                                    | Keyword, ends with not java identifier char                                       |
| `instanceof`     | `INSTANCEOF`                            | `Operator`          | `JoInstanceofCaptor`                            | Keyword, ends with not java identifier char                                       |
| `~`              | `Bitnot`                                | `Mark`              | `JoBitnotCaptor`                                | Single char                                                                       |
| `'`              | `StringQuotationMark`                   | `Mark`              | `LtStringQuotationMarkCaptor`                   | Single char                                                                       |
| `'''`            | `StringQuotationMarkML`                 | `Mark`              | `LtStringQuotationMarkMLCaptor`                 | Multiple chars                                                                    |
| `"`              | `GStringQuotationMark`                  | `Mark`              | `LtGStringQuotationMarkCaptor`                  | Single char                                                                       |
| `"""`            | `GStringQuotationMarkML`                | `Mark`              | `LtGStringQuotationMarkMLCaptor`                | Multiple chars                                                                    |
| `*`              | `ImportAllMark`                         | `Mark`              |                                                 |                                                                                   |
| `*/`             | `MultipleLinesCommentEndMark`           | `Mark`              | `MultipleLinesCommentEndMarkCaptor`             | Multiple chars                                                                    |
| `/`              | `SlashyGStringQuotationMark`            | `Mark`              |                                                 |                                                                                   |
| `/*`             | `MultipleLinesCommentStartMark`         | `Mark`              | `MultipleLinesCommentStartMarkCaptor`           | Multiple chars                                                                    |
| `//`             | `SingleLineCommentStartMark`            | `Mark`              | `SingleLineCommentStartMarkCaptor`              | Multiple chars                                                                    |
| `/$`             | `DollarSlashyGStringQuotationEndMark`   | `Mark`              | `LtDollarSlashyGStringQuotationEndMarkCaptor`   | Multiple chars                                                                    |
| `\'`             | `StringSingleQuoteEscape`               | `Mark`              | `LtStringSingleQuoteEscapeCaptor`               | Multiple chars                                                                    |
| `\"`             | `StringDoubleQuoteEscape`               | `Mark`              | `LtStringDoubleQuoteEscapeCaptor`               | Multiple chars                                                                    |
| `\/`             | `SlashyGStringBackslashEscape`          | `Mark`              | `LtSlashyGStringBackslashEscapeCaptor`          | Multiple chars                                                                    |
| `\\`             | `StringBackslashEscape`                 | `Mark`              | `LtStringBackslashEscapeCaptor`                 | Multiple chars                                                                    |
| `\$`             | `StringDollarEscape`                    | `Mark`              | `LtStringDollarEscapeCaptor`                    | Multiple chars                                                                    |
| `\b`             | `StringBackspaceEscape`                 | `Mark`              | `LtStringBackspaceEscapeCaptor`                 | Multiple chars                                                                    |
| `\f`             | `StringFormFeedEscape`                  | `Mark`              | `LtStringFormFeedEscapeCaptor`                  | Multiple chars                                                                    |
| `\n`             | `StringNewLineEscape`                   | `Mark`              | `LtStringNewLineEscapeCaptor`                   | Multiple chars                                                                    |
| `\r`             | `StringCarriageReturnEscape`            | `Mark`              | `LtStringCarriageReturnEscapeCaptor`            | Multiple chars                                                                    |
| `\s`             | `StringSingleSpaceEscape`               | `Mark`              | `LtStringSingleSpaceEscapeCaptor`               | Multiple chars                                                                    |
| `\t`             | `StringTabulationEscape`                | `Mark`              | `LtStringTabulationEscapeCaptor`                | Multiple chars                                                                    |
| `\u`             | `StringUnicodeEscapeMark`               | `Mark`              | `LtStringUnicodeEscapeMarkCaptor`               | Multiple chars                                                                    |
| `#!`             | `ScriptCommandStartMark`                | `Mark`              | `ScriptCommandStartMarkCaptor`                  | Multiple chars                                                                    |
| `~/`             | `RegexpPatternStartMark`                | `Mark`              | `LtRegexpPatternStartMarkCaptor`                | Multiple chars                                                                    |
| `$`              | `GStringInterpolationStartMark`         | `Mark`              | `LtGStringInterpolationStartMarkCaptor`         | Single char                                                                       |
| `${`             | `GStringInterpolationLBraceStartMark`   | `Mark`              | `LtGStringInterpolationLBraceStartMarkCaptor`   | Multiple chars                                                                    |
| `$/`             | `DollarSlashyGStringQuotationStartMark` | `Mark`              | `LtDollarSlashyGStringQuotationStartMarkCaptor` | Multiple chars                                                                    |
| `$$`             | `DollarSlashyGStringDollarEscape`       | `Mark`              | `LtDollarSlashyGStringDollarEscapeCaptor`       | Multiple chars                                                                    |
| `}`              | `GStringInterpolationRBraceEndMark`     | `Mark`              |                                                 |                                                                                   |
| `0b`             | `BinaryStartMark`                       | `Mark`              | `LtBinaryStartMarkCaptor`                       | Multiple chars                                                                    |
| `0x`             | `HexadecimalStartMark`                  | `Mark`              | `LtHexadecimalStartMarkCaptor`                  | Multiple chars                                                                    |
| `0[0-9_\.]*`     | `NumericBasePart`                       | `NumberLiteral`     | `LtNumericBasePartCaptorStartsWith0`            | `.` cannot appear twice,<br>A digit from 0 to 9 must appear immediately after `.` |
| `1[0-9_\.]*`     | `NumericBasePart`                       | `NumberLiteral`     | `LtNumericBasePartCaptorStartsWith1`            | `.` cannot appear twice,<br>A digit from 0 to 9 must appear immediately after `.` |
| `2[0-9_\.]*`     | `NumericBasePart`                       | `NumberLiteral`     | `LtNumericBasePartCaptorStartsWith2`            | `.` cannot appear twice,<br>A digit from 0 to 9 must appear immediately after `.` |
| `3[0-9_\.]*`     | `NumericBasePart`                       | `NumberLiteral`     | `LtNumericBasePartCaptorStartsWith3`            | `.` cannot appear twice,<br>A digit from 0 to 9 must appear immediately after `.` |
| `4[0-9_\.]*`     | `NumericBasePart`                       | `NumberLiteral`     | `LtNumericBasePartCaptorStartsWith4`            | `.` cannot appear twice,<br>A digit from 0 to 9 must appear immediately after `.` |
| `5[0-9_\.]*`     | `NumericBasePart`                       | `NumberLiteral`     | `LtNumericBasePartCaptorStartsWith5`            | `.` cannot appear twice,<br>A digit from 0 to 9 must appear immediately after `.` |
| `6[0-9_\.]*`     | `NumericBasePart`                       | `NumberLiteral`     | `LtNumericBasePartCaptorStartsWith6`            | `.` cannot appear twice,<br>A digit from 0 to 9 must appear immediately after `.` |
| `7[0-9_\.]*`     | `NumericBasePart`                       | `NumberLiteral`     | `LtNumericBasePartCaptorStartsWith7`            | `.` cannot appear twice,<br>A digit from 0 to 9 must appear immediately after `.` |
| `8[0-9_\.]*`     | `NumericBasePart`                       | `NumberLiteral`     | `LtNumericBasePartCaptorStartsWith8`            | `.` cannot appear twice,<br>A digit from 0 to 9 must appear immediately after `.` |
| `9[0-9_\.]*`     | `NumericBasePart`                       | `NumberLiteral`     | `LtNumericBasePartCaptorStartsWith9`            | `.` cannot appear twice,<br>A digit from 0 to 9 must appear immediately after `.` |
| `\.[0-9][0-9_]*` | `NumericBasePart`                       | `NumberLiteral`     | `LtNumericBasePartCaptorStartsWithDot`          |                                                                                   |
| `false`          | `BooleanLiteral`                        | `BooleanLiteral`    | `LtBooleanFalseCaptor`                          | Keyword, ends with not java identifier char                                       |
| `true`           | `BooleanLiteral`                        | `BooleanLiteral`    | `LtBooleanTrueCaptor`                           | Keyword, ends with not java identifier char                                       |
| `@interface`     | `AT_INTERFACE`                          | `Keyword`           | `JkAtInterfaceCaptor`                           | Keyword, ends with not java identifier char                                       |
| `@ThreadSafe`    | `THREADSAFE`                            | `Keyword`           | `GkAtThreadSafeCaptor`                          | Keyword, ends with not java identifier char                                       |
| `abstract`       | `ABSTRACT`                              | `Keyword`           | `JkAbstractCaptor`                              | Keyword, ends with not java identifier char                                       |
| `assert`         | `ASSERT`                                | `Keyword`           | `JkAssertCaptor`                                | Keyword, ends with not java identifier char                                       |
| `as`             | `AS`                                    | `Keyword`           | `GkAsCaptor`                                    | Keyword, ends with not java identifier char                                       |
| `break`          | `BREAK`                                 | `Keyword`           | `JkBreakCaptor`                                 | Keyword, ends with not java identifier char                                       |
| `case`           | `CASE`                                  | `Keyword`           | `JkCaseCaptor`                                  | Keyword, ends with not java identifier char                                       |
| `catch`          | `CATCH`                                 | `Keyword`           | `JkCatchCaptor`                                 | Keyword, ends with not java identifier char                                       |
| `class`          | `CLASS`                                 | `Keyword`           | `JkClassCaptor`                                 | Keyword, ends with not java identifier char                                       |
| `const`          | `CONST`                                 | `Keyword`           | `JkConstCaptor`                                 | Keyword, ends with not java identifier char                                       |
| `continue`       | `CONTINUE`                              | `Keyword`           | `JkContinueCaptor`                              | Keyword, ends with not java identifier char                                       |
| `def`            | `DEF`                                   | `Keyword`           | `GkDefCaptor`                                   | Keyword, ends with not java identifier char                                       |
| `default`        | `DEFAULT`                               | `Keyword`           | `JkDefaultCaptor`                               | Keyword, ends with not java identifier char                                       |
| `do`             | `DO`                                    | `Keyword`           | `JkDoCaptor`                                    | Keyword, ends with not java identifier char                                       |
| `else`           | `ELSE`                                  | `Keyword`           | `JkElseCaptor`                                  | Keyword, ends with not java identifier char                                       |
| `enum`           | `ENUM`                                  | `Keyword`           | `JkEnumCaptor`                                  | Keyword, ends with not java identifier char                                       |
| `extends`        | `EXTENDS`                               | `Keyword`           | `JkExtendsCaptor`                               | Keyword, ends with not java identifier char                                       |
| `final`          | `FINAL`                                 | `Keyword`           | `JkFinalCaptor`                                 | Keyword, ends with not java identifier char                                       |
| `finally`        | `FINALLY`                               | `Keyword`           | `JkFinallyCaptor`                               | Keyword, ends with not java identifier char                                       |
| `for`            | `FOR`                                   | `Keyword`           | `JkForCaptor`                                   | Keyword, ends with not java identifier char                                       |
| `goto`           | `GOTO`                                  | `Keyword`           | `JkGotoCaptor`                                  | Keyword, ends with not java identifier char                                       |
| `if`             | `IF`                                    | `Keyword`           | `JkIfCaptor`                                    | Keyword, ends with not java identifier char                                       |
| `implements`     | `IMPLEMENTS`                            | `Keyword`           | `JkImplementsCaptor`                            | Keyword, ends with not java identifier char                                       |
| `import`         | `IMPORT`                                | `Keyword`           | `JkImportCaptor`                                | Keyword, ends with not java identifier char                                       |
| `interface`      | `INTERFACE`                             | `Keyword`           | `JkInterfaceCaptor`                             | Keyword, ends with not java identifier char                                       |
| `native`         | `NATIVE`                                | `Keyword`           | `JkNativeCaptor`                                | Keyword, ends with not java identifier char                                       |
| `new`            | `NEW`                                   | `Keyword`           | `JkNewCaptor`                                   | Keyword, ends with not java identifier char                                       |
| `non-sealed`     | `NON_SEALED`                            | `Keyword`           | `JkNonSealedCaptor`                             | Keyword, ends with not java identifier char                                       |
| `null`           | `NULL`                                  | `Keyword`           | `JkNullCaptor`                                  | Keyword, ends with not java identifier char                                       |
| `package`        | `PACKAGE`                               | `Keyword`           | `JkPackageCaptor`                               | Keyword, ends with not java identifier char                                       |
| `permits`        | `PERMITS`                               | `Keyword`           | `JkPermitsCaptor`                               | Keyword, ends with not java identifier char                                       |
| `private`        | `PRIVATE`                               | `Keyword`           | `JkPrivateCaptor`                               | Keyword, ends with not java identifier char                                       |
| `protected`      | `PROTECTED`                             | `Keyword`           | `JkProtectedCaptor`                             | Keyword, ends with not java identifier char                                       |
| `public`         | `PUBLIC`                                | `Keyword`           | `JkPublicCaptor`                                | Keyword, ends with not java identifier char                                       |
| `record`         | `RECORD`                                | `Keyword`           | `JkRecordCaptor`                                | Keyword, ends with not java identifier char                                       |
| `return`         | `RETURN`                                | `Keyword`           | `JkReturnCaptor`                                | Keyword, ends with not java identifier char                                       |
| `sealed`         | `SEALED`                                | `Keyword`           | `JkSealedCaptor`                                | Keyword, ends with not java identifier char                                       |
| `static`         | `STATIC`                                | `Keyword`           | `JkStaticCaptor`                                | Keyword, ends with not java identifier char                                       |
| `strictfp`       | `STRICTFP`                              | `Keyword`           | `JkStrictfpCaptor`                              | Keyword, ends with not java identifier char                                       |
| `super`          | `SUPER`                                 | `Keyword`           | `JkSuperCaptor`                                 | Keyword, ends with not java identifier char                                       |
| `switch`         | `SWITCH`                                | `Keyword`           | `JkSwitchCaptor`                                | Keyword, ends with not java identifier char                                       |
| `synchronized`   | `SYNCHRONIZED`                          | `Keyword`           | `JkSynchronizedCaptor`                          | Keyword, ends with not java identifier char                                       |
| `this`           | `THIS`                                  | `Keyword`           | `JkThisCaptor`                                  | Keyword, ends with not java identifier char                                       |
| `throw`          | `THROW`                                 | `Keyword`           | `JkThrowCaptor`                                 | Keyword, ends with not java identifier char                                       |
| `throws`         | `THROWS`                                | `Keyword`           | `JkThrowsCaptor`                                | Keyword, ends with not java identifier char                                       |
| `trait`          | `TRAIT`                                 | `Keyword`           | `GkTraitCaptor`                                 | Keyword, ends with not java identifier char                                       |
| `transient`      | `TRANSIENT`                             | `Keyword`           | `JkTransientCaptor`                             | Keyword, ends with not java identifier char                                       |
| `try`            | `TRY`                                   | `Keyword`           | `JkTryCaptor`                                   | Keyword, ends with not java identifier char                                       |
| `var`            | `VAR`                                   | `Keyword`           | `JkVarCaptor`                                   | Keyword, ends with not java identifier char                                       |
| `try`            | `VOID`                                  | `Keyword`           | `JkVoidCaptor`                                  | Keyword, ends with not java identifier char                                       |
| `volatile`       | `VOLATILE`                              | `Keyword`           | `JkVolatileCaptor`                              | Keyword, ends with not java identifier char                                       |
| `while`          | `WHILE`                                 | `Keyword`           | `JkWhileCaptor`                                 | Keyword, ends with not java identifier char                                       |
| `yield`          | `YIELD`                                 | `Keyword`           | `JkYieldCaptor`                                 | Keyword, ends with not java identifier char                                       |
| `boolean`        | `BOOLEAN`                               | `PrimitiveType`     | `PtBooleanCaptor`                               | Keyword, ends with not java identifier char                                       |
| `byte`           | `BYTE`                                  | `PrimitiveType`     | `PtByteCaptor`                                  | Keyword, ends with not java identifier char                                       |
| `char`           | `CHAR`                                  | `PrimitiveType`     | `PtCharCaptor`                                  | Keyword, ends with not java identifier char                                       |
| `double`         | `DOUBLE`                                | `PrimitiveType`     | `PtDoubleCaptor`                                | Keyword, ends with not java identifier char                                       |
| `float`          | `FLOAT`                                 | `PrimitiveType`     | `PtFloatCaptor`                                 | Keyword, ends with not java identifier char                                       |
| `int`            | `INT`                                   | `PrimitiveType`     | `PtIntCaptor`                                   | Keyword, ends with not java identifier char                                       |
| `long`           | `LONG`                                  | `PrimitiveType`     | `PtLongCaptor`                                  | Keyword, ends with not java identifier char                                       |
| `short`          | `SHORT`                                 | `PrimitiveType`     | `PtShortCaptor`                                 | Keyword, ends with not java identifier char                                       |
| any              | `Identifier`                            | `Identifier`        | `IdentifierCaptor`                              | Starts with java identifier char,<br>Ends with not java identifier char           |
| `*`              | `MultipleLinesCommentsHeadAsterisks`    | `Chars`             |                                                 |                                                                                   |
| any              | `CommentKeyword`                        | `Chars`             |                                                 |                                                                                   |
| any              | `CommentHighlightChars`                 | `Chars`             |                                                 |                                                                                   |
| any              | `Chars`                                 | `Chars`             |                                                 |                                                                                   |
| any              | `UndeterminedChars`                     | `UndeterminedChars` | `UndeterminedCharsCaptor`                       |                                                                                   |

## Token not yet processed

- NumericSignPart
- NumericBasePart
- NumericUnderscorePart
- NumericSuffixPart
- BinaryStartMark
- BinaryLiteral
- OctalStartMark
- OctalLiteral
- HexadecimalStartMark
- HexadecimalLiteral
- IntegralLiteral
- DecimalExponentSymbol
- DecimalExponentPart
- DecimalLiteral
- CharLiteral
- StringMLFirstNewLineEraser
- StringUnicodeEscapeContent
- StringLiteral
- GStringContent
- GStringInterpolation
- GStringLiteral
- SlashyGStringLiteral
- DollarSlashyGStringLiteral
