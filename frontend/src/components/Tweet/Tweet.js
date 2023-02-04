import { Link } from 'react-router-dom';

export const Tweet = ({ tweet }) => {
  return (
    <article>
      <p>{tweet.text}</p>

      {tweet.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${tweet.image}`}
          alt={tweet.text}
          style={{ width: '200px' }}
        />
      ) : null}
      <p>
        By {tweet.email} on{' '}
        <Link to={`/tweet/${tweet.id}`}>
          {new Date(tweet.created_at).toLocaleDateString()}
        </Link>
      </p>
    </article>
  );
};
