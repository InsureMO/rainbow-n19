export enum AstChars {
	Whitespace = ' ',
	Tab = '\t',
	NewLine = '\n',
	CarriageReturn = '\r',
	WellNumberMark = '#',
	ExclamationMark = '!',
	SlashMark = '/',
	AsteriskMark = '*',
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
}
