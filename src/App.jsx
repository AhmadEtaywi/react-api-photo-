import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Albums from './Components/Albums/Albums';
import Photos from './Components/Photos/Photos';
import PrivateRoutes from './PrivateRoute';
import MyContext from './Components/Context';


function App() {
  const [currentUser, setCurrentUser] = useState((JSON.parse(localStorage.getItem("currentUser"))));
  return (
    <BrowserRouter>
      <MyContext.Provider value={{ currentUser, setCurrentUser }}>
        <Routes>

          <Route path="/" element={<Login />} />

          <Route element={<PrivateRoutes currentUser={currentUser} />}>
            <Route path="/albums" element={<Albums />} />
            <Route path="/photos" element={<Photos />} />
          </Route>

        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
