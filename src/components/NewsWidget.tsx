import Icon from "@/components/ui/icon";

const news = [
  {
    id: 1,
    title: "Новая функция видеозвонков",
    summary: "Теперь вы можете совершать видеозвонки прямо в чате",
    date: "5 июня 2025",
    category: "Обновления",
  },
  {
    id: 2,
    title: "Улучшения безопасности",
    summary: "Добавлено двухфакторная аутентификация для всех аккаунтов",
    date: "3 июня 2025",
    category: "Безопасность",
  },
  {
    id: 3,
    title: "Мобильное приложение v2.0",
    summary: "Обновленный дизайн и новые возможности в мобильной версии",
    date: "1 июня 2025",
    category: "Мобильные",
  },
  {
    id: 4,
    title: "Интеграция с календарем",
    summary: "Планируйте встречи и события прямо из чата",
    date: "28 мая 2025",
    category: "Функции",
  },
];

const NewsWidget = () => {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Новости</h3>
        <Icon name="Newspaper" size={20} className="text-purple-600" />
      </div>

      <div className="space-y-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded">
                {item.category}
              </span>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.summary}</p>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-purple-600 hover:text-purple-700 text-sm font-medium">
        Показать все новости →
      </button>
    </div>
  );
};

export default NewsWidget;
