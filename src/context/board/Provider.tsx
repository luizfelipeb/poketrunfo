/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import * as React from 'react';
import { BoardContext } from './context';

export function BoardContextProvider({ children } : {children: React.ReactNode}) {
  function compare(): void {
    console.log('Comparar cartas');
  }

  function startGame(): void {
    console.log('Start game');
  }

  return (
    <BoardContext.Provider value={{ compare, startGame }}>
      {children}
    </BoardContext.Provider>
  );
}
