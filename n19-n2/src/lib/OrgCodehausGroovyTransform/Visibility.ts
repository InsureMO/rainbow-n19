import {Modifier} from '../Java';

export enum Visibility {
	PUBLIC = Modifier.PUBLIC,
	PROTECTED = Modifier.PROTECTED,
	PACKAGE_PRIVATE = 0,
	PRIVATE = Modifier.PRIVATE,
	UNDEFINED = -1
}
