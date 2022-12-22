import Swal from 'sweetalert2';
import { CompanyLogo, LogoutIcon } from '../../components/logos/logos';
import styles from './ProfileScreen.module.css';
import { UserData } from '../../api';
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button/Button';

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
          <ScreenContainer>
               <CompanyLogo />
               <div className={styles.container}>
                    <img className={styles.avatar} src={avatar} alt={name} />
                    <Title title={`That's it, ${name}!`} />

                    <Button
                         name="Logout"
                         onClick={() => {
                              handleLogout();
                         }}
                         icon={<LogoutIcon />}
                         iconPosition="left"
                         className="button"
                    />
               </div>
          </ScreenContainer>
     );
}
