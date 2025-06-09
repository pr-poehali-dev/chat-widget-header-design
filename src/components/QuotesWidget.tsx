import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const quotes = [
  {
    text: "ChatHub изменил наш способ работы в команде. Теперь мы всегда на связи!",
    author: "Анна Петрова",
    role: "Менеджер проектов",
  },
  {
    text: "Простота использования и надежность - именно то, что нам было нужно.",
    author: "Михаил Иванов",
    role: "Разработчик",
  },
  {
    text: "Лучшая платформа для общения, которую я когда-либо использовал.",
    author: "Елена Сидорова",
    role: "Дизайнер",
  },
  {
    text: "Безопасность и скорость работы на высшем уровне.",
    author: "Дмитрий Козлов",
    role: "IT-директор",
  },
];

const QuotesWidget = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">
          Отзывы пользователей
        </h3>
        <Icon name="Quote" size={20} className="text-purple-600" />
      </div>

      <div className="relative min-h-[120px]">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentQuote ? "opacity-100" : "opacity-0"
            }`}
          >
            <blockquote className="text-gray-700 mb-4 italic">
              "{quote.text}"
            </blockquote>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center mr-3">
                <Icon name="User" size={20} className="text-purple-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  {quote.author}
                </div>
                <div className="text-sm text-gray-600">{quote.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {quotes.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentQuote ? "bg-purple-600" : "bg-purple-300"
            }`}
            onClick={() => setCurrentQuote(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuotesWidget;
