import {AstNodeCaptorCharFuncCheck} from './captor';
import {Character} from './character';

export const isNotJavaIdentifierPart = (() => {
	const func: AstNodeCaptorCharFuncCheck = (char) => {
		return char == null || !Character.isJavaIdentifierPart(char.codePointAt(0));
	};
	func.describe = () => 'isNotJavaIdentifierPart';
	return func;
})();
