import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;

    ${({ theme }) => theme.mediaQueries.sm } {
        max-width: 540px;
    }
    ${({ theme }) => theme.mediaQueries.md } {
        max-width: 720px;
    }
    ${({ theme }) => theme.mediaQueries.lg } {
        max-width: 960px;
    }
    ${({ theme }) => theme.mediaQueries.xl } {
        max-width: 1140px;
    }
`;

export { Container };