import * as React from 'react';
import { Container } from './styles';

export interface IAttribute {
    name: string;
    value: number;
}

export function Attribute({ name, value }: IAttribute) {
  return (
    <Container type="button">
      <div className="attr-name">{name}</div>
      <div className="attr-value">{value}</div>
    </Container>
  );
}
