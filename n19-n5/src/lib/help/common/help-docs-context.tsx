import {Java} from '@rainbow-n19/n2';
import EventEmitter from 'events';
import React, {createContext, ReactNode, useContext, useState} from 'react';

export interface HelpDocsHelpers {
	switchTo: (to: Java.IPackage | Java.IClass) => void;
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
	const switchTo = (to: Java.IPackage | Java.IClass): void => {
		if ((to as Java.IClass).isArray == null) {
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
