import {IClass, IClassLoader, IClassLoaderHolder, IConstructor, IMember, IMethod, MemberType} from '../Interfaces';

export class ClassBaseHelper {
	private constructor() {
		// avoid extend
	}

	static isClassLoader(o: IClassLoader | IClassLoaderHolder): o is IClassLoader {
		return (o as IClassLoaderHolder)?.classLoader == null;
	}

	static isClass(o: IClassLoader | IClassLoaderHolder): o is IClass {
		return (o as IClass)?.isPrimitive != null;
	}

	static isConstructor(o: IClassLoader | IClassLoaderHolder): o is IConstructor {
		return (o as IMember)?.memberType === MemberType.CONSTRUCTOR;
	}

	static isMethod(o: IClassLoader | IClassLoaderHolder): o is IMethod {
		return (o as IMember)?.memberType === MemberType.METHOD;
	}
}