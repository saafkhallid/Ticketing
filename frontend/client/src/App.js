import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './pages/admin/Sidebar.css'
import Routes from './Routes';
import { UserProvider } from './contextApi/Context'



function App() {
  return (
    <UserProvider>
      <Routes></Routes>
    </UserProvider>
  
  
  )
}

export default App;