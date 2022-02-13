import './index.css';
import { Login } from './Components/Login';
import  React, { useState } from 'react';
import { LoginContext } from './Contexts/LoginContext';
import { Profile } from './Components/Profile';

function App() {

  const [username, setUsername] = useState('')
  const [showProfile, setShowProfile] = useState(false)

  return (
    <div>
       <LoginContext.Provider value={{ username, showProfile, setShowProfile, setUsername}}>
         { showProfile ? <Profile/> : <Login/>}
       </LoginContext.Provider>
    </div>
  );
}

export default App;
