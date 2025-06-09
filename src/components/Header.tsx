import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="MessageCircle" size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 font-montserrat">
              ChatHub
            </h1>
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          <Button
            variant="ghost"
            className="text-gray-600 hover:text-purple-600"
          >
            <Icon name="Home" size={16} />
            Главная
          </Button>
          <Button
            variant="ghost"
            className="text-gray-600 hover:text-purple-600"
          >
            <Icon name="Users" size={16} />
            Команды
          </Button>
          <Button
            variant="ghost"
            className="text-gray-600 hover:text-purple-600"
          >
            <Icon name="Settings" size={16} />
            Настройки
          </Button>
          <Button className="bg-purple-500 hover:bg-purple-600">
            <Icon name="Plus" size={16} />
            Новый чат
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
