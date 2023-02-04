import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { Tweet } from '../../components/Tweet/Tweet';
import { useTweet } from '../../hooks/useTweet';

export const TweetPage = () => {
  const { id } = useParams();

  const { tweet, loading, error } = useTweet(id);

  if (loading) return <p>cargando tweets...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h2>Tweet from {tweet.email}</h2>
      <Tweet tweet={tweet} />
    </section>
  );
};
