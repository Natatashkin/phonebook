const ContactsItem = ({ name, number }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button">Edit</button>
      <button type="button">Delite</button>
    </li>
  );
};
export default ContactsItem;
