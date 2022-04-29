import * as React from 'react';
import { Deck, IDeck } from './Deck';
import { DeckBack } from '../molecules/DeckBack';
import { BoardContextProvider } from '../../context/board/Provider';

export interface IBoard {
    playerDack: IDeck;
}

export function Board({ playerDack } : IBoard) {
  return (
    <BoardContextProvider>
      <DeckBack cardAmount={10} />
      <Deck {...playerDack} />
    </BoardContextProvider>
  );
}
