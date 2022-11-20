import { useState } from 'react';
import Login from './components/login/login';
import Profile from './components/profile/profile';

function App() {
     const [user, setUser] = useState();

     //  return user ? <div>Profile TBD</div> : <div>Login TBD</div>;
     return user ? <Profile /> : <Login />;
}

export default App;
