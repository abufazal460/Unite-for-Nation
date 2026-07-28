import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import ContactDetailsSection from '../components/sections/contact/ContactDetailsSection';
import MapSection from '../components/sections/contact/MapSection';

export function Contact() {
  return (
    <MainLayout currentPath="/contact">
      <ContactDetailsSection />
      <MapSection />
    </MainLayout>
  );
}

export default Contact;
