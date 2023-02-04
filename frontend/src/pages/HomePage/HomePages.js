import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { TweetList } from '../../components/TweetList/TweetList';
import { useTweets } from '../../hooks/useTweets';

export const HomePage = () => {
  const { tweets, loading, error } = useTweets();

  if (loading) return <p>cargando tweets...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h2>Latest Tweets</h2>
      <TweetList tweets={tweets} />
    </section>
  );
};
