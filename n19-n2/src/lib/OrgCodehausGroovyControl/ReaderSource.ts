import {Reader} from '../JavaIO';
import {Optional} from '../TsAddon';
import {HasCleanup} from './HasCleanup';
import {Janitor} from './Janitor';

export interface ReaderSource extends HasCleanup {
	/**
	 *  Returns a new Reader on the underlying source object.  Returns
	 *  null if the source can't be reopened.
	 * @throws java.io.IOException if there was an error opening for stream
	 * @return the reader to the resource
	 */
	get reader(): Reader; /* throws IOException */

	/**
	 *  Returns true if the source can be restarted (ie. if getReader()
	 *  will return non-null on subsequent calls).
	 * @return true if the resource can be reopened for reading
	 */
	canReopenSource(): boolean;

	/**
	 *  Returns a line from the source, or null, if unavailable.  If
	 *  you supply a Janitor, resources will be cached.
	 * @param lineNumber the number of the line of interest
	 * @param janitor helper to clean up afterwards
	 * @return the line of interest
	 */
	getLine(lineNumber: number, janitor: Janitor): Optional<string>;

	/**
	 *  Cleans up any cached resources used by getLine().
	 */
	cleanup(): void;
}