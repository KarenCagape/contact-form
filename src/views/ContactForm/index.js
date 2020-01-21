import React, { useRef } from "react";

import TextBox from "../../components/TextBox";
import Submit from "../../components/Submit";
import { Container, Row, Column } from "../../components/Grid";
import Box from "../../components/Box";
import styled from "styled-components";
import RichText from "../../components/RichText";

const FieldsBox = styled(Box)({
  paddingBottom: 20
});

function ContactForm({ onAddContact }) {
  const fistNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();

  function onFormSubmit() {
    const contact = {
      first_name: fistNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      phone_number: phoneRef.current.value,
      company: companyRef.current.value,
      job_title: titleRef.current.value
    };

    if (contact.first_name && contact.last_name && contact.email) {
      onAddContact(contact);
      fistNameRef.current.value = null;
      lastNameRef.current.value = null;
      emailRef.current.value = null;
      phoneRef.current.value = null;
      companyRef.current.value = null;
      titleRef.current.value = null;
    }
  }
  return (
    <Box py={{ _: 50, _md: 100 }}>
      <Container>
        <Row justifyContent={{ md: "center" }}>
          <Column flex={{ md: "0 0 75%" }} maxWidth={{ md: "75%" }}>
            <Box pb={{ _: 20, md: 50 }}>
              <RichText>
                <h1>Add Contact Person</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam.
                </p>
              </RichText>
            </Box>
            <Box>
              <FieldsBox>
                <Row>
                  <Column flex={{ md: "0 0 50%" }} maxWidth="50%">
                    <TextBox ref={fistNameRef} name="first_name" placeholder="First Name" />
                  </Column>
                  <Column flex={{ md: "0 0 50%" }} maxWidth="50%">
                    <TextBox ref={lastNameRef} name="last_name" placeholder="Last Name" />
                  </Column>
                </Row>
              </FieldsBox>
              <FieldsBox>
                <Row>
                  <Column flex={{ md: "0 0 50%" }} maxWidth="50%">
                    <TextBox ref={emailRef} name="email" placeholder="Email" />
                  </Column>
                  <Column flex={{ md: "0 0 50%" }} maxWidth="50%">
                    <TextBox ref={phoneRef} name="phone_number" placeholder="Phone Number" />
                  </Column>
                </Row>
              </FieldsBox>
              <FieldsBox>
                <Row>
                  <Column flex={{ md: "0 0 50%" }} maxWidth="50%">
                    <TextBox ref={companyRef} name="company" placeholder="Company" />
                  </Column>
                  <Column flex={{ md: "0 0 50%" }} maxWidth="50%">
                    <TextBox ref={titleRef} name="job_title" placeholder="Job Title" />
                  </Column>
                </Row>
              </FieldsBox>

              <Submit onClick={onFormSubmit}>Submit Info</Submit>
            </Box>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

export default ContactForm;
