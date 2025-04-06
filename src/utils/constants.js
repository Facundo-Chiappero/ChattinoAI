export const MODEL = 'gemini-2.0-flash'

export const ROLES = {
  USER: 'user',
  BOT: 'model'
}

export const INITIAL_CHAT = [
  {
    role: ROLES.USER,
    parts: [{ text: '' }],
  },
  {
    role: ROLES.BOT,
    parts: [{ text: 'Ciaora 👋, i\'m a chattino ai, what can i help with?' }],
  },
]

export const EMOJIS_TO_REPLACE = [
  { emoji: '👋', path: 'flower.png' },
  { emoji: '🚀', path: 'chattinoJetpack.png' },
  { emoji: '♥', path: 'mamaLove.png' },
  { emoji: '😂', path: 'raoLaugh.png' },
  { emoji: '🥒', path: 'cucumber.png' },
];

export const APP = {
  TITLE: 'ChattinoAI'
}

export const BTN_BG = {
  NORMAL: 'bg-blue-950',
  HOVER: 'hover:bg-blue-950'
}

export const HOW_TO_USE_IMGS = {
  BODY: 'you can use the emojis by pressing',
  CLARIFICATION: '( windows + . )'
}

export const ERROR = 'It seems there was an error. I would appreciate it if you could report it through this link: https://github.com/Facundo-Chiappero/ChattinoAI/issues'

export const HOST_BACKEND_URL = "/.netlify/functions"
