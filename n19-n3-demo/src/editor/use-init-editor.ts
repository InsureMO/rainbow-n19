import {autocompletion, closeBrackets, closeBracketsKeymap, completionKeymap} from '@codemirror/autocomplete';
import {defaultKeymap, history, historyKeymap, indentWithTab} from '@codemirror/commands';
import {
	bracketMatching,
	defaultHighlightStyle,
	foldGutter,
	foldKeymap,
	indentOnInput,
	indentUnit,
	syntaxHighlighting
} from '@codemirror/language';
import {lintKeymap} from '@codemirror/lint';
import {highlightSelectionMatches, searchKeymap} from '@codemirror/search';
import {Compartment, EditorState, EditorState as CodeMirrorState} from '@codemirror/state';
import {
	crosshairCursor,
	drawSelection,
	dropCursor,
	EditorView,
	highlightActiveLine,
	highlightActiveLineGutter,
	highlightSpecialChars,
	keymap,
	lineNumbers,
	rectangularSelection
} from '@codemirror/view';
import {createGroovyExtensions} from '@rainbow-n19/n3';
import {Dispatch, SetStateAction, useEffect, useRef} from 'react';

export interface CodeEditorState {
	editor?: EditorView;
	changeListener?: Compartment;
}

export interface UseInitEditorOptions<S extends CodeEditorState> {
	state: S;
	setState: Dispatch<SetStateAction<S>>;
}

// noinspection JSValidateJSDoc,JSUnresolvedReference,CommaExpressionJS,UnreachableCodeJS,BadExpressionStatementJS,JSAnnotator,JSUndeclaredVariable,UnnecessaryLabelOnContinueStatementJS,JSUnusedLocalSymbols,UnnecessaryContinueJS
let testCode = `// hello world
package highlighting

// sl
/**
* This is Groovydoc comment
* @see java.lang.String#equals
*/
// sl
@Annotation(parameter = 'value') // sl
class C {

  def property = new I() {}
  static def staticProperty = []

  C() {}

  def <T> T instanceMethod(T parameter, reassignedParameter) {
    reassignedParameter = 1
    //This is a line comment
    return parameter
  }

  def getStuff() { 42 }
  static boolean isStaticStuff() { true }

  static def staticMethod(int i) {
    /* This is a block comment */
    Map map = [key1: 1, key2: 2, (22): 33]

    def cl = { a -> a }
    // def lambda = b -> { b }

    File f = ['path']
    def a = 'JetBrains'.matches(/Jw+Bw+/)

    label:
    for (entry in map) {
      if (entry.value > 1 && i < 2) {
        a = unresolvedReference
        continue label
      } else {
        a = entry
      }
    }

    print map.key1
  }
}

def c = new C()
c.instanceMethod("Hello\\n", 'world') // TODO \\x')
println c.stuff

C.staticMethod(namedArg: 1)
C.staticStuff

abstract class AbstractClass {}
interface I {}
trait T {}
enum E {}
@interface Annotation {
  String parameter()
}
`;

// testCode = `class /* ml */ C { // sl
//   T /* ml */ instanceMethod() { // sl
//
//     // sl
//     return /* ml */ parameter
//   }
// }
// `
export const useInitEditor = <S extends CodeEditorState>(options: UseInitEditorOptions<S>) => {
	const {setState} = options;

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current == null) {
			return;
		}

		const changeListener = new Compartment();
		const editor = new EditorView({
			state: CodeMirrorState.create({
				doc: testCode,
				extensions: [
					// copied from basic step
					[
						lineNumbers(),
						highlightActiveLineGutter(),
						highlightSpecialChars(),
						history(),
						foldGutter(),
						drawSelection(),
						dropCursor(),
						EditorState.allowMultipleSelections.of(true),
						indentOnInput(),
						syntaxHighlighting(defaultHighlightStyle, {fallback: true}),
						bracketMatching(),
						closeBrackets(),
						autocompletion(),
						rectangularSelection(),
						crosshairCursor(),
						highlightActiveLine(),
						highlightSelectionMatches(),
						keymap.of([
							...closeBracketsKeymap,
							...defaultKeymap,
							...searchKeymap,
							...historyKeymap,
							...foldKeymap,
							...completionKeymap,
							...lintKeymap
						])
					],
					indentUnit.of('  '),
					keymap.of([indentWithTab]),
					createGroovyExtensions({
						languageServer: {
							// positionedNodesLogEnabled: true,
							// atomicNodesLogEnabled: true,
							// ruleProcessingLogsEnabled: true,
							// timeSpentLogEnabled: true,
						}
					}),
					changeListener.of(EditorView.updateListener.of(() => {
						// view.state.update({});
					}))
				]
			}),
			parent: ref.current
		});
		setState(state => ({...state, editor, changeListener}));
		return () => {
			editor.destroy();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setState]);

	return {ref};
};
