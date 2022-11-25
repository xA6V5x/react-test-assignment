import { useState } from 'react';
import Login from './components/login/login';
import { CompanyLogo } from './components/logos/logos';
import Profile from './components/profile/profile';
import { profileProps } from './types/profile';
import { joinClassNames } from './utils/joinClassNames';

const stylesContainer = ['appContainer', 'appContainerHeight'];

function App() {
     let userInitial = { name: '', avatar: '' };

     const [user, setUser] = useState<profileProps>(userInitial);

     const handleSetState = (user: profileProps) => {
          setUser(user);
     };

     return (
          <div className={joinClassNames(stylesContainer)}>
               <CompanyLogo />
               {user.name != '' && user.avatar != '' ? (
                    <Profile
                         name={user.name}
                         avatar={user.avatar}
                         handleSetState={handleSetState}
                    />
               ) : (
                    <Login handleSetState={handleSetState} />
               )}
          </div>
     );
}

export default App;
