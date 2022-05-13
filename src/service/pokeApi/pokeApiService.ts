import axios from 'axios';

export async function consumePokeApi() {
  const resp = await axios.get(`${process.env.POKE_API_URL}/${Math.floor(Math.random() * (151 - 1 + 1) + 1)}`);

  return resp;
}
