import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import WhoWeAreSection from '../components/sections/about/WhoWeAreSection';
import FounderSection from '../components/sections/about/FounderSection';
import CallToActionSection from '../components/sections/home/CallToActionSection';

export function About() {
  return (
    <MainLayout currentPath="/about">
      <WhoWeAreSection />
      <FounderSection />
      <CallToActionSection />
    </MainLayout>
  );
}

export default About;
