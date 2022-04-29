import * as React from 'react';
import { Attribute, IAttribute } from './Attribute';

export interface ICard {
    attributes: IAttribute[];
    pokemonName: string;
    imageSrc: string;
}

export default function Card({ pokemonName, imageSrc, attributes } : ICard) {
  return (
    <>
      <p>{pokemonName}</p>
      <img src={imageSrc} alt="Pokemon" />
      {attributes.map((attribute) => <Attribute {...attribute} />)}
    </>
  );
}
