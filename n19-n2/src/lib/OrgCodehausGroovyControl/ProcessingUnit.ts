export abstract class ProcessingUnit {
	/**
	 * The current phase
	 */
	protected _phase: number = Phases.INITIALIZATION;

	/**
	 * True if phase is finished
	 */
	protected _phaseComplete: boolean;

	/**
	 * Configuration and other settings that control processing
	 */
	protected _configuration: CompilerConfiguration;

	/**
	 * The ClassLoader to use during processing
	 */
	protected _classLoader: GroovyClassLoader;

	/**
	 * a helper to share errors and report them
	 */
	protected _errorCollector: ErrorCollector;

	/**
	 * Initializes the ProcessingUnit to the empty state.
	 */
	protected constructor(configuration: CompilerConfiguration, classLoader: GroovyClassLoader, errorCollector: ErrorCollector) {
		this.setConfiguration(configuration ?? CompilerConfiguration.DEFAULT);
		this.setClassLoader(classLoader);
		this._errorCollector = errorCollector ?? new ErrorCollector(this.configuration);
		this.configure(this.configuration);
	}

	/**
	 * Reconfigures the ProcessingUnit.
	 */
	configure(configuration: CompilerConfiguration): void {
		this.setConfiguration(configuration);
	}

	/**
	 * Gets the CompilerConfiguration for this ProcessingUnit.
	 */
	get configuration(): CompilerConfiguration {
		return this._configuration;
	}

	/**
	 * Sets the CompilerConfiguration for this ProcessingUnit.
	 */
	setConfiguration(configuration: CompilerConfiguration): void {
		this._configuration = configuration;
	}

	/**
	 * Returns the class loader in use by this ProcessingUnit.
	 */
	get classLoader(): GroovyClassLoader {
		return this._classLoader;
	}

	/**
	 * Sets the class loader for use by this ProcessingUnit.
	 */
	setClassLoader(loader: GroovyClassLoader): void {
		// ClassLoaders should only be created inside a doPrivileged block in case
		// this method is invoked by code that does not have security permissions.
		this._classLoader = loader ?? this.createClassLoader();
	}

	// TODO COPY FROM GROOVY: a future Groovy version should create the loader not as a privileged action
	//  @SuppressWarnings("removal")
	private createClassLoader(): GroovyClassLoader {
		// TODO NEED CREATE GROOVY CLASS LOADER HERE
		//  return java.security.AccessController.doPrivileged((java.security.PrivilegedAction<GroovyClassLoader>) () -> {
		//     ClassLoader parent = Thread.currentThread().getContextClassLoader();
		//     if (parent == null) parent = ProcessingUnit.class.getClassLoader();
		//     return new GroovyClassLoader(parent, getConfiguration());
		//  });
	}

	/**
	 * Errors found during the compilation should be reported through the ErrorCollector.
	 */
	get errorCollector(): ErrorCollector {
		return this._errorCollector;
	}

	/**
	 * Returns the current phase.
	 */
	get phase(): number {
		return this._phase;
	}

	/**
	 * Returns the description for the current phase.
	 */
	get phaseDescription(): string {
		return Phases.getDescription(this.phase);
	}

	get isPhaseComplete(): boolean {
		return this._phaseComplete;
	}

	/**
	 * Marks the current phase complete and processes any errors.
	 */
	completePhase() /* throws CompilationFailedException */ {
		this.errorCollector.failIfErrors();
		this._phaseComplete = true;
	}

	/**
	 * A synonym for <code>gotoPhase(getPhase() + 1)</code>.
	 */
	nextPhase() /* throws CompilationFailedException */ {
		this.gotoPhase(this.phase + 1);
	}

	/**
	 * Wraps up any pending operations for the current phase and switches to the given phase.
	 */
	gotoPhase(phase: number) /* throws CompilationFailedException */ {
		if (!this._phaseComplete) {
			this.completePhase();
		}
		this._phase = phase;
		this._phaseComplete = false;
	}
}
