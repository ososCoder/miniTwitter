import { useEffect, useState } from 'react';
import { getAllTweetsService } from '../services';

export const useTweets = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTweets = async () => {
      try {
        setLoading(true);

        const data = await getAllTweetsService();

        setTweets(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTweets();
  }, []);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  return { tweets, loading, error, addTweet };
};
