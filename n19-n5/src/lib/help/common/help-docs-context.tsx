import {Java} from '@rainbow-n19/n2';
import EventEmitter from 'events';
import React, {createContext, ReactNode, useContext, useState} from 'react';

export interface HelpDocsHelpers {
	switchTo: (to: Java.IPackage | Java.IClass | string) => void;
	onSwitchToPackage: (listener: (to: Java.IPackage) => void) => void;
	offSwitchToPackage: (listener: (to: Java.IPackage) => void) => void;
	onSwitchToClass: (listener: (to: Java.IClass) => void) => void;
	offSwitchToClass: (listener: (to: Java.IClass) => void) => void;
}

const createHelpDocsHelpers = () => {
	const emitter = new EventEmitter().setMaxListeners(999999);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const on = (what: string) => (listener: (...args: Array<any>) => void) => emitter.on(what, listener);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const off = (what: string) => (listener: (...args: Array<any>) => void) => emitter.off(what, listener);
	const switchTo = (to: Java.IPackage | Java.IClass | string): void => {
		if (typeof to === 'string') {
			// TODO, check link format, could be one of following:
			// 1. internal field/constructor/method
			// 2. internal anchor
			// 3. another class
			// 4. field/constructor/method of another class
			// 5. anchor of another class
			// 6. external link, should open new window
		} else if ((to as Java.IClass).isArray == null) {
			// is package
			emitter.emit('switchToPackage', to);
		} else {
			// is class
			emitter.emit('switchToClass', to);
		}
	};

	return {
		switchTo,
		onSwitchToPackage: on('switchToPackage'), offSwitchToPackage: off('switchToPackage'),
		onSwitchToClass: on('switchToClass'), offSwitchToClass: off('switchToClass')
	};
};

const HelpDocsContext = createContext<HelpDocsHelpers>({} as HelpDocsHelpers);
HelpDocsContext.displayName = 'HelpDocsContext';

export const HelpDocsContextProvider = (props: { children?: ReactNode }) => {
	const {children} = props;

	const [helpers] = useState(createHelpDocsHelpers());

	return <HelpDocsContext.Provider value={helpers}>
		{children}
	</HelpDocsContext.Provider>;
};

export const useHelpDocsContext = () => useContext(HelpDocsContext);
