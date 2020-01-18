import React, { useState, useEffect } from "react";
import ContactList from "./views/ContactList";
import Button from "./components/Button";
import Box from "./components/Box";
import { Container } from "./components/Grid";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();

      setContacts(data);
      setIsLoading(false);
    };

    fetchData();
  });

  if (!isLoading) {
    return (
      <>
        <Box bg="primary">
          <Container>
            <Button variant="white">Add Contact</Button>
          </Container>
        </Box>
        <Box bg="secondaryDarker" color="white">
          <ContactList contacts={contacts} />
        </Box>
      </>
    );
  }
  return false;
}

export default App;
