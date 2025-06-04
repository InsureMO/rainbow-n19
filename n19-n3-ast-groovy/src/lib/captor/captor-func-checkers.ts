import {AstNodeCaptorCharFuncCheck} from './captor';
import {Character} from './character';
import {Char} from './types';

export const isNotJavaIdentifierPart = (() => {
	const func: AstNodeCaptorCharFuncCheck = (char) => {
		return char == null // eof
			// the most frequency chars
			|| char === ' ' || char === '\r' || char === '\n' || char === '\t'
			// rule check
			|| !Character.isJavaIdentifierPart(char.codePointAt(0));
	};
	func.describe = () => 'isNotJavaIdentifierPart';
	return func;
})();

export const isJavaIdentifierStartAndNotIdentifierIgnorable = (() => {
	const func: AstNodeCaptorCharFuncCheck = (char) => {
		return Character.isJavaIdentifierStartAndNotIdentifierIgnorable(char.codePointAt(0));
	};
	func.describe = () => 'isJavaIdentifierStartAndNotIdentifierIgnorable';
	return func;
})();

export const isNumeric = (() => {
	const func: AstNodeCaptorCharFuncCheck = (char: Char): boolean => {
		const codepoint = char?.codePointAt(0);
		// 0 -> 48, 9 -> 57
		return codepoint != null && (codepoint >= 48 && codepoint <= 57);
	};
	func.describe = () => 'isNumeric';
	return func;
})();

export const isHexadecimalNumeric = (() => {
	const func: AstNodeCaptorCharFuncCheck = (char: Char): boolean => {
		const codepoint = char?.codePointAt(0);
		// 0 -> 48, 9 -> 57, a -> 97, f -> 102, A -> 65, F -> 70
		return codepoint != null &&
			((codepoint >= 48 && codepoint <= 57)
				|| (codepoint >= 97 && codepoint <= 102)
				|| (codepoint >= 65 && codepoint <= 70));
	};
	func.describe = () => 'isHexadecimalNumeric';
	return func;
})();

export const isOctalNumeric = (() => {
	const func: AstNodeCaptorCharFuncCheck = (char: Char): boolean => {
		const codepoint = char?.codePointAt(0);
		// 0 -> 48, 7 -> 55
		return codepoint != null && (codepoint >= 48 && codepoint <= 55);
	};
	func.describe = () => 'isOctalNumeric';
	return func;
})();
