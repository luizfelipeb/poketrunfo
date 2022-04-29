/* eslint-disable react/jsx-no-constructed-context-values */
import * as React from 'react';
import { BoardContext } from './context';

export function BoardContextProvider({ children } : {children: React.ReactNode}) {
  function compare(): void {
    console.log('Opa bão?');
  }

  return (
    <BoardContext.Provider value={{ compare }}>
      {children}
    </BoardContext.Provider>
  );
}
