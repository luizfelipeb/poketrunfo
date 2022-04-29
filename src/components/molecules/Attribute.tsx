import * as React from 'react';

export interface IAttribute {
    name: string;
    value: number;
}

export function Attribute({ name, value }: IAttribute) {
  return (
    <button type="button">
      <p>{name}</p>
      <p>{value}</p>
    </button>
  );
}
