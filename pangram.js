export const isPangram = (sentence) => {
  let string;
  sentence = sentence.toLowerCase();
  string = 'abcdefghijklmnopqrstuvwxyz';
  return string.split('').every(letter => sentence.includes(letter));
};
