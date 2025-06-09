import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ChatListWidget = () => {
  const chats = [
    {
      id: 1,
      name: "Команда разработки",
      lastMessage: "Когда будет готов релиз?",
      time: "2 мин",
      unread: 3,
      avatar:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=40&h=40&fit=crop&crop=face",
      online: true,
    },
    {
      id: 2,
      name: "Дизайн-студия",
      lastMessage: "Новые макеты готовы для ревью",
      time: "15 мин",
      unread: 0,
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face",
      online: true,
    },
    {
      id: 3,
      name: "Маркетинг",
      lastMessage: "Планы на следующую неделю",
      time: "1 ч",
      unread: 1,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      online: false,
    },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center space-x-2">
            <Icon name="MessageSquare" size={20} className="text-purple-500" />
            <span>Активные чаты</span>
          </span>
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            {chats.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarImage src={chat.avatar} alt={chat.name} />
                <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
              </Avatar>
              {chat.online && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900 truncate">
                  {chat.name}
                </h4>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">
                {chat.lastMessage}
              </p>
            </div>
            {chat.unread > 0 && (
              <Badge className="bg-purple-500 text-white">{chat.unread}</Badge>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ChatListWidget;
