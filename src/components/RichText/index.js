import styled from "styled-components";
import { color } from "styled-system";
import css from '@styled-system/css';

const RichText = styled.div`
    ${color}
    font-family: ${({ theme }) => theme.fonts.default};
    ${ ({ theme }) => css({
        fontSize: theme.fontSizes.body,
        lineHeight: theme.lineHeights.body,
    })}

    h1,h2,h3,h4,h5,h6,p,ul {
        margin-top: 0;
    }
    h1 {
        font-weight: ${({ theme }) => theme.fontWeights.light};
        margin-bottom: 0.333em;
        ${ ({ theme }) => css({
            fontSize: theme.fontSizes.h1,
            lineHeight: theme.lineHeights.h1,
        })}
    }
    h2 {
        font-weight: ${({ theme }) => theme.fontWeights.light};
        margin-bottom: 0.333em;
        ${ ({ theme }) => css({
            fontSize: theme.fontSizes.h2,
            lineHeight: theme.lineHeights.h2,
        })}
    }
    h3 {
        font-weight: ${({ theme }) => theme.fontWeights.light};
        margin-bottom: 0.4444em;
        ${ ({ theme }) => css({
            fontSize: theme.fontSizes.h3,
            lineHeight: theme.lineHeights.h3,
        })}
    }
    h4 {
        font-weight: ${({ theme }) => theme.fontWeights.light};
        margin-bottom: 0.56em;
        ${ ({ theme }) => css({
            fontSize: theme.fontSizes.h4,
            lineHeight: theme.lineHeights.h4,
        })}
    }
    h5 {
        margin-bottom: 0.67em;
        ${ ({ theme }) => css({
            fontSize: theme.fontSizes.h5,
            lineHeight: theme.lineHeights.h5,
        })}
    }
    h6 {
        margin-bottom: 0.833em;
        ${ ({ theme }) => css({
            fontSize: theme.fontSizes.h6,
            lineHeight: theme.lineHeights.h6,
        })}
    }
`;

export default RichText;
