import {Java} from '@rainbow-n19/n2';
import React, {FC, ReactNode, useEffect, useRef, useState} from 'react';
import {ClassDocDetails} from '../class-doc-details';
import {ShortcutsOption, ShortcutsOptions, ShortcutsPartContainer, ShortcutsPartCurrent} from './widgets';

export interface ShortcutsPartProps {
	details: ClassDocDetails;
}

enum ShortcutsOptionsState {
	SHOW = 'show', HIDE = 'hide'
}

interface ShortcutsPartState {
	details: ClassDocDetails;
	currentOption?: ReactNode;
	optionsState: ShortcutsOptionsState;
}

const notInMe = (me: HTMLOrSVGElement, target: EventTarget): boolean => {
	const body = document.body;
	if (target === window) {
		return true;
	}
	let parent = target as HTMLElement;
	while (parent != null) {
		if (parent === me) {
			return false;
		}
		if (parent === body || parent == null) {
			return true;
		}
		parent = parent?.parentElement;
	}
	return true;
};

const ClassExtendsOption = () => {
	return <>
		<span data-icon="class-extends">ⓔ</span>
		<span>Extends and Implements</span>
	</>;
};

const ClassDocOption = () => {
	return <>
		<span data-icon="class-doc">ⓓ</span>
		<span>Class documentation</span>
	</>;
};

const FieldOption = (props: { field: Java.IField }) => {
	const {field} = props;

	return <>
		<span data-icon="class-field">ⓕ</span>
		<span>{field.name}</span>
	</>;
};

const toConstructorOptionStr = (constructor: Java.IConstructor): string => {
	return [
		constructor.declaringClass.simpleName,
		'(',
		(constructor.parameters ?? []).map(parameter => {
			return parameter.simpleGenericTypeName + (parameter.isVarArgs ? '...' : '');
		}).join(', '),
		')'
	].join('');
};

const ConstructorOption = (props: { constructor: Java.IConstructor, label: string }) => {
	const {label} = props;

	return <>
		<span data-icon="class-constructor">ⓒ</span>
		<span>{label}</span>
	</>;
};

const toMethodOptionStr = (method: Java.IMethod): string => {
	return [
		method.name,
		'(',
		(method.parameters ?? []).map(parameter => {
			return parameter.simpleGenericTypeName + (parameter.isVarArgs ? '...' : '');
		}).join(', '),
		') ',
		method.returned.simpleGenericTypeName
	].join('');
};

const MethodOption = (props: { method: Java.IMethod, label: string }) => {
	const {label} = props;

	return <>
		<span data-icon="class-method">ⓜ</span>
		<span>{label}</span>
	</>;
};

