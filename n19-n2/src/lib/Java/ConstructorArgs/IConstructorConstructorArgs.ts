import {IExecutableConstructorArgs} from './IExecutableConstructorArgs';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IConstructorConstructorArgs extends Omit<IExecutableConstructorArgs, 'name'> {
}
