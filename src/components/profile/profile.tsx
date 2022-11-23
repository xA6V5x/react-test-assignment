import { profilePropsFunction } from '../../types/profile';
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
               >
                    <svg
                         style={{ marginRight: '10px' }}
                         width="16"
                         height="21"
                         viewBox="0 0 16 21"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                         <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5 1.5H12C12.2761 1.5 12.5 1.72386 12.5 2V4.25C12.5 4.66421 12.8358 5 13.25 5C13.6642 5 14 4.66421 14 4.25V2C14 0.895431 13.1046 0 12 0H2C0.895431 0 0 0.89543 0 2V16.7639C0 17.5215 0.428004 18.214 1.10557 18.5528L5.10557 20.5528C6.43538 21.2177 8 20.2507 8 18.7639V18H12C13.1046 18 14 17.1046 14 16V13.75C14 13.3358 13.6642 13 13.25 13C12.8358 13 12.5 13.3358 12.5 13.75V16C12.5 16.2761 12.2761 16.5 12 16.5H8V4.23607C8 3.47852 7.572 2.786 6.89443 2.44721L5 1.5ZM1.5 2.23607V16.7639C1.5 16.9533 1.607 17.1264 1.77639 17.2111L5.77639 19.2111C6.10884 19.3774 6.5 19.1356 6.5 18.7639V4.23607C6.5 4.04668 6.393 3.87355 6.22361 3.78885L2.22361 1.78885C1.89116 1.62263 1.5 1.86438 1.5 2.23607Z"
                              fill="white"
                         />
                         <path
                              d="M16 9C16 8.80109 15.921 8.61032 15.7803 8.46967L13.7803 6.46967C13.4874 6.17678 13.0126 6.17678 12.7197 6.46967C12.4268 6.76256 12.4268 7.23744 12.7197 7.53033L13.4393 8.25H10.75C10.3358 8.25 10 8.58579 10 9C10 9.41421 10.3358 9.75 10.75 9.75H13.4393L12.7197 10.4697C12.4268 10.7626 12.4268 11.2374 12.7197 11.5303C13.0126 11.8232 13.4874 11.8232 13.7803 11.5303L15.7803 9.53033C15.7841 9.52656 15.7878 9.52275 15.7915 9.51891C15.9206 9.38418 16 9.20136 16 9Z"
                              fill="white"
                         />
                    </svg>
                    <label>Logout</label>
               </button>
          </div>
     );
}

export default Profile;
