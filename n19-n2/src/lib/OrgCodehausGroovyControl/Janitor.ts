import {HasCleanup} from './HasCleanup';

export class Janitor implements HasCleanup {
	private readonly _pending: Set<HasCleanup> = new Set();   // All objects pending cleanup

	register(object: HasCleanup): void {
		this._pending.add(object);
	}

	cleanup(): void {
		for (const o of this._pending) {
			try {
				o.cleanup();
			} catch {
				// Ignore
			}
		}

		this._pending.clear();
	}
}
