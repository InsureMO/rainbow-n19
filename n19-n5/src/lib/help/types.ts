import {Java} from '@rainbow-n19/n2';

export enum HelpStateMode {
	PACKAGE, CLASS, PACKAGES, CLASSES
}

export interface GroupFractionize {
	java?: boolean;
	groovy?: boolean;
}

export type PackageGroup = (packageName: Java.PackageName, fractionize?: GroupFractionize) => string;
