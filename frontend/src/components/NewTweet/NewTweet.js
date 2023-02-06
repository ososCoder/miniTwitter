import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { sendTweetService } from '../../services';

export const NewTweet = ({ addTweet }) => {
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [image, setImage] = useState(null);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);

      const data = new FormData(e.target);
      const tweet = await sendTweetService({ data, token });

      addTweet(tweet); //from props. From useTweet

      e.target.reset(); //reset form
      setImage(null); //reset image
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
        <input
          type='file'
          id='image'
          name='image'
          accept='image/*'
          onChange={(e) => setImage(e.target.files[0])}
        />
        {image ? (
          <figure>
            <img
              src={URL.createObjectURL(image)}
              alt='Preview'
              style={{ width: '150px' }}
            />
          </figure>
        ) : null}
      </fieldset>
      <button>Send Tweet</button>
      {sending ? <p>Sending tweet</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
