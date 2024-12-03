import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from './Components/Mainlayout'
import Dashboard from './Components/Dashboard'
import  Login from './Components/Login'
import  Registration from './Components/Registration'

function App() {
  const[store, setStore]=useState("");
  return (
    <>
      <div>
        {JSON.stringify(store)}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/registration" element={<Registration regData={setStore}/>}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
