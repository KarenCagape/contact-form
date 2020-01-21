import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../Button";
import Box from "../Box";
import { Container } from "../Grid";

const HeaderNav = styled(Link)(({ theme }) => {
  return {
    borderBottom: `1px solid ${theme.colors.secondaryDarker}`,
    display: "block",
    span: {
      padding: "20px 25px"
    },
    [theme.mediaQueries.md]: {
        borderRight: `1px solid ${theme.colors.secondaryDarker}`,
        display: 'inline-block'
    }
  };
});

function Header() {
  return (
    <Box bg="primary">
      <Container>
        <HeaderNav to="/">
          <Button variant="white" as="span">
            List
          </Button>
        </HeaderNav>
        <HeaderNav to="/add">
          <Button variant="white" as="span">
            Add Contact
          </Button>
        </HeaderNav>
      </Container>
    </Box>
  );
}

export default Header;
