import React from "react";
import RichText from "../../components/RichText";
import { Container, Row, Column } from "../../components/Grid";
import Box from "../../components/Box";
import Title from "../../components/Title";

function ListItem({ contact }) {
  return (
    <Box py={[10, 20]}>
      <RichText>
        <Row alignItems={{ md: "center" }}>
          <Column flex={{ md: "0 0 auto" }} width={{ md: "auto" }} maxWidth={{ md: "100%" }}>
            <Title heading="h3">{contact.name}</Title>
          </Column>
          <Column flexGrow={{ md: "1" }} flexBasis={{ md: "0" }} maxWidth={{ md: "100%" }}>
            {contact.company.name} | {contact.email}
          </Column>
        </Row>
      </RichText>
    </Box>
  );
}

function ContactList({ contacts }) {
  return (
    <Container>
      {contacts.map((item, index) => (
        <ListItem key={index} contact={item} />
      ))}
    </Container>
  );
}

export default ContactList;
