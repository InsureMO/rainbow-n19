![Static Badge](https://img.shields.io/badge/InsureMO-777AF2.svg)

# n19/n3-ast-groovy

## Captors

```
┌ \t => TabsCaptor
├ \n => Newline1CharCaptor
├ \r·\n => Newline2CharsCaptor
├   => WhitespacesCaptor
├ - =>
│ ├ - => JoDecreaseCaptor
│ ├ = => JoSubtractAssignCaptor
│ ├ > => JoArrowCaptor
│ └ #fallback => JoSubtractCaptor
├ , => SpCommaCaptor
├ ; => SpSemicolonCaptor
├ : =>
│ ├ : => GoMethodReferenceCaptor
│ └ #fallback => JoColonCaptor
├ ! =>
│ ├ = =>
│ │ ├ = => GoNotIdenticalCaptor
│ │ └ #fallback => JoNotEqualCaptor
│ ├ i·n =>
│ │ ├ s·t·a·n·c·e·o·f·isNotJavaIdentifierPart => GoNotInstanceofCaptor
│ │ └ isNotJavaIdentifierPart => GoNotInCaptor
│ └ #fallback => JoNotCaptor
├ ? =>
│ ├ : => GoElvisCaptor
│ ├ ?·. => GoSafeChainDotCaptor
│ ├ . => GoSafeDotCaptor
│ ├ [ => GoSafeIndexCaptor
│ ├ = => JoElvisAssignCaptor
│ └ #fallback => JoQuestionCaptor
├ . =>
│ ├ . =>
│ │ ├ . => JoEllipsisCaptor
│ │ ├ < => GoRangeExclusiveRightCaptor
│ │ └ #fallback => GoRangeInclusiveCaptor
│ ├ & => GoMethodPointerCaptor
│ ├ isNumeric => LtNumericBasePartCaptorStartsWithDot
│ └ #fallback => SpDotCaptor
├ ' =>
│ ├ '·' => LtStringQuotationMarkMLCaptor
│ └ #fallback => LtStringQuotationMarkCaptor
├ " =>
│ ├ "·" => LtGStringQuotationMarkMLCaptor
│ └ #fallback => LtGStringQuotationMarkCaptor
├ ( => SpLParenCaptor
├ ) => SpRParenCaptor
├ [ => SpLBrackCaptor
├ ] => SpRBrackCaptor
├ { => SpLBraceCaptor
├ } => SpRBraceCaptor
├ @ =>
│ ├ i·n·t·e·r·f·a·c·e·isNotJavaIdentifierPart => JkAtInterfaceCaptor
│ ├ T·h·r·e·a·d·S·a·f·e·isNotJavaIdentifierPart => GkAtThreadSafeCaptor
│ └ #fallback => SpAtCaptor
├ * =>
│ ├ . => GoSpreadDotCaptor
│ ├ * =>
│ │ ├ = => GoPowerAssignCaptor
│ │ └ #fallback => GoPowerCaptor
│ ├ / => MultipleLinesCommentEndMarkCaptor
│ ├ = => JoMultipleAssignCaptor
│ └ #fallback => JoMultipleCaptor
├ / =>
│ ├ * => MultipleLinesCommentStartMarkCaptor
│ ├ / => SingleLineCommentStartMarkCaptor
│ ├ = => JoDivideAssignCaptor
│ ├ $ => LtDollarSlashyGStringQuotationEndMarkCaptor
│ └ #fallback => JoDivideCaptor
├ \ =>
│ ├ ' => LtStringSingleQuoteEscapeCaptor
│ ├ " => LtStringDoubleQuoteEscapeCaptor
│ ├ / => LtSlashyGStringBackslashEscapeCaptor
│ ├ \ => LtStringBackslashEscapeCaptor
│ ├ $ => LtStringDollarEscapeCaptor
│ ├ b => LtStringBackspaceEscapeCaptor
│ ├ f => LtStringFormFeedEscapeCaptor
│ ├ n => LtStringNewLineEscapeCaptor
│ ├ r => LtStringCarriageReturnEscapeCaptor
│ ├ s => LtStringSingleSpaceEscapeCaptor
│ ├ t => LtStringTabulationEscapeCaptor
│ └ u => LtStringUnicodeEscapeMarkCaptor
├ & =>
│ ├ & => JoAndCaptor
│ ├ = => JoBitandAssignCaptor
│ └ #fallback => JoBitandCaptor
├ #·! => ScriptCommandStartMarkCaptor
├ % =>
│ ├ = => JoModAssignCaptor
│ └ #fallback => JoModCaptor
├ ^ =>
│ ├ = => JoXorAssignCaptor
│ └ #fallback => JoXorCaptor
├ + =>
│ ├ + => JoIncreaseCaptor
│ ├ = => JoAddAssignCaptor
│ └ #fallback => JoAddCaptor
├ < =>
│ ├ .·. =>
│ │ ├ < => GoRangeExclusiveFullCaptor
│ │ └ #fallback => GoRangeExclusiveLeftCaptor
│ ├ <·= => JoLshiftAssignCaptor
│ ├ = =>
│ │ ├ > => GoSpaceshipCaptor
│ │ └ #fallback => JoLessThanOrEqualCaptor
│ └ #fallback => JoLessThanCaptor
├ = =>
│ ├ = =>
│ │ ├ = => GoIdenticalCaptor
│ │ ├ ~ => GoRegexMatchCaptor
│ │ └ #fallback => JoEqualCaptor
│ ├ ~ => GoRegexFindCaptor
│ └ #fallback => JoAssignCaptor
├ > =>
│ ├ = => JoGreaterThanOrEqualCaptor
│ ├ > =>
│ │ ├ = => JoRshiftAssignCaptor
│ │ └ >·= => JoUrshiftAssignCaptor
│ └ #fallback => JoGreaterThanCaptor
├ | =>
│ ├ = => JoBitorAssignCaptor
│ ├ | => JoOrCaptor
│ └ #fallback => JoBitorCaptor
├ ~ =>
│ ├ / => LtRegexpPatternStartMarkCaptor
│ └ #fallback => JoBitnotCaptor
├ $ =>
│ ├ / => LtDollarSlashyGStringQuotationStartMarkCaptor
│ ├ $ => LtDollarSlashyGStringDollarEscapeCaptor
│ └ #fallback => LtGStringInterpolationSymbolCaptor
├ 0 =>
│ ├ b·isNotJavaIdentifierPart => LtBinaryStartMarkCaptor
│ ├ x·isNotJavaIdentifierPart => LtHexadecimalStartMarkCaptor
│ └ #fallback => LtNumericBasePartCaptorStartsWith0
├ 1 => LtNumericBasePartCaptorStartsWith1
├ 2 => LtNumericBasePartCaptorStartsWith2
├ 3 => LtNumericBasePartCaptorStartsWith3
├ 4 => LtNumericBasePartCaptorStartsWith4
├ 5 => LtNumericBasePartCaptorStartsWith5
├ 6 => LtNumericBasePartCaptorStartsWith6
├ 7 => LtNumericBasePartCaptorStartsWith7
├ 8 => LtNumericBasePartCaptorStartsWith8
├ 9 => LtNumericBasePartCaptorStartsWith9
├ a =>
│ ├ b·s·t·r·a·c·t·isNotJavaIdentifierPart => JkAbstractCaptor
│ └ s =>
│   ├ s·e·r·t·isNotJavaIdentifierPart => JkAssertCaptor
│   └ isNotJavaIdentifierPart => GkAsCaptor
├ b =>
│ ├ o·o·l·e·a·n·isNotJavaIdentifierPart => PtBooleanCaptor
│ ├ r·e·a·k·isNotJavaIdentifierPart => JkBreakCaptor
│ └ y·t·e·isNotJavaIdentifierPart => PtByteCaptor
├ c =>
│ ├ a =>
│ │ ├ s·e·isNotJavaIdentifierPart => JkCaseCaptor
│ │ └ t·c·h·isNotJavaIdentifierPart => JkCatchCaptor
│ ├ h·a·r·isNotJavaIdentifierPart => PtCharCaptor
│ ├ l·a·s·s·isNotJavaIdentifierPart => JkClassCaptor
│ └ o·n =>
│   ├ s·t·isNotJavaIdentifierPart => JkConstCaptor
│   └ t·i·n·u·e·isNotJavaIdentifierPart => JkContinueCaptor
├ d =>
│ ├ e·f =>
│ │ ├ a·u·l·t·isNotJavaIdentifierPart => JkDefaultCaptor
│ │ └ isNotJavaIdentifierPart => GkDefCaptor
│ └ o =>
│   ├ u·b·l·e·isNotJavaIdentifierPart => PtDoubleCaptor
│   └ isNotJavaIdentifierPart => JkDoCaptor
├ e =>
│ ├ l·s·e·isNotJavaIdentifierPart => JkElseCaptor
│ ├ n·u·m·isNotJavaIdentifierPart => JkEnumCaptor
│ └ x·t·e·n·d·s·isNotJavaIdentifierPart => JkExtendsCaptor
├ f =>
│ ├ a·l·s·e·isNotJavaIdentifierPart => LtBooleanCaptor
│ ├ i·n·a·l =>
│ │ ├ l·y·isNotJavaIdentifierPart => JkFinallyCaptor
│ │ └ isNotJavaIdentifierPart => JkFinalCaptor
│ ├ l·o·a·t·isNotJavaIdentifierPart => PtFloatCaptor
│ └ o·r·isNotJavaIdentifierPart => JkForCaptor
├ g·o·t·o·isNotJavaIdentifierPart => JkGotoCaptor
├ i =>
│ ├ f·isNotJavaIdentifierPart => JkIfCaptor
│ ├ m·p =>
│ │ ├ l·e·m·e·n·t·s·isNotJavaIdentifierPart => JkImplementsCaptor
│ │ └ o·r·t·isNotJavaIdentifierPart => JkImportCaptor
│ └ n =>
│   ├ s·t·a·n·c·e·o·f·isNotJavaIdentifierPart => JoInstanceofCaptor
│   ├ t =>
│   │ ├ e·r·f·a·c·e·isNotJavaIdentifierPart => JkInterfaceCaptor
│   │ └ isNotJavaIdentifierPart => PtIntCaptor
│   └ isNotJavaIdentifierPart => GoInCaptor
├ l·o·n·g·isNotJavaIdentifierPart => PtLongCaptor
├ n =>
│ ├ a·t·i·v·e·isNotJavaIdentifierPart => JkNativeCaptor
│ ├ e·w·isNotJavaIdentifierPart => JkNewCaptor
│ ├ o·n·-·s·e·a·l·e·d·isNotJavaIdentifierPart => JkNonSealedCaptor
│ └ u·l·l·isNotJavaIdentifierPart => JkNullCaptor
├ p =>
│ ├ a·c·k·a·g·e·isNotJavaIdentifierPart => JkPackageCaptor
│ ├ e·r·m·i·t·s·isNotJavaIdentifierPart => JkPermitsCaptor
│ ├ r =>
│ │ ├ i·v·a·t·e·isNotJavaIdentifierPart => JkPrivateCaptor
│ │ └ o·t·e·c·t·e·d·isNotJavaIdentifierPart => JkProtectedCaptor
│ └ u·b·l·i·c·isNotJavaIdentifierPart => JkPublicCaptor
├ r·e =>
│ ├ c·o·r·d·isNotJavaIdentifierPart => JkRecordCaptor
│ └ t·u·r·n·isNotJavaIdentifierPart => JkReturnCaptor
├ s =>
│ ├ e·a·l·e·d·isNotJavaIdentifierPart => JkSealedCaptor
│ ├ h·o·r·t·isNotJavaIdentifierPart => PtShortCaptor
│ ├ t =>
│ │ ├ a·t·i·c·isNotJavaIdentifierPart => JkStaticCaptor
│ │ └ r·i·c·t·f·p·isNotJavaIdentifierPart => JkStrictfpCaptor
│ ├ u·p·e·r·isNotJavaIdentifierPart => JkSuperCaptor
│ ├ w·i·t·c·h·isNotJavaIdentifierPart => JkSwitchCaptor
│ └ y·n·c·h·r·o·n·i·z·e·d·isNotJavaIdentifierPart => JkSynchronizedCaptor
├ t =>
│ ├ h =>
│ │ ├ i·s·isNotJavaIdentifierPart => JkThisCaptor
│ │ └ r·o·w =>
│ │   ├ s·isNotJavaIdentifierPart => JkThrowsCaptor
│ │   └ isNotJavaIdentifierPart => JkThrowCaptor
│ └ r =>
│   ├ a =>
│   │ ├ i·t·isNotJavaIdentifierPart => GkTraitCaptor
│   │ └ n·s·i·e·n·t·isNotJavaIdentifierPart => JkTransientCaptor
│   ├ u·e·isNotJavaIdentifierPart => LtBooleanCaptor
│   └ y·isNotJavaIdentifierPart => JkTryCaptor
├ v =>
│ ├ a·r·isNotJavaIdentifierPart => JkVarCaptor
│ └ o =>
│   ├ i·d·isNotJavaIdentifierPart => JkVoidCaptor
│   └ l·a·t·i·l·e·isNotJavaIdentifierPart => JkVolatileCaptor
├ w·h·i·l·e·isNotJavaIdentifierPart => JkWhileCaptor
├ y·i·e·l·d·isNotJavaIdentifierPart => JkYieldCaptor
├ isJavaIdentifierStartAndNotIdentifierIgnorable => IdentifierCaptor
└ #fallback => UndeterminedCharsCaptor
```

## Recognizers

```
┌ NodeRecognizer
└ AbstractRecognizer
  └ AbstractAttemptableRecognizer
    └ AbstractRehydratableRecognizer
      ├ AbstractEagerRecognizer
      │ ├ AbstractCommentsRecognizer
      │ │ ├ MultipleLinesCommentsRecognizer [tokenId=185, tokenName=MultipleLinesCommentStartMark]
      │ │ └ SingleLineCommentsRecognizer [tokenId=183, tokenName=SingleLineCommentStartMark]
      │ └ ScriptCommandRecognizer [tokenId=189, tokenName=ScriptCommandStartMark]
      ├ AbstractPreservableRecognizer
      │ └ AbstractDeclarationCreateRecognizer
      │   ├ AbstractCsscmfDeclarationRecognizer
      │   │ ├ KwAbstractRecognizer [tokenId=14, tokenName=ABSTRACT]
      │   │ ├ KwAtInterfaceRecognizer [tokenId=16, tokenName=AT_INTERFACE]
      │   │ ├ KwClassRecognizer [tokenId=20, tokenName=CLASS]
      │   │ ├ KwDefRecognizer [tokenId=10, tokenName=DEF]
      │   │ ├ KwEnumRecognizer [tokenId=26, tokenName=ENUM]
      │   │ ├ KwFinalRecognizer [tokenId=28, tokenName=FINAL]
      │   │ ├ KwInterfaceRecognizer [tokenId=36, tokenName=INTERFACE]
      │   │ ├ KwNonSealedRecognizer [tokenId=39, tokenName=NON_SEALED]
      │   │ ├ KwPermitsRecognizer [tokenId=44, tokenName=PERMITS]
      │   │ ├ KwPrivateRecognizer [tokenId=45, tokenName=PRIVATE]
      │   │ ├ KwProtectedRecognizer [tokenId=46, tokenName=PROTECTED]
      │   │ ├ KwPublicRecognizer [tokenId=47, tokenName=PUBLIC]
      │   │ ├ KwRecordRecognizer [tokenId=48, tokenName=RECORD]
      │   │ ├ KwSealedRecognizer [tokenId=50, tokenName=SEALED]
      │   │ ├ KwStaticRecognizer [tokenId=51, tokenName=STATIC]
      │   │ ├ KwStrictfpRecognizer [tokenId=52, tokenName=STRICTFP]
      │   │ ├ KwSynchronizedRecognizer [tokenId=55, tokenName=SYNCHRONIZED]
      │   │ └ KwTraitRecognizer [tokenId=12, tokenName=TRAIT]
      │   ├ AbstractFieldDeclarationRecognizer
      │   │ ├ KwTransientRecognizer [tokenId=59, tokenName=TRANSIENT]
      │   │ └ KwVolatileRecognizer [tokenId=63, tokenName=VOLATILE]
      │   ├ AbstractMethodDeclarationRecognizer
      │   │ ├ KwDefaultRecognizer [tokenId=23, tokenName=DEFAULT]
      │   │ ├ KwNativeRecognizer [tokenId=37, tokenName=NATIVE]
      │   │ └ KwVoidRecognizer [tokenId=62, tokenName=VOID]
      │   ├ KwAssertRecognizer [tokenId=15, tokenName=ASSERT]
      │   ├ KwBreakRecognizer [tokenId=17, tokenName=BREAK]
      │   ├ KwCaseRecognizer [tokenId=18, tokenName=CASE]
      │   ├ KwCatchRecognizer [tokenId=19, tokenName=CATCH]
      │   ├ KwContinueRecognizer [tokenId=22, tokenName=CONTINUE]
      │   ├ KwDoRecognizer [tokenId=24, tokenName=DO]
      │   ├ KwElseRecognizer [tokenId=25, tokenName=ELSE]
      │   ├ KwFinallyRecognizer [tokenId=29, tokenName=FINALLY]
      │   ├ KwForRecognizer [tokenId=30, tokenName=FOR]
      │   ├ KwIfRecognizer [tokenId=32, tokenName=IF]
      │   ├ KwImportRecognizer [tokenId=34, tokenName=IMPORT]
      │   ├ KwPackageRecognizer [tokenId=43, tokenName=PACKAGE]
      │   ├ KwSwitchRecognizer [tokenId=54, tokenName=SWITCH]
      │   ├ KwTryRecognizer [tokenId=60, tokenName=TRY]
      │   ├ KwWhileRecognizer [tokenId=64, tokenName=WHILE]
      │   ├ SpAtRecognizer [tokenId=141, tokenName=At]
      │   ├ SpLBraceRecognizer [tokenId=135, tokenName=LBrace]
      │   └ SpLParenRecognizer [tokenId=137, tokenName=LParen]
      └ OpMultipleRecognizer [tokenId=162, tokenName=Multiple]
```
