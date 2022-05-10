import axios from 'axios';

export async function consumePokeApi() {
  const resp = await axios.get(`${process.env.POKE_API_URL}`);

  return resp;
}
