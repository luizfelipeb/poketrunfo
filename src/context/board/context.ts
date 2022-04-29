import { createContext } from 'react';
import { IBoardContext } from './interfaces/IBoardContext';

export const BoardContext = createContext<IBoardContext>({} as IBoardContext);
