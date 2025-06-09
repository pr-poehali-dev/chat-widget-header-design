import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import FeaturesSection from "@/components/FeaturesSection";
import ChatListWidget from "@/components/ChatListWidget";
import OnlineUsersWidget from "@/components/OnlineUsersWidget";
import StatsWidget from "@/components/StatsWidget";
import NewsWidget from "@/components/NewsWidget";
import QuotesWidget from "@/components/QuotesWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-6 py-8">
        <HeroSlider />

        <FeaturesSection />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <NewsWidget />
          <QuotesWidget />
        </div>
      </main>
    </div>
  );
};

export default Index;
