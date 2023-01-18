import Constant from '../models/Constant';

export default function randomColor(): string {
  const letters: string[] = '0123456789ABCDEF'.split('');

  let color = '#';

  for (let i = 0; i < Constant.SIX; i += Constant.ONE) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    color += randomLetter;
  }

  return color;
}
