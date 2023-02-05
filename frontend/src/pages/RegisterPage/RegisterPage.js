import { useState } from 'react';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [error, setError] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
    setError('');

    if (pass1 !== pass2) {
      setError('Passwords do not match');
      return;
    }
  };

  return (
    <section>
      <h2>Register</h2>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor='pass1'>Password</label>
          <input
            type='password'
            id='pass1'
            name='pass1'
            required
            onChange={(e) => setPass1(e.target.value)}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor='pass2'>Repeat Password</label>
          <input
            type='password'
            id='pass2'
            name='pass2'
            required
            onChange={(e) => setPass2(e.target.value)}
          ></input>
        </fieldset>
        <button>Register</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
