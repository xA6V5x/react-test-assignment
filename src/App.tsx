import { useState } from 'react';
import Login from './screens/login/login';
import { CompanyLogo } from './components/logos/logos';
import Profile from './screens/profile/profile';
import { joinClassNames } from './utils/joinClassNames';
import { profileProps } from './types/profile';

const stylesContainer = ['appContainer', 'appContainerSize'];

function App() {
     const [user, setUser] = useState<profileProps>({});

     return (
          <div className={joinClassNames(stylesContainer)}>
               <CompanyLogo />
               {user.data ? (
                    <Profile name={user.data.name} avatar={user.data.avatar} setUser={setUser} />
               ) : (
                    <Login setUser={setUser} />
               )}
          </div>
     );
}

export default App;
