import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Box from "../../components/Box";
import { Container } from "../../components/Grid";
import Title from "../../components/Title";
import RichText from "../../components/RichText";

function ContactDetails({ contacts, match, history }) {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const { id } = match.params;
    const foundContact = contacts.find(con => con.id === id);

    if (!foundContact) {
      history.push("/");
    }

    setContact(foundContact);
  }, [contact]);

  return (
    <Box bg="secondaryDarker" color="white" overflow="hidden" py={{ _: 50, _md: 100 }}>
      <Container>
        <Title fontFamily="default" heading="h1">
          {contact.first_name} {contact.last_name}
        </Title>
        <RichText>
          { contact.email ? <h4><label>Email: </label>{contact.email}</h4> : ''}
          { contact.phone_number ? <h4><label>Phone Number: </label>{contact.phone_number}</h4> : ''}
          { contact.company ? <h4><label>Company: </label>{contact.company}</h4> : ''}
          { contact.job_title ? <h4><label>Job Title: </label>{contact.job_title}</h4> : ''}
        </RichText>
      </Container>
    </Box>
  );
}

export default withRouter(ContactDetails);
