import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Albums from './Components/Albums/Albums';
import Photos from './Components/Photos/Photos';
import Test from './Components/Test/Test';
import MyContext from './Components/Context';
function App() {
  const myValue=JSON.parse(localStorage.getItem("currentUser"));
  // const myValue="asdasd"

  return (
    <MyContext.Provider value={myValue}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
