import ContactDetails from "./views/ContactDetails";
import ContactForm from "./views/ContactForm";
import ContactList from "./views/ContactList";

const routes = [
  {
    path: "/",
    Component: ContactList
  },
  {
    path: "/add",
    Component: ContactForm
  },
  {
    path: "/contact/:id",
    Component: ContactDetails
  }
];



export default routes;
