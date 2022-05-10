import * as React from 'react';
import { Deck, IDeck } from './Deck';
import { DeckBack } from '../molecules/DeckBack';

export interface IBoard {
    playerDack: IDeck;
}

export function Board({ playerDack } : IBoard) {
  return (
    <>
      <DeckBack cardAmount={10} />
      <Deck {...playerDack} />
    </>
  );
}
