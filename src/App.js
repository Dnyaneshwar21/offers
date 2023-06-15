import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
export const store = createContext()
function App() {
  const [token, setToken] = useState(null)
  return (
    <store.Provider value={[token, setToken]}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignUp />} />
      </Routes>
      </BrowserRouter>
    </store.Provider>
  );
}

export default App;
