
import React from 'react';
import { BrandCarousel } from '../components/layout/BrandCarousel';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { FeaturedCarsSection } from '../components/home/FeaturedCarsSection';
import { CTASection } from '../components/home/CTASection';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Brand Carousel Section */}
      <section className="w-full -mt-12 overflow-hidden">
        <BrandCarousel />
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Featured Cars Section */}
      <FeaturedCarsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
