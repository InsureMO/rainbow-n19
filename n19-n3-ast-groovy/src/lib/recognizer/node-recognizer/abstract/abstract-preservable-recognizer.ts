import {Optional} from '@rainbow-n19/n2';
import {AstRecognition} from '../../types';
import {AbstractRehydratableRecognizer} from './abstract-rehydratable-recognizer';

/**
 * when any of preservable check function returns true,
 * the given node will be appended to current parent as leaf,
 * and no check will be applied.
 */
export type PreservableCheckFunc = (recognition: AstRecognition) => boolean;

export abstract class AbstractPreservableRecognizer extends AbstractRehydratableRecognizer {
	protected abstract getPreservableCheckFunctions(): Array<PreservableCheckFunc>;

	protected rehydrate(recognition: AstRecognition): Optional<number> {
		const nodeIndex: Optional<number> = super.rehydrate(recognition);
		if (nodeIndex != null) {
			return nodeIndex;
		}

		const preservableCheckFuncs = this.getPreservableCheckFunctions();
		for (let index = 0, count = preservableCheckFuncs.length; index < count; index++) {
			if (preservableCheckFuncs[index](recognition) === true) {
				const {node, nodeIndex, astRecognizer} = recognition;
				astRecognizer.appendAsLeaf(node, false);
				return nodeIndex + 1;
			}
		}
		return (void 0);
	}
}
