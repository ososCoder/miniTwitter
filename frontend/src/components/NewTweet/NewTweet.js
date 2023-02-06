import { useState } from 'react';
import { Form } from 'react-router-dom';

export const NewTweet = () => {
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);

      const data = new FormData(e.target);
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleForm}>
      <h2>New Tweet</h2>
      <fieldset>
        <label htmlFor='text'>Text</label>
        <input
          type='text'
          id='text'
          name='text'
          required
          placeholder='What are you thinking...'
        />
      </fieldset>
      <fieldset>
        <label htmlFor='image'>Image (optinal)</label>
        <input type='file' id='image' name='image' />
      </fieldset>
      <button>Send Tweet</button>
      {sending ? <p>Sending tweet</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
