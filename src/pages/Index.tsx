import Header from "@/components/Header";
import ChatListWidget from "@/components/ChatListWidget";
import OnlineUsersWidget from "@/components/OnlineUsersWidget";
import StatsWidget from "@/components/StatsWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ChatListWidget />
          </div>

          <div className="lg:col-span-1">
            <OnlineUsersWidget />
          </div>

          <div className="lg:col-span-1">
            <StatsWidget />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
