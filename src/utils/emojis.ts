//essas listas são criadas para gerar reações dinâmicas e tornar a UI mais divertida, elas devem ser usadas com uma váriável de número


const emojiList = {
  positive: ['😀', '🙌​', '🫡', '👍🏿', '🙏​', '✌🏿', '👏', '😎'],
  negative: ['🙁', '😭', '😮‍💨​', '🥺​', '😒​', '🙈', '😖', '🙀']
}

type ParameterEmoji = {
   typeEmoji: keyof typeof emojiList;
}
export function emoji({typeEmoji} : ParameterEmoji) {
  const randomNumber = Math.floor(Math.random() * emojiList[typeEmoji].length);

  const randomEmoji = emojiList[typeEmoji][randomNumber];
  
  return randomEmoji;
}
