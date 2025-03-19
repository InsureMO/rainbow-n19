import {Line, Prec} from '@codemirror/state';
import {Command, EditorView, keymap} from '@codemirror/view';

export const toggleSingleLineComment = (target: EditorView, line: Line): void => {
	const {state} = target;
	const text = line.text;
	const start = text.indexOf('//');
	if (start !== -1) {
		const hasCharBeforeStart = text.substring(0, start).trim().length !== 0;
		if (hasCharBeforeStart) {
			// comment whole line
			const from = line.from + text.length - text.trimStart().length;
			// comment whole line
			target.dispatch(state.update({changes: {from, to: from, insert: '// '}}));
		} else {
			// uncomment
			const afterStart = text.substring(start + 2);
			const from = line.from + start;
			const to = from + 2 + afterStart.length - afterStart.trimStart().length;
			target.dispatch(state.update({changes: {from, to, insert: ''}}));
		}
	} else {
		const from = line.from + text.length - text.trimStart().length;
		// comment whole line
		target.dispatch(state.update({changes: {from, to: from, insert: '// '}}));
	}
};

export const toggleMultipleLineComment = (target: EditorView, lines: Array<Line>): void => {
	const commented = lines.every(line => line.text.trim().startsWith('//'));
	if (commented) {
		// uncomment
		const firstLineText = lines[0].text;
		const index = firstLineText.indexOf('//');
		const after = firstLineText.substring(index + 2);
		const firstLineTrimmedLength = after.length - after.trimStart().length;

		const changes = lines.map(line => {
			const text = line.text;
			const index = text.indexOf('//');
			const after = text.substring(index + 2);
			let trimmedLength = after.length - after.trimStart().length;
			trimmedLength = Math.min(trimmedLength, firstLineTrimmedLength);
			return {from: line.from + index, to: line.from + index + 2 + trimmedLength, insert: ''};
		});
		target.dispatch(target.state.update({changes}));
	} else {
		// comment
		const possibleStartOffsets = lines.map(line => {
			const text = line.text;
			return text.length - text.trimStart().length;
		});
		const offset = Math.min(...possibleStartOffsets);
		const changes = lines.map(line => {
			const from = line.from + offset;
			return {from, to: from, insert: '// '};
		});
		target.dispatch(target.state.update({changes}));
	}
};

export const toggleComment: Command = (target: EditorView): boolean => {
	const {state} = target;
	const lineStart = state.doc.lineAt(state.selection.main.from);
	const lineEnd = state.doc.lineAt(state.selection.main.to);

	if (lineStart.number === lineEnd.number || (lineEnd.number === lineStart.number + 1 && lineEnd.from === state.selection.main.to)) {
		// single line
		toggleSingleLineComment(target, lineStart);
	} else {
		const endLineNumber = lineEnd.from === state.selection.main.to ? (lineEnd.number - 1) : lineEnd.number;
		const lines = new Array(endLineNumber - lineStart.number + 1)
			.fill(0)
			.map((_, i) => state.doc.line(lineStart.number + i));
		toggleMultipleLineComment(target, lines);
	}

	return true;
};

export const KeymapCommentPlugin = Prec.highest(keymap.of([
	{key: 'Mod-/', run: toggleComment}
]));
