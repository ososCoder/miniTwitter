import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <section>
      <p>Not Found!!</p>
      <Link to='/'>
        <h3>Go to Mini-Twitter Home</h3>
      </Link>
    </section>
  );
};
