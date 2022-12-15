import Swal from 'sweetalert2';
import { LogoutIcon } from '../../components/logos/logos';
import styles from './ProfileScreen.module.css';
import { UserData } from '../../api';

interface ProfileScreenProps {
     user: UserData;
     onLogout: () => void;
}

export function ProfileScreen({ user, onLogout }: ProfileScreenProps) {
     const { name, avatar } = user;

     const handleLogout = () => {
          Swal.fire({
               title: 'Are you sure?',
               text: '¿Do you want to logout?',
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#2f7bff',
               cancelButtonColor: '#ff0044',
               confirmButtonText: 'Logout',
          }).then((result) => {
               if (result.isConfirmed) {
                    onLogout();
               }
          });
     };

     return (
          <div className={styles.container}>
               <img className={styles.avatar} src={avatar} alt={name} />
               <label className="title">That's it, {name}!</label>
               <button
                    className="button"
                    onClick={() => {
                         handleLogout();
                    }}
               >
                    <div style={{ display: 'flex', justifyContent: 'center', marginRight: '10px' }}>
                         <LogoutIcon />
                    </div>

                    <label>Logout</label>
               </button>
          </div>
     );
}
