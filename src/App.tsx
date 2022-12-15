import { useState } from 'react';
import { CompanyLogo } from './components/logos/logos';
import { LoginScreen } from './screens/LoginScreen';
import Profile from './screens/profile/profile';
import { joinClassNames } from './utils/joinClassNames';
import { UserData } from './api';

const stylesContainer = ['app_container', 'app_container_size'];

function App() {
     const [user, setUser] = useState<UserData>();

     return (
          <div className={joinClassNames(stylesContainer)}>
               <CompanyLogo />
               {user ? (
                    <Profile user={user} onLogout={() => setUser(undefined)} />
               ) : (
                    <LoginScreen onSuccess={setUser} />
               )}
          </div>
     );
}

export default App;
