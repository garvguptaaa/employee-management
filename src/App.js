import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import SideBar from './component/sidebar/SideBar';
import ProfilePage from './pages/profile/ProfilePage';

import LoginPage from './pages/login/LoginPage';

function App() {
  return (
      <div className="App">
        <SideBar/>  
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<ProfilePage/>} />
        </Routes> 
       <LoginPage/>
      </div>
  );
}

export default App;
