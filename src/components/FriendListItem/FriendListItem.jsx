import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <div className={css.itemCont}>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className={isOnline ? css.onlineText : css.offlineText}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
};

export default FriendListItem;
