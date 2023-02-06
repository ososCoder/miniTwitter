import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <>
      <p>Logged in as {user.email}</p>
      <button onClick={() => logout()}>LogOut</button>
    </>
  ) : (
    <ul>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
};
