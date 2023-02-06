import { useContext } from 'react';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { NewTweet } from '../../components/NewTweet/NewTweet';
import { TweetList } from '../../components/TweetList/TweetList';
import { AuthContext } from '../../context/AuthContext';
import { useTweets } from '../../hooks/useTweets';

export const HomePage = () => {
  const { tweets, loading, error, addTweet } = useTweets();
  const { user } = useContext(AuthContext);

  if (loading) return <p>cargando tweets...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      {user ? <NewTweet addTweet={addTweet} /> : null}
      <h2>Latest Tweets</h2>
      <TweetList tweets={tweets} />
    </section>
  );
};
