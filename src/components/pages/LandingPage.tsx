import * as React from 'react';
import { useBoardContext } from '../../context/board/useCard';

export function LandingPage() {
  const { startGame } = useBoardContext();

  return (
    <div>
      <h1>Poketrunfo</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Alias deleniti aperiam quisquam at necessitatibus fugit
        maxime expedita iure cumque doloremque nobis nihil et,
        minus laborum quo tenetur voluptatibus. Officiis, quisquam.
      </p>
      <button type="button" onClick={startGame}>Iniciar Jogo</button>
    </div>
  );
}
