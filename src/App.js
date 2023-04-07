import React, {useState} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Details from './components/Details/Details';
import TodoContext from './components/Context/context';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const generateId = () => Math.floor(Math.random() * 1000);
  const [todoItems, setTodoItems] = useState([
    {
      id: generateId(),
      todo: 'Read books',
      complete: false,
    },
    {
      id: generateId(),
      todo: 'Journaling',
      complete: false,
    },
    {
      id: generateId(),
      todo: 'Make Dinner',
      complete: false,
    },
    {
      id: generateId(),
      todo: 'Push-ups',
      complete: false,
    },
  ]);
  return (
    <TodoContext.Provider value={{
      items: todoItems,
      setItems: setTodoItems
    }}>
    <div className="container">
      {isLoggedIn === '1'
        ? <> <Routes>
            <Route path="*" element={<Navigate replace to="/" />} />;
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
        </Routes>
        </>
        : <><Routes>
            <Route path="*" element={<Login />} />
        </Routes>
        </>
      }
      </div>
      </TodoContext.Provider>
  );
}
export default App;
