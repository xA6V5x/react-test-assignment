import { useState } from 'react';
import Login from './screens/login/login';
import { CompanyLogo } from './components/logos/logos';
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
                    <Login onSuccess={setUser} />
               )}
          </div>
     );
}

export default App;
