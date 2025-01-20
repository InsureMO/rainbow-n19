/**
 * make sure it is first one to be imported, which do initializing things
 */
import {DemoContainer} from './demo-container.tsx';
import {GlobalStyles} from './global-styles';

export const App = () => {
	return <>
		<GlobalStyles/>
		<DemoContainer/>
	</>;
};
