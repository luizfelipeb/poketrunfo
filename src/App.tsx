import React from 'react';
import './App.css';
import { config } from 'dotenv';
import { LandingPage } from './components/pages/LandingPage';
import { BoardContextProvider } from './context/board/Provider';

function App() {
  config();

  return (
    <div className="App">
      <BoardContextProvider>
        <LandingPage />
      </BoardContextProvider>
    </div>
  );
}

export default App;
