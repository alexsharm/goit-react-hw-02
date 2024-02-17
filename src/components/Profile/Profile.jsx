import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.aboutCont}>
          <img className={css.userIcon} src={image} alt="User avatar" />
          <p className={css.userName}>{name}</p>
          <p className={css.grayText}>{tag}</p>
          <p className={css.grayText}>{location}</p>
        </div>

        <ul className={css.statList}>
          <li className={css.statItem}>
            <span>Followers</span>
            <span>{followers}</span>
          </li>
          <li className={css.statItem}>
            <span>Views</span>
            <span>{views}</span>
          </li>
          <li className={css.statItem}>
            <span>Likes</span>
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
