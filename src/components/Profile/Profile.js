import PropTypes from 'prop-types';
import defaultImage from "./no-image-available.jpeg";
import css from "./profile.module.css";

const Profile = ({ username, tag, location, avatar = defaultImage, stats}) => {
  return (
    <div className={css.profile}>
      <div>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.statsItem}>Followers</span>
          <span className={css.statsItem}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.statsItem}>Views</span>
          <span className={css.statsItem}>{stats.views}</span>
        </li>
        <li>
          <span className={css.statsItem}>Likes</span>
          <span className={css.statsItem}>{stats.likes}</span>
        </li>
      </ul>
</div>
  )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
  }).isRequired,
}

export default Profile;