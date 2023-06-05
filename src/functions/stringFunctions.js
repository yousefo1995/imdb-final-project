export const stringSlice = (value) => {
  return value.slice(0, 4);
};
export const wordsUpperCase = (word) => {
  let languageUpper;
  if (word) {
    languageUpper = word.toUpperCase();
  } else {
    languageUpper = "";
  }
  return languageUpper;
};
