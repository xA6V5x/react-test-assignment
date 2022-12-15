import { useState } from 'react';
import { CompanyLogo } from './components/logos/logos';
import { LoginScreen } from './screens/LoginScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { UserData } from './api';

function App() {
     const [user, setUser] = useState<UserData>();

     return user ? (
          <ProfileScreen user={user} onLogout={() => setUser(undefined)} />
     ) : (
          <LoginScreen onSuccess={setUser} />
     );
}

export default App;
