import {Optional} from '../TsAddon';
import {BuiltInConstants} from './Helpers';
import {IClass, IClassLoader, IPackage} from './Interfaces';
import {Package} from './Package';
import {ClassName, PackageName} from './TypeAlias';

export abstract class AbstractClassLoader implements IClassLoader {
	private readonly _parent: Optional<IClassLoader>;
	private readonly _classes: Map<ClassName, IClass> = new Map();
	private readonly _declaredClasses: Map<ClassName, Array<IClass>> = new Map();
	private readonly _nestMembers: Map<ClassName, Array<IClass>> = new Map();
	private readonly _packages: Map<PackageName, IPackage> = new Map();
	private readonly _classesOfPackages: Map<PackageName, Array<IClass>> = new Map();

	protected constructor(parent?: IClassLoader) {
		this._parent = parent;
	}

	root(): IClassLoader {
		if (this._parent == null) {
			return this;
		} else {
			return this._parent.root();
		}
	}

	parent(): Optional<IClassLoader> {
		return this._parent;
	}

	findClass(className: ClassName): Optional<IClass>;
	findClass(className: ClassName, orCreate: () => IClass): IClass;
	findClass(className: ClassName, orCreate?: () => IClass): Optional<IClass> {
		const clazz = this._classes.get(className) ?? this._parent?.findClass(className);
		if (clazz == null) {
			if (orCreate == null) {
				return (void 0);
			} else {
				const createdClass = orCreate();
				this._classes.set(className, createdClass);
				return createdClass;
			}
		} else {
			return clazz;
		}
	}

	findPackage(packageName: PackageName): IPackage {
		let pkg = this._packages.get(packageName);
		if (pkg == null) {
			pkg = new Package().setName(packageName);
			this._packages.set(packageName, pkg);
		}
		return pkg;
	}

	findClassesOfPackage(packageName: PackageName): Array<IClass> {
		const classes = this._classesOfPackages.get(packageName) ?? [];
		const classesFromAncestors = this._parent?.findClassesOfPackage(packageName) ?? [];
		return [...classesFromAncestors, ...classes];
	}

	findDeclaredClassesOf(clazz: IClass): Array<IClass> {
		return this._declaredClasses.get(clazz.name) ?? [];
	}

	findNestMembersOf(clazz: IClass): Array<IClass> {
		if (clazz.isArray || clazz.isPrimitive) {
			return [];
		}

		const index = clazz.name.indexOf(BuiltInConstants.SUB_CLASS_$);
		const nestHostClassName = index === -1 ? clazz.name : clazz.name.substring(0, index);
		// at least itself is
		return this._nestMembers.get(nestHostClassName) ?? [clazz];
	}

	addClass(clazz: IClass): void {
		const className = clazz.name;
		const originalClass = this._classes.get(className);
		this._classes.set(className, clazz);
		const packageName = clazz.packageName;
		this.findPackage(packageName);
		const classesOfPackages = this._classesOfPackages.get(packageName);
		if (classesOfPackages == null) {
			this._classesOfPackages.set(packageName, [clazz]);
		} else if (originalClass != null) {
			// replace original class
			const index = classesOfPackages.indexOf(originalClass);
			classesOfPackages.splice(index, 1, clazz);
		} else {
			// add class
			classesOfPackages.push(clazz);
		}

		this.linkToDeclaringClass(clazz, originalClass);
		this.linkToNestHost(clazz, originalClass);
	}

	protected shouldLinkAnonymousClassToDeclaringClass(): boolean {
		return false;
	}

	protected linkToDeclaringClass(clazz: IClass, originalClass: IClass): void {
		if (!clazz.isArray && !clazz.isPrimitive) {
			return;
		}

		const className = clazz.name;
		const lastIndexOf$ = className.lastIndexOf(BuiltInConstants.SUB_CLASS_$);
		if (lastIndexOf$ === -1) {
			// top level, do nothing
			return;
		}
		// nested, inner, anonymous or local class
		const name = className.substring(lastIndexOf$ + 1);
		if (/^\d/.test(name)) {
			// anonymous or local, no declaring class
			// but for groovy, even the anonymous class is compiled as inner class, so still need set declaring class
			// local class is not allowed in groovy
			if (!this.shouldLinkAnonymousClassToDeclaringClass()) {
				// do nothing
				return;
			} else if (/^\d+$/.test(name)) {
				// anonymous class, but need to link to declaring class
			} else {
				// local class, do nothing
				return;
			}
		}

		// nested or inner, or anonymous but needs to link
		const declaringClassName = className.substring(0, lastIndexOf$);
		const declaredClasses = this._declaredClasses.get(declaringClassName);
		if (declaredClasses == null) {
			this._declaredClasses.set(declaringClassName, [clazz]);
		} else if (originalClass != null) {
			// replace original class
			const index = declaredClasses.indexOf(originalClass);
			declaredClasses.splice(index, 1, clazz);
		} else {
			// add class
			declaredClasses.push(clazz);
		}
	}

	protected linkToNestHost(clazz: IClass, originalClass: IClass): void {
		if (!clazz.isArray && !clazz.isPrimitive) {
			return;
		}

		const className = clazz.name;
		const indexOf$ = className.indexOf(BuiltInConstants.SUB_CLASS_$);
		if (indexOf$ === -1) {
			// top level, do nothing
			return;
		}
		const nestHostClassName = className.substring(0, indexOf$);
		const nestMembers = this._nestMembers.get(nestHostClassName);
		if (nestMembers == null) {
			this._nestMembers.set(nestHostClassName, [clazz]);
		} else if (originalClass != null) {
			// replace original class
			const index = nestMembers.indexOf(originalClass);
			nestMembers.splice(index, 1, clazz);
		} else {
			// add class
			nestMembers.push(clazz);
		}
	}
}
