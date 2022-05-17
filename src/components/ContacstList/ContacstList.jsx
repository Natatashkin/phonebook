import ContactsItem from './ContactsItem';

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id} name={name} number={number} />
      ))}
    </ul>
  );
};
export default ContactsList;
