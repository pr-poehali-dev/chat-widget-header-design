import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const StatsWidget = () => {
  const stats = [
    {
      label: "Сообщений сегодня",
      value: "2,847",
      change: "+12%",
      icon: "MessageCircle",
      color: "text-blue-500",
    },
    {
      label: "Активных пользователей",
      value: "156",
      change: "+8%",
      icon: "Users",
      color: "text-green-500",
    },
    {
      label: "Новых чатов",
      value: "23",
      change: "+15%",
      icon: "Plus",
      color: "text-purple-500",
    },
  ];

  const recentActivity = [
    { time: "14:32", event: "Новый пользователь присоединился", type: "join" },
    { time: "14:28", event: "Создан чат 'Проект Alpha'", type: "chat" },
    {
      time: "14:15",
      event: "Обновлены настройки безопасности",
      type: "security",
    },
    { time: "14:02", event: "Загружено 5 новых файлов", type: "file" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Icon name="BarChart3" size={20} className="text-purple-500" />
            <span>Статистика</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-50 rounded-lg"
              >
                <Icon
                  name={stat.icon as any}
                  size={24}
                  className={`mx-auto mb-2 ${stat.color}`}
                />
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700 text-xs"
                >
                  {stat.change}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2 text-lg">
            <Icon name="Activity" size={20} className="text-orange-500" />
            <span>Последняя активность</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-500 font-mono">
                  {activity.time}
                </span>
                <span className="text-sm text-gray-700 flex-1">
                  {activity.event}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsWidget;
