import { useEffect, useState } from 'react';
import { getSingleTweetService } from '../services';

export const useTweet = (id) => {
  const [tweet, setTweet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTweet = async () => {
      try {
        setLoading(true);

        const data = await getSingleTweetService(id);

        setTweet(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadTweet();
  }, [id]);

  return { tweet, loading, error };
};