export const ShortcutsPart: FC<ShortcutsPartProps> = (props) => {
	const {details} = props;

	const ref = useRef<HTMLDivElement>(null);
	const [state, setState] = useState<ShortcutsPartState>({
		details, currentOption: <ClassDocOption/>,
		optionsState: ShortcutsOptionsState.HIDE
	});
	useEffect(() => {
		const collapseOptions = (event: Event) => {
			if (ref.current != null && notInMe(ref.current, event.target)) {
				setState(state => ({...state, optionsState: ShortcutsOptionsState.HIDE}));
			}
		};
		['focus', 'scroll', 'click'].forEach(type => {
			window.addEventListener(type, collapseOptions);
		});
		return () => {
			['focus', 'scroll', 'click'].forEach(type => {
				window.removeEventListener(type, collapseOptions);
			});
		};
	}, [setState]);
	useEffect(() => {
		if (details !== state.details) {
			setState({details, currentOption: <ClassDocOption/>, optionsState: ShortcutsOptionsState.HIDE});
		}
	}, [details]);

	const toSomePart = (id: string, option: ReactNode) => {
		if (ref.current == null) {
			return;
		}

		ref.current.parentElement.querySelector(`a[id="${id}"]`)?.scrollIntoView({behavior: 'smooth', block: 'start'});
		setState(state => {
			return {details: state.details, currentOption: option, optionsState: ShortcutsOptionsState.HIDE};
		});
	};
	const toClassExtends = () => toSomePart('class-extends', <ClassExtendsOption/>);
	const toClassDoc = () => toSomePart('class-doc', <ClassDocOption/>);
	const toField = (field: Java.IField) => () => {
		toSomePart(field.toShortString(), <FieldOption field={field}/>);
	};
	const toConstructor = (constructor: Java.IConstructor) => () => {
		toSomePart(constructor.toShortString(), <ConstructorOption constructor={constructor}
		                                                           label={toConstructorOptionStr(constructor)}/>);
	};
	const toMethod = (method: Java.IMethod) => () => {
		toSomePart(method.toShortString(), <MethodOption method={method} label={toMethodOptionStr(method)}/>);
	};
	const onShortcutsClicked = () => {
		if (state.optionsState === ShortcutsOptionsState.SHOW) {
			return;
		}
		setState(state => ({...state, optionsState: ShortcutsOptionsState.SHOW}));
	};

	const hasExtends = (details.superclasses != null && details.superclasses.length !== 0)
		|| (details.interfaces != null && details.interfaces.length !== 0);

	const options = (() => {
		const options: Array<ReactNode> = [];

		// extends and implements
		if (hasExtends) {
			options.push(<ShortcutsOption onClick={toClassExtends} key="class-extends">
				<ClassExtendsOption/>
			</ShortcutsOption>);
		}
		// class documentation
		options.push(<ShortcutsOption onClick={toClassDoc} key="class-doc">
			<ClassDocOption/>
		</ShortcutsOption>);
		// fields documentation
		if (details.class?.declaredFields != null && details.class.declaredFields.length > 0) {
			details.class.declaredFields.sort((f1, f2) => {
				return f1.name.localeCompare(f2.name, (void 0), {sensitivity: 'base'});
			}).map((field, index) => {
				options.push(<ShortcutsOption onClick={toField(field)} key={`${index}-${field.toShortString()}`}>
					<FieldOption field={field}/>
				</ShortcutsOption>);
			});
		}
		// constructors documentation
		if (details.class?.declaredConstructors != null && details.class.declaredConstructors.length > 0) {
			details.class.declaredConstructors.map(constructor => {
				return {constructor, label: toConstructorOptionStr(constructor)};
			}).sort((m1, m2) => {
				return m1.label.localeCompare(m2.label, (void 0), {sensitivity: 'base'});
			}).map(({constructor, label}, index) => {
				options.push(<ShortcutsOption onClick={toConstructor(constructor)}
				                              key={`${index}-${constructor.toShortString()}`}>
					<ConstructorOption constructor={constructor} label={label}/>
				</ShortcutsOption>);
			});
		}
		// methods documentation
		if (details.class?.declaredMethods != null && details.class.declaredMethods.length > 0) {
			details.class.declaredMethods.map(method => {
				return {method, label: toMethodOptionStr(method)};
			}).sort((m1, m2) => {
				return m1.label.localeCompare(m2.label, (void 0), {sensitivity: 'base'});
			}).map(({method, label}, index) => {
				options.push(<ShortcutsOption onClick={toMethod(method)} key={`${index}-${label}`}>
					<MethodOption method={method} label={label}/>
				</ShortcutsOption>);
			});
		}

		return options;
	})();

	return <ShortcutsPartContainer data-state={state.optionsState} ref={ref}>
		<ShortcutsPartCurrent onClick={onShortcutsClicked}>
			<span>📍</span>
			<ShortcutsOption>
				{state.currentOption}
			</ShortcutsOption>
		</ShortcutsPartCurrent>
		<ShortcutsOptions data-state={state.optionsState}>
			{options}
		</ShortcutsOptions>
	</ShortcutsPartContainer>;
};
