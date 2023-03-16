import user from '../components/Profile/user.json';
import data from "../components/Statistics/data.json";
import friends from "../components/FriendList/friends.json";
import transactions from "../components/TransactionHistory/transactions.json"

import Profile from "./Profile/Profile";
import Statistics from './Statistics/Statistics';
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "../components/TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        margin: 'auto',
        padding: 20
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
