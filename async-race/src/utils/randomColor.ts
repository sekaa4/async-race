import Constant from '../models/Constant';

export default function randomColor(): string {
  const letters: string[] = `${Constant.COLOR_LETTERS}`.split('');

  let color = `${Constant.ANCHOR}`;

  for (let i = 0; i < Constant.SIX; i += Constant.ONE) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    color += randomLetter;
  }

  return color;
}
