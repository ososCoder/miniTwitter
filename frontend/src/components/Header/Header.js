import { Auth } from '../Auth/Auth';

export const Header = () => {
  return (
    <header>
      <h1>Mini-Twitter</h1>
      <nav>
        <Auth />
      </nav>
    </header>
  );
};
