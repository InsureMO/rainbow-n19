import {BROWSER} from './os';

export const isCtrlOrCmdKeyPressed = (event: MouseEvent): boolean => {
	return (BROWSER.mac && event.metaKey) || (!BROWSER.mac && event.ctrlKey);
};
