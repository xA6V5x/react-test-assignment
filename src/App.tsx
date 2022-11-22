import { useState } from 'react';
import Login from './components/login/login';
import Profile from './components/profile/profile';
import { profileProps } from './types/profile';

function App() {
     let userProps = { avatar: '/avatar.jpeg', name: 'Elon' };

     const [user, setUser] = useState(userProps);

     //  return user ? <div>Profile TBD</div> : <div>Login TBD</div>;
     return user ? <Profile name={user.name} avatar={user.avatar} /> : <Login />;
}

export default App;
