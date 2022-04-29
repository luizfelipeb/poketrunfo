import * as React from 'react';
import Card, { ICard } from '../molecules/Card';

export interface IDeck {
    cards: ICard[];
    score: number;
}

export function Deck({ cards }: IDeck) {
  return (
    <>
      {cards.map((card) => <Card {...card} />)}
    </>
  );
}
