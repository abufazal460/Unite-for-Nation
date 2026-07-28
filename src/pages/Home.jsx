import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import HeroSection from '../components/sections/home/HeroSection';
import MissionSection from '../components/sections/home/MissionSection';
import WorkProcessSection from '../components/sections/home/WorkProcessSection';
import AchievementSection from '../components/sections/home/AchievementSection';
import CallToActionSection from '../components/sections/home/CallToActionSection';

export function Home() {
  return (
    <MainLayout currentPath="/">
      <HeroSection />
      <MissionSection />
      <WorkProcessSection />
      <AchievementSection />
      <CallToActionSection />
    </MainLayout>
  );
}

export default Home;
