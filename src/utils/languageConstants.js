export const SUPPORTED_LANGUAGES = [
  { idntifier: "en", name: "English" },
  { idntifier: "hindi", name: "Hindi" },
  { idntifier: "spanish", name: "Spanish" },
];

const lang = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What would you like to watch today ?",
  },
  hindi: {
    search: "खोज",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे ?",
  },
  spanish: {
    search: "Buscar",
    gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
  },
};

export default lang;
