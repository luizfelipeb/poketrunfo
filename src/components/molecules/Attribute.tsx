import * as React from 'react';

export interface IAttribute {
    name: string;
    value: number;
}

export function Attribute (props: IAttribute) {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.value}</p>
    </>
  );
}
