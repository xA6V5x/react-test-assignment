import { useState } from 'react';
import Login from './components/login/login';
import Profile from './components/profile/profile';
import { profileProps } from './types/profile';

function App() {
     let userInitial = { name: '', avatar: '' };

     const [user, setUser] = useState(userInitial);

     const handleSetState = (user: profileProps) => {
          setUser(user);
     };

     //  return user ? <div>Profile TBD</div> : <div>Login TBD</div>;

     return user.name != '' ? (
          <Profile name={user.name} avatar={user.avatar} handleSetState={handleSetState} />
     ) : (
          <Login handleSetState={handleSetState} />
     );
}

export default App;
