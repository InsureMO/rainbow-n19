import {Optional} from '../TsAddon';
import {Class} from './Class';
import {BuiltInConstants, Modifier} from './Helpers';
import {IClass, IClassLoader, IPackage} from './Interfaces';
import {Package} from './Package';
import {ClassName, PackageName} from './TypeAlias';

export abstract class AbstractClassLoader implements IClassLoader {
	private _parent: Optional<IClassLoader>;
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

	setParent(parent?: IClassLoader): void {
		this._parent = parent;
	}

	parent(): Optional<IClassLoader> {
		return this._parent;
	}

	findClass(className: ClassName): Optional<IClass>;
	findClass(className: ClassName, orCreate: (classLoader: IClassLoader) => IClass): IClass;
	findClass(className: ClassName, orCreate?: (classLoader: IClassLoader) => IClass): Optional<IClass> {
		let clazz = this._classes.get(className);
		if (clazz == null) {
			if (className.startsWith(BuiltInConstants.ARR_HEAD)) {
				let componentTypeClassName = className.substring(1);
				if (componentTypeClassName.endsWith(BuiltInConstants.ARR_CLASS_TAIL)) {
					if (componentTypeClassName.startsWith(BuiltInConstants.ARR_HEAD)) {
						// component type class name still is an array, do nothing, find it
					} else {
						// component type class name is not an array, remove the array head and tail
						componentTypeClassName = componentTypeClassName.substring(1, componentTypeClassName.length - 1);
					}
				} else {
					// primitive type, no matter it is an array or not
				}
				const componentTypeClass = this.findClass(componentTypeClassName, orCreate);
				if (componentTypeClass != null) {
					// create array class and add to class loader which component type stays
					const classLoader = componentTypeClass.classLoader;
					clazz = new Class(classLoader, {
						name: className,
						modifiers: Modifier.PUBLIC & Modifier.SYNTHETIC & Modifier.BRIDGE
					});
					classLoader.addClass(clazz);
					return clazz;
				} else {
					return (void 0);
				}
			} else {
				clazz = this._parent?.findClass(className);
			}
		}
		if (clazz == null) {
			if (orCreate == null) {
				return (void 0);
			} else {
				const createdClass = orCreate(this);
				this._classes.set(className, createdClass);
				return createdClass;
			}
		} else {
			return clazz;
		}
	}

	findPackage(packageName: PackageName): IPackage {
		const pkg = this._packages.get(packageName) ?? this._parent?.findPackage(packageName);
		return pkg ?? new Package().setName(packageName);
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

	allPackages(): Array<IPackage> {
		// only packages including classes are collected
		const myPackages = [...this._packages.values()].filter(pkg => this._classesOfPackages.has(pkg.name));
		const packagesFromAncestors = this._parent?.allPackages() ?? [];
		return [...[...packagesFromAncestors, ...myPackages].reduce((map, pkg) => {
			map.set(pkg.name, pkg);
			return map;
		}, new Map<PackageName, IPackage>()).values()];
	}

	allClasses(): Array<IClass> {
		const myClasses = this._classes.values();
		const classesFomAncestors = this._parent?.allClasses() ?? [];
		return [...myClasses, ...classesFomAncestors];
	}

	addClass(clazz: IClass): void {
		const className = clazz.name;
		const originalClass = this._classes.get(className);
		this._classes.set(className, clazz);
		const packageName = clazz.packageName;
		if (!this._packages.has(packageName)) {
			this._packages.set(packageName, new Package().setName(packageName));
		}
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
		if (clazz.isArray || clazz.isPrimitive) {
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
		if (clazz.isArray || clazz.isPrimitive) {
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

	removeClass(className: ClassName): void {
		const exists = this._classes.get(className);
		if (exists == null) {
			this._parent?.removeClass(className);
			return;
		}
		this._declaredClasses.delete(className);
		const indexOf$ = className.indexOf(BuiltInConstants.SUB_CLASS_$);
		if (indexOf$ === -1) {
			// top level
			this._nestMembers.delete(className);
		}
		const packageName = exists.packageName;
		const classesInPackage = this._classesOfPackages.get(packageName);
		if (classesInPackage.length === 1) {
			this._classesOfPackages.delete(packageName);
			this._packages.delete(packageName);
		} else {
			const index = classesInPackage.indexOf(exists);
			classesInPackage.splice(index, 1);
		}
	}

	protected onMe(classOrName: ClassName | IClass): boolean {
		const className = typeof classOrName === 'string' ? classOrName : classOrName.name;
		return this._classes.has(className);
	}

	allMyClasses(): Array<IClass> {
		return [...this._classes.values()];
	}
}
