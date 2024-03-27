import css from './Profile.module.css';

export default function Prifile({
  userData: { username, tag, location, avatar, stats },
}) {
  return (
    <div className={css.container}>
      <div className={css.mainSection}>
        <img className={css.avatar} src={avatar} alt="User avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.description}>@{tag}</p>
        <p className={css.description}>{location}</p>
      </div>

      <ul className={css.userStats}>
        <li className={css.itemStats}>
          <span>Followers</span>
          <span className={css.itemStatsNumber}>{stats.followers}</span>
        </li>
        <li className={css.itemStats}>
          <span>Views</span>
          <span className={css.itemStatsNumber}>{stats.views}</span>
        </li>
        <li className={css.itemStats}>
          <span>Likes</span>
          <span className={css.itemStatsNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
