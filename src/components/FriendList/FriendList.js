import css from './friendList.module.css';
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
    return (
    <ul className={css.friendList}>

    {friends.map(item => (
    <FriendListItem
        key={item.id}
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
        /> 
    ))}       
     
    </ul>)
}