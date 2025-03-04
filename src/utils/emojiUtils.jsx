export const replaceEmojiWithImage = (text) => {
    const emojisToReplace = [
      { emoji: '👋', path: 'flower.png' },
      { emoji: '🚀', path: 'chattinoJetpack.png' },
      { emoji: '♥', path: 'mamaLove.png' },
      { emoji: '😂', path: 'raoLaugh.jpeg' },
    ];
  
    return emojisToReplace.reduce((updatedText, emojiObj) => {
      const regex = new RegExp(emojiObj.emoji, 'g');
      return updatedText.replace(
        regex,
        `<img src="${emojiObj.path}" alt="${emojiObj.emoji}"/>`
      );
    }, text);
  };
  