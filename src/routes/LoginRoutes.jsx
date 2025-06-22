import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { paths } from '../hooks/paths'
import { Login } from '../pages'

const LoginRoutes = () => {
  return (
    <Routes>
        <Route path={paths.login} element={<Login />} />
    </Routes>
  )
}

export default LoginRoutes