import { EMOJIS_TO_REPLACE } from "./constants";

export const replaceEmojiWithImage = (text) => {

  return EMOJIS_TO_REPLACE.reduce((updatedText, emojiObj) => {
    const regex = new RegExp(emojiObj.emoji, 'g');
    return updatedText.replace(
      regex,
      `<img src="${emojiObj.path}" alt="${emojiObj.emoji}"/>`
    );
  }, text);
};
