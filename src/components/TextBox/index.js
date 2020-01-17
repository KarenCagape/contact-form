import styled from "styled-components";
import css from '@styled-system/css';


const TextBox = styled.input`
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.secondaryDarker};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white}
  border-radius: 5px;
  padding: 12px 15px;
  width: 100%;
  ${({theme}) => css({
    fontSize: theme.fontSizes.body,
    lineHeight: theme.lineHeights.body,
  })}

  :placeholder {
    opacity: 0.7;
    color: inherit;
  }

`;


export default TextBox;