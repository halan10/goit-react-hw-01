import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ friend }) {
  const statusClassName = clsx(friend.isOnline ? css.isOnline : css.isOffline);
  return (
    <div>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p className={css.title}>{friend.name}</p>
      <p className={statusClassName}>
        {friend.isOnline ? <span>Online</span> : <span>Offline</span>}
      </p>
    </div>
  );
}
