import { useGetContactsQuery } from 'services/authApi';

import ContactsList from 'components/ContacstList';

import { useState } from 'react';

const ContactsPage = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useGetContactsQuery();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setName('');
      setNumber('');
    } catch (error) {
      console.error('rejected', error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label htmlFor="">
          <input
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit">add contact</button>
      </form>
      <div>{data && <ContactsList contacts={data} />}</div>
    </div>
  );
};
export default ContactsPage;
