import styled from "styled-components";
import { color } from "styled-system";

const RichText = styled.div`
    ${color}
    font-size: ${({ theme }) => theme.fontSizes.body[0]};
    font-family: ${({ theme }) => theme.fonts.default};
    line-height: ${({ theme }) => theme.lineHeights.body[0]};

    h1,h2,h3,h4,h5,h6,p,ul {
        margin-top: 0;
    }
    h1 {
        font-weight: ${({ theme }) => theme.fontWeights.light};
        font-size: ${({ theme }) => theme.fontSizes.h1[0]};
        line-height: ${({ theme }) => theme.lineHeights.h1[0]};
        margin-bottom: 0.333em;
    }
    h2 {
        font-weight: ${({ theme }) => theme.fontWeights.light};
        font-size: ${({ theme }) => theme.fontSizes.h2[0]};
        line-height: ${({ theme }) => theme.lineHeights.h2[0]};
        margin-bottom: 0.333em;
    }
    h3 {
        font-weight: ${({ theme }) => theme.fontWeights.light};
        font-size: ${({ theme }) => theme.fontSizes.h3[0]};
        line-height: ${({ theme }) => theme.lineHeights.h3[0]};
        margin-bottom: 0.4444em;
    }
    h4 {
        font-weight: ${({ theme }) => theme.fontWeights.light};
        font-size: ${({ theme }) => theme.fontSizes.h4[0]};
        line-height: ${({ theme }) => theme.lineHeights.h4[0]};
        margin-bottom: 0.56em;
    }
    h5 {
        font-size: ${({ theme }) => theme.fontSizes.h5[0]};
        line-height: ${({ theme }) => theme.lineHeights.h5[0]};
        margin-bottom: 0.67em;
    }
    h6 {
        font-size: ${({ theme }) => theme.fontSizes.h6[0]};
        line-height: ${({ theme }) => theme.lineHeights.h6[0]};
        margin-bottom: 0.833em;
    }

    ${({ theme }) => theme.mediaQueries.md} {
        h1 {
            font-size: ${({ theme }) => theme.fontSizes.h1[1]};
            line-height: ${({ theme }) => theme.lineHeights.h1[1]};
        }
        h2 {
            font-size: ${({ theme }) => theme.fontSizes.h2[1]};
            line-height: ${({ theme }) => theme.lineHeights.h2[1]};
        }
        h3 {
            font-size: ${({ theme }) => theme.fontSizes.h3[1]};
            line-height: ${({ theme }) => theme.lineHeights.h3[1]};
        }
        h4 {
            font-size: ${({ theme }) => theme.fontSizes.h4[1]};
            line-height: ${({ theme }) => theme.lineHeights.h4[1]};
        }
        h5 {
            font-size: ${({ theme }) => theme.fontSizes.h5[1]};
            line-height: ${({ theme }) => theme.lineHeights.h5[1]};
        }
        h6 {
            font-size: ${({ theme }) => theme.fontSizes.h6[1]};
            line-height: ${({ theme }) => theme.lineHeights.h6[1]};
        }
    }
`;

export default RichText;
