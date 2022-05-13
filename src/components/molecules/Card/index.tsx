import * as React from 'react';
import { Attribute, IAttribute } from '../Attribute';
import { Container, StyledPaper } from './styles';

export interface ICard {
    attributes: IAttribute[];
    pokemonName: string;
    imageSrc: string;
}

export default function Card({ pokemonName, imageSrc, attributes } : ICard) {
  return (
    <Container>
      <StyledPaper elevation={15}>
        <div className="card-header">
          <div className="card-name">{pokemonName}</div>
          <img src={imageSrc} alt="Pokemon" />
        </div>
        {attributes.map((attribute, index) => <Attribute {...attribute} key={index} />)}
      </StyledPaper>
    </Container>
  );
}
