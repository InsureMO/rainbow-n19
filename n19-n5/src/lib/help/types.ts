import {Java} from '@rainbow-n19/n2';

type PackageName = Java.PackageName;
type IPackage = Java.IPackage;
type ClassName = Java.ClassName;
type IClass = Java.IClass;

export enum HelpStateMode {
	PACKAGE, CLASS, PACKAGES, CLASSES
}

export interface ItemGroup {
	name: string;
	items: Array<IPackage | IClass>;
	expanded: boolean;
}

export interface GroupFractionize {
	java?: boolean;
	groovy?: boolean;
}

export type PackageGroup = (packageName: Java.PackageName, fractionize?: GroupFractionize) => string;

export interface HelpState {
	mode: HelpStateMode;
	packageName?: PackageName;
	className?: ClassName;

	items?: Array<ItemGroup>;

	packageGroup: PackageGroup;
}