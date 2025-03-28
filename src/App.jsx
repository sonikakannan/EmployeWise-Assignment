import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import UsersPage from './pages/userPage'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/users' element={<UsersPage/>}/>
    </Routes>
    </>
  )
}

export default App