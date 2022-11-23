import { profilePropsFunction } from '../../types/profile';
import { setStateApp } from '../../types/login';
import styles from './profile.module.css';

function Profile({ name, avatar, handleSetState }: profilePropsFunction) {
     const handleFunction = () => {
          handleSetState({ name: '', avatar: '' });
     };

     return (
          <div className={styles.container}>
               <img className={styles.avatar} src={avatar} alt={name} />
               <label className="title">That's it, {name}!</label>
               <button
                    className="button"
                    onClick={() => {
                         handleFunction();
                    }}
               ></button>
          </div>
     );
}

export default Profile;
