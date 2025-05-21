import {AstNodeCaptorCharFuncCheck} from './captor';
import {Character} from './character';

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
	const func: AstNodeCaptorCharFuncCheck = (char) => {
		return '0123456789'.includes(char);
	};
	func.describe = () => 'isNumeric';
	return func;
})();
