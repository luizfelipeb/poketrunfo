import { useContext } from 'react';
import { BoardContext } from './context';

export function useBoardContext() {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error(
      "The BoardContext it's mean to be used by its childrens components only.",
    );
  }

  return context;
}
