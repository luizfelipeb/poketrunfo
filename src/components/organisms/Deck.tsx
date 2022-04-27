import * as React from 'react';
import Card, { ICard } from '../molecules/Card';

export interface IDeck {
    cards: ICard[];
    score: number;
}

export function Deck (props: IDeck) {
  return (
    <>
        {props.cards.map((card) => {
            <Card {...card}/>
        })}
    </>
  );
}
