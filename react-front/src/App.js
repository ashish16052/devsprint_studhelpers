import React from "react";
import { useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import axios from 'axios'
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useDispatch } from 'react-redux'
import { login } from './reducers/user'

import ExplorePage from "./pages/ExplorePage"
function App() {

  const [user, setUser] = useState(sessionStorage.getItem('user'));
  const dispatch = useDispatch();

  const getUser = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/auth/loginStatus`, { withCredentials: true })
    setUser(data);
    sessionStorage.setItem('user', JSON.stringify(data.user));
    dispatch(login(data))
    console.log(data);
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={user ? <ExplorePage/> : <Navigate to='/login' />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
