import {Phases} from './Phases';

export enum CompilePhase {

	/**
	 * source files are opened and environment configured
	 */
	INITIALIZATION = Phases.INITIALIZATION,

	/**
	 * the grammar is used to produce tree of tokens representing the source code
	 */
	PARSING = Phases.PARSING,

	/**
	 * An abstract syntax tree (AST) is created from token trees
	 */
	CONVERSION = Phases.CONVERSION,

	/**
	 * Performs consistency and validity checks that the grammar can't check for, and resolves classes
	 */
	SEMANTIC_ANALYSIS = Phases.SEMANTIC_ANALYSIS,

	/**
	 * Complete building the AST
	 */
	CANONICALIZATION = Phases.CANONICALIZATION,

	/**
	 * instruction set is chosen, for example java5 or pre java5
	 */
	INSTRUCTION_SELECTION = Phases.INSTRUCTION_SELECTION,

	/**
	 * creates the binary output in memory
	 */
	CLASS_GENERATION = Phases.CLASS_GENERATION,

	/**
	 * write the binary output to the file system
	 */
	OUTPUT = Phases.OUTPUT,

	/**
	 * Perform any last cleanup
	 */
	FINALIZATION = Phases.FINALIZATION
}
