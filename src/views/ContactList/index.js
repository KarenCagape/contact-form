import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import RichText from "../../components/RichText";
import { Container, Row, Column } from "../../components/Grid";
import Box from "../../components/Box";
import Title from "../../components/Title";
import Button from "../../components/Button";

const StyledLink = styled(Link)({
  color: "inherit",
  textDecoration: "none"
});

function ListItem({ contact, onRemoveContact }) {
  return (
    <Box py={[10, 20]}>
      <Row alignItems={{ md: "center" }} justifyContent={{ md: "space-between" }}>
        <Column flex={{ md: "1" }} flexBasis={{ md: "0" }} maxWidth={{ md: "100%" }}>
          <StyledLink to={`/contact/${contact.id}`}>
            <Title heading="h3" m={0} fontFamily="default" fontWeight="semibold">
              {contact.first_name} {contact.last_name}
            </Title>
          </StyledLink>
        </Column>
        <Column flexGrow={{ md: "0 0 auto" }} width={{ md: "auto" }} maxWidth={{ md: "100%" }}>
          <RichText>
            {contact.company} | {contact.email}
          </RichText>
        </Column>
        <Column flexGrow={{ md: "0 0 auto" }} width={{ md: "auto" }} maxWidth={{ md: "100%" }}>
          <Button
            variant="default"
            onClick={() => {
              onRemoveContact(contact);
            }}
          >
            Remove
          </Button>
        </Column>
      </Row>
    </Box>
  );
}

function ContactList({ contacts, onRemoveContact }) {
  if (contacts) {
    return (
      <Box bg="secondaryDarker" color="white" py={{ _: "50px;", md: "100px" }}>
        <Container>
          {contacts.map((item, index) => (
            <ListItem key={index} contact={item} onRemoveContact={onRemoveContact} />
          ))}
        </Container>
      </Box>
    );
  } else {
    return (
      <Box textAlign="center" py={{ _: "50px;", md: "100px" }}>
        <Title heading="h3">No contacts saved</Title>
      </Box>
    );
  }
}

export default ContactList;
