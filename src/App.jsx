
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Discover from './pages/Discover';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <div>Hi there</div>
        <Routes>
            <Route path='/' element={<Discover/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
