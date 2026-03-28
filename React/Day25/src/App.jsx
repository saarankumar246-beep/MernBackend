import { useTheme } from "./context/ThemeContext";
import { useLanguage } from "./context/LanguageContext";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLanguage();

  // text object
  const text = {
    en: {
      greeting: "Hello",
      themeBtn: "Toggle Theme",
      langBtn: "Switch Language",
    },
    ta: {
      greeting: "வணக்கம்",
      themeBtn: "தீம் மாற்று",
      langBtn: "மொழி மாற்று",
    },
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ta" : "en"));
  };

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center gap-4 transition-all duration-300
      ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
    >
      {/* Greeting */}
      <h1 className="text-3xl font-bold">
        {text[lang].greeting}
      </h1>

      {/* Theme Button */}
      <button
        onClick={toggleTheme}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg"
      >
        {text[lang].themeBtn}
      </button>

      {/* Language Button */}
      <button
        onClick={toggleLanguage}
        className="px-6 py-2 bg-green-500 text-white rounded-lg"
      >
        {text[lang].langBtn}
      </button>
    </div>
  );
};

export default App;