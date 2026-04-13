// limita os textos até 42 caracters, ideal para textos de card

export default function truncateText(text: string, maxLength: number = 42): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}