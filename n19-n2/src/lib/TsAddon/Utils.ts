export const stringToCharArray = (str: string): Uint16Array => {
	let result = new Uint16Array(str.length);
	for (let i = 0; i < str.length; i++) {
		result[i] = str.charCodeAt(i);
	}
	return result;
};
export const arrayToString = (a: Array<any>) => {
	return Array.isArray(a) ? ('[' + a.map(valueToString).join(', ') + ']') : 'null';
};
export const valueToString = (v: any) => {
	return v === null ? 'null' : v;
};
