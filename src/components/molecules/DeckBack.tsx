import * as React from 'react';
import { CardBack } from '../atoms/CardBack';

export interface IDeckBack {
    cardAmount: number;
}

export function DeckBack({ cardAmount } : IDeckBack) {
  return (
    <>
      {[...Array(cardAmount)].map(() => <CardBack />)}
    </>
  );
}
