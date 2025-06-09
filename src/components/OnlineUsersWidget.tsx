import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const OnlineUsersWidget = () => {
  const users = [
    {
      id: 1,
      name: "Анна Петрова",
      role: "Дизайнер",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c31d?w=40&h=40&fit=crop&crop=face",
      status: "active",
    },
    {
      id: 2,
      name: "Михаил Сидоров",
      role: "Разработчик",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      status: "busy",
    },
    {
      id: 3,
      name: "Елена Козлова",
      role: "Менеджер",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      status: "active",
    },
    {
      id: 4,
      name: "Дмитрий Волков",
      role: "Аналитик",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      status: "away",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "busy":
        return "bg-red-500";
      case "away":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Активен";
      case "busy":
        return "Занят";
      case "away":
        return "Отошел";
      default:
        return "Оффлайн";
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center space-x-2">
            <Icon name="Users" size={20} className="text-green-500" />
            <span>Онлайн пользователи</span>
          </span>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            {users.filter((u) => u.status === "active").length} активных
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n.charAt(0))
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div
                className={`absolute -bottom-1 -right-1 w-3 h-3 border-2 border-white rounded-full ${getStatusColor(user.status)}`}
              ></div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-900 truncate">
                {user.name}
              </h4>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-600">{user.role}</p>
                <span className="text-xs text-gray-500">
                  • {getStatusText(user.status)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default OnlineUsersWidget;
