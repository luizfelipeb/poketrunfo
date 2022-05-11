import React from 'react';
import './App.css';
import { LandingPage } from './components/pages/LandingPage';
import { BoardContextProvider } from './context/board/Provider';

function App() {
  return (
    <div className="App">
      <BoardContextProvider>
        <LandingPage />
      </BoardContextProvider>
    </div>
  );
}

export default App;
