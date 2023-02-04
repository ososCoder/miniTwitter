import { Tweet } from '../Tweet/Tweet';

export const TweetList = ({ tweets }) => {
  return tweets.length ? (
    <ul>
      {tweets.map((tweet) => (
        <li key={tweet.id}>
          <Tweet tweet={tweet} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no tweets yet...</p>
  );
};
