import * as React from 'react';
// import { useBoardContext } from '../../context/board/useBoard';
import { usePokeApi } from '../../service/pokeApi/usePokeApi';

export function LandingPage() {
  // const { startGame } = useBoardContext();

  const { consumePokeApi } = usePokeApi();

  return (
    <div>
      <h1>Poketrunfo</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Alias deleniti aperiam quisquam at necessitatibus fugit
        maxime expedita iure cumque doloremque nobis nihil et,
        minus laborum quo tenetur voluptatibus. Officiis, quisquam.
      </p>
      <button type="button" onClick={consumePokeApi}>Iniciar Jogo</button>
    </div>
  );
}
