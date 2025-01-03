export class Phases {
	/** Opening of files and such */
	public static readonly INITIALIZATION: number = 1;
	/** Lexing, parsing, and AST building */
	public static readonly PARSING: number = 2;
	/** CST to AST conversion */
	public static readonly CONVERSION: number = 3;
	/** AST semantic analysis and elucidation */
	public static readonly SEMANTIC_ANALYSIS: number = 4;
	/** AST completion */
	public static readonly CANONICALIZATION: number = 5;
	/** Class generation (pt.1) */
	public static readonly INSTRUCTION_SELECTION: number = 6;
	/** Class generation (pt.2) */
	public static readonly CLASS_GENERATION: number = 7;   //
	/** Output of class to disk */
	public static readonly OUTPUT: number = 8;
	/** Cleanup */
	public static readonly FINALIZATION: number = 9;
	/** Synonym for full compilation */
	public static readonly ALL = Phases.FINALIZATION;

	// TODO COPY FROM GROOVY: If no reference is made to array, convert to switch in getDescription(int).
	public static readonly descriptions: Array<string> = [
		'startup',
		'initialization',
		'parsing',
		'conversion',
		'semantic analysis',
		'canonicalization',
		'instruction selection',
		'class generation',
		'output',
		'cleanup'
	];

	private constructor() {
		// avoid extend
	}

	/**
	 * Returns a description of the specified phase.
	 */
	public static getDescription(phase: number): string {
		return Phases.descriptions[phase];
	}
}
