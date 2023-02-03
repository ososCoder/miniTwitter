import { Link } from 'react-router-dom';
import { Auth } from '../Auth/Auth';

export const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1>Mini-Twitter</h1>
      </Link>
      <nav>
        <Auth />
      </nav>
    </header>
  );
};
