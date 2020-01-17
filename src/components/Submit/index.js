import styled from "styled-components";
import css from '@styled-system/css';

const Submit = styled.button`
  background-image: linear-gradient(-29deg, ${({ theme }) => theme.colors.primary} 0%, #c1b1ff 100%);
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  display: block;
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: 600;
  text-align: center;
  padding: 13px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  ${({theme}) => css({
    fontSize: theme.fontSizes.button,
    lineHeight: theme.lineHeights.body,
  })}

  &:hover {
    background-image: linear-gradient(-29deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primary} 100%);
  }

`;

Submit.defaultProps = {
  type: 'submit',
  children: 'Submit',
}

export default Submit;
