import {Java} from '@rainbow-n19/n2';
import React, {FC, Fragment, ReactNode, useEffect, useRef, useState} from 'react';
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

const ConstructorOption = (props: { constructor: Java.IConstructor }) => {
	const {constructor} = props;

	return <>
		<span data-icon="class-constructor">ⓒ</span>
		<span>
			{constructor.declaringClass.simpleName}
			(
			{(constructor.parameters ?? []).map((parameter, index) => {
				return <Fragment key={parameter.name}>
					{index !== 0 ? ', ' : (void 0)}
					{parameter.genericTypeName}
					{parameter.isVarArgs ? '...' : (void 0)}
				</Fragment>;
			})}
			)
		</span>
	</>;
};

const MethodOption = (props: { method: Java.IMethod }) => {
	const {method} = props;

	return <>
		<span data-icon="class-method">ⓜ</span>
		<span>
			{method.name}
			(
			{(method.parameters ?? []).map((parameter, index) => {
				return <Fragment key={parameter.name}>
					{index !== 0 ? ', ' : (void 0)}
					{parameter.genericTypeName}
					{parameter.isVarArgs ? '...' : (void 0)}
				</Fragment>;
			})}
			{') '}
			{method.returned.genericTypeName}
					</span>
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

		ref.current.parentElement.querySelector(`a[id="${id}"]`)?.scrollIntoView({behavior: 'smooth'});
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
		toSomePart(constructor.toShortString(), <ConstructorOption constructor={constructor}/>);
	};
	const toMethod = (method: Java.IMethod) => () => {
		toSomePart(method.toShortString(), <MethodOption method={method}/>);
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
			}).map(field => {
				options.push(<ShortcutsOption onClick={toField(field)} key={field.toShortString()}>
					<FieldOption field={field}/>
				</ShortcutsOption>);
			});
		}
		// constructors documentation
		if (details.class?.declaredConstructors != null && details.class.declaredConstructors.length > 0) {
			details.class.declaredConstructors.map(constructor => {
				return {constructor, key: constructor.toGenericString()};
			}).sort((m1, m2) => {
				return m1.key.localeCompare(m2.key, (void 0), {sensitivity: 'base'});
			}).map(({constructor}) => {
				options.push(<ShortcutsOption onClick={toConstructor(constructor)} key={constructor.toShortString()}>
					<ConstructorOption constructor={constructor}/>
				</ShortcutsOption>);
			});
		}
		// methods documentation
		if (details.class?.declaredMethods != null && details.class.declaredMethods.length > 0) {
			details.class.declaredMethods.map(method => {
				return {method, key: method.toGenericString()};
			}).sort((m1, m2) => {
				return m1.key.localeCompare(m2.key, (void 0), {sensitivity: 'base'});
			}).map(({method}) => {
				options.push(<ShortcutsOption onClick={toMethod(method)} key={method.toShortString()}>
					<MethodOption method={method}/>
				</ShortcutsOption>);
			});
		}

		return options;
	})();

	return <ShortcutsPartContainer data-state={state.optionsState} ref={ref}>
		<ShortcutsPartCurrent onClick={onShortcutsClicked}>
			<ShortcutsOption>
				{state.currentOption}
			</ShortcutsOption>
		</ShortcutsPartCurrent>
		<ShortcutsOptions data-state={state.optionsState}>
			{options}
		</ShortcutsOptions>
	</ShortcutsPartContainer>;
};
