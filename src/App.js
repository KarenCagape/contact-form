import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import uuidv4 from "uuid/v4";

import routes from "./route";
import Header from "./components/Header";

const LOCAL_STORAGE_KEY = "contactApp.contacts";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function mapRoutes({ path, Component }, i) {
    return (
      <Route
        key={i}
        exact
        path={path}
        component={({ history }) => {
          return (
            <Component
              onAddContact={contact => {
                setContacts(prevContacts => {
                  return [...prevContacts, { id: uuidv4(), ...contact }];
                });
                history.push("/");
              }}
              onRemoveContact={contact => {
                setContacts(prevContacts => {
                  return prevContacts.filter((item) => item.id !== contact.id);
                });
                history.push("/");
              }}
              contacts={contacts}
            />
          );
        }}
      />
    );
  }

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedContacts) setContacts(storedContacts);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  if (!isLoading) {
    return (
      <>
        <Router>
          <Header />
          {routes.map(mapRoutes)}
        </Router>
      </>
    );
  }
  return false;
}

export default App;
