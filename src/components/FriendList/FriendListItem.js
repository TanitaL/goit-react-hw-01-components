import PropTypes from 'prop-types';
import css from './friendList.module.css';

export default function FriendListItem({ avatar, name, isOnline}) {
    return <li className={css.friendItem}>
        <span className={isOnline ? css.statusOnline : css.statusOffline}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.friendName}>{name}</p>
        </li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}
