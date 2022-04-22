import * as React from 'react';
import Attribute from '../../types/Attribute';
import { Attribute as AttributeComponent } from './Attribute';

export interface ICard {
    attributes: Attribute[] ;
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
