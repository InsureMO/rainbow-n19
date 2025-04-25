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
