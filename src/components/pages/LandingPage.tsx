import React, { useEffect, useState } from 'react';
import { usePokeApi } from '../../service/pokeApi/usePokeApi';
import { IAttribute } from '../molecules/Attribute';
import Card from '../molecules/Card';

export function LandingPage() {
  const { consumePokeApi } = usePokeApi();
  const [pokemon, setPokemon] = useState<any>();
  const [stats, setStats] = useState<IAttribute[]>([]);

  useEffect(() => {
    consumePokeApi().then((res) => {
      setPokemon(res.data);
    });
  }, []);

  useEffect(() => {
    if (pokemon) {
      setStats(pokemon.stats);
    }
  }, [pokemon]);

  function parseStatsToAtributes(statsArray: any[]): IAttribute[] {
    const atributes: IAttribute[] = [];

    statsArray.forEach((value) => {
      atributes.push({ name: value.stat.name, value: value.base_stat });
    });

    return atributes;
  }

  return (
    <div>
      <h1>Poketrunfo</h1>
      {pokemon && (
      <Card
        attributes={parseStatsToAtributes(stats)}
        pokemonName={pokemon.name}
        imageSrc={pokemon.sprites.front_default}
      />
      )}
    </div>
  );
}
