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

  return { tweets, loading, error };
};
