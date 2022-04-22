import * as React from 'react';
import { Attribute as AttributeComponent, IAttribute } from './Attribute';

export interface ICard {
    attributes: IAttribute[] ;
    name: string;
    imageSrc: string;
}

export default function Card (props: ICard) {
  return (
    <>
      <p>{props.name}</p>
      <img src={props.imageSrc}></img>
      {props.attributes.map((attribute) => {
          <AttributeComponent {...attribute}/>
      })}
    </>
  );
}
