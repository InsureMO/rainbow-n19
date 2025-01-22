import {css} from 'styled-components';

const styledBy = (name: string) => {
	return [
		['color', 'inherit'],
		['background-color', 'inherit'],
		['border', 'none'],
		['border-radius', 'unset'],
		['text-decoration', 'none'],
		['font-weight', 'inherit'],
		['font-style', 'inherit']
	]
		.map(([n, d]) => `${n}: var(--groovy-${name}-${n}, ${d});`);
};
// noinspection CssUnresolvedCustomProperty
export const DecorationStyleVariables = css`
    --groovy-font-size: 14px;

    --groovy-reserved-keyword-color: #0033B3;
    --groovy-reserved-keyword-background-color: transparent;

    --groovy-brace-color: #B09633;
    --groovy-brace-font-style: italic;
    --groovy-brace-for-closure-color: #871094;
    --groovy-brace-for-closure-font-weight: 600;
    --groovy-brace-for-closure-font-style: var(--groovy-brace-font-style);

    --groovy-arrow-font-weight: 600;
    --groovy-arrow-for-closure-color: #871094;
    --groovy-arrow-for-closure-font-weight: var(--groovy-arrow-font-weight);

    --groovy-semi-color: #888;

    --groovy-string-literal-color: #067D17;

    --groovy-gstring-color: #067D17;

    --groovy-number-literal-color: #1750EB;

    --groovy-at-for-interface-color: #0033B3;
    --groovy-at-for-interface-font-weight: 900;

    --groovy-nl-for-sl-comment-color: #8C8C8C;
    --groovy-nl-for-sl-comment-font-style: italic;

    --groovy-nl-for-ml-comment-color: #8C8C8C;
    --groovy-nl-for-ml-comment-font-style: italic;
`;
// noinspection CssUnresolvedCustomProperty
export const DecorationStyles = css`
    span.rkw {
        ${styledBy('reserved-keyword')}
    }

    span.ltl {
        &.ltl-string-literal {
            ${styledBy('string-literal')}
        }

        &.ltl-integer-literal,
        &.ltl-floating-literal {
            ${styledBy('number-literal')}
        }
    }

    span.gst {
        ${styledBy('gstring')}
    }

    span.blk {
        &.blk-brace {
            ${styledBy('brace')}
            &.blk-brace-for-closure {
                ${styledBy('brace-for-closure')}
            }
        }
    }

    span.sig {
        &.sig-at.sig-at-interface {
            ${styledBy('at-for-interface')}
        }

        &.sig-arrow {
            ${styledBy('arrow')}
            &.sig-arrow-for-closure {
                ${styledBy('arrow-for-closure')}
            }
        }

        &.sig-semi {
            ${styledBy('semi')}
        }

        &.sig-nl.sig-nl-for-sl-comment {
            ${styledBy('nl-for-sl-comment')}
        }

        &.sig-nl.sig-nl-for-ml-comment {
            ${styledBy('nl-for-ml-comment')}
        }
    }
`;
