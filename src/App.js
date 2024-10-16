import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store'; // Import your Redux store
import './App.css';
import Form from "./components/Form"
import TableData from './components/TableData';
import MemoExample from './components/MemoExample';
import CallBackExample from './components/CallBackExample';
import Child from './components/Child';
import { createContext } from 'react';
import ChildA from './context/ChildA';
import ApiExample from './components/ApiExample';
import Navbar from './components/Navbar';

export const data = createContext();

function App() {
  const name =  {name:'yash'} 
  return (
    <div>
    <data-Provider value={name}>
      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/edit/:id' element={<Form />} />
            <Route path='/table' element={<TableData />} />
            <Route path='/memo' element={<MemoExample />} />
            <Route path='/call-back' element={<CallBackExample />} />
            <Route path='/context' element={<ChildA name={''} />} />
            <Route path='/Api' element={<ApiExample/>} />
            <Route path='/Navbar' element={<Navbar/>} />

          </Routes>
        </BrowserRouter>
    </data-Provider>
    </div>
  );
}

export default App;