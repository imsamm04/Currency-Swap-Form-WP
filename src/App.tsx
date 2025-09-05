import { Layout } from './components/layout';
import { HeroSection, StatsSection, FeaturesSection, ExploreSection } from './components/sections';

function App() {
  return (
    <Layout>
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* Explore Section */}
        <ExploreSection />
        
        {/* Scroll to learn more indicator */}
        <div className="text-center py-12">
          <div className="inline-flex items-center text-gray-500 text-sm">
            <span>Scroll to learn more</span>
            <svg className="w-4 h-4 ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default App;
