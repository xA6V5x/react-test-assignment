import { profileProps } from '../../types/profile';
import styles from './profile.module.css';

function Profile({ name, avatar }: profileProps) {
     return (
          <div className={styles.container}>
               <img className={styles.avatar} src={avatar} alt={name} />
               <label className="title">That's it, {name}!</label>
               <button className="button"></button>
          </div>
     );
}

export default Profile;
