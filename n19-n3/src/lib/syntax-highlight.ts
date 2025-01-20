import {HighlightStyle, syntaxHighlighting} from '@codemirror/language';
import {Tag} from '@lezer/highlight';
import {Token} from './tokens';

export const GroovyTags: Partial<{ [key in Token]: Tag }> = {
	CLASS: Tag.define('class'),
	INTERFACE: Tag.define('interface')
};

export const GroovySyntaxHighlight = syntaxHighlighting(HighlightStyle.define([
	{tag: GroovyTags.CLASS, class: 'rw-keywords rw-class'},
	{tag: GroovyTags.INTERFACE, class: 'rw-keywords rw-interface'}
]));
