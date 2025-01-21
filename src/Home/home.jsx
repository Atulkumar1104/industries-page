import React, { useState, useEffect } from "react";
import LatestInsights from "../components/latestInsights";
import Carousel from "../components/featuredProjects";
import IndustryInsights from "../components/industryInsights";
import CTASection from "../components/cta";
import FAQSection from "../components/faq";
import ContactSection from "../components/contactUs";
import HealthcareServices from "../components/healthcare";
import HealthcareServices1 from "../components/healthcare 2";

import CombinedHealthcarePage from "../components/healthcare 2";
import BenefitsGrid from "../components/whyus";
import { FeatureStepsDemo } from "../components/ourprocess";
import Demo from "../components/tiltdemo";
import HealthcareServices2 from "../components/lastone";

const Home = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav only after scrolling past 100vh
      if (window.scrollY > window.innerHeight) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <div className="max-w-5xl mx-auto text-center mt-12">
            <h1 className="text-5xl font-bold leading-tight mb-6 text-white">
              Healthcare Software Development Company: Building the Future of
              Healthcare
            </h1>

            <p className="text-gray-100 mb-10 text-xl mx-auto max-w-4xl">
              In today's rapidly evolving healthcare landscape, technology is
              pivotal in enhancing patient care, streamlining operations, and
              driving innovation. As a leading healthcare software development
              company, we specialize in creating custom software solutions that
              address the unique challenges and opportunities within the
              healthcare industry. We understand the complexities of healthcare
              regulations, data security, and interoperability, and we build
              software that meets the highest standards of quality and
              compliance.
            </p>

            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-orange-500 text-black rounded-3xl font-bold hover:bg-orange-600 transition-colors duration-300">
                Get started
              </button>
              <button className="px-8 py-3 bg-orange-500 text-black rounded-3xl font-bold hover:bg-orange-600 transition-colors duration-300">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-black to-gray-900">
        <HealthcareServices />
      </section>
      <section className="bg-gradient-to-b fro-gray-900 to-black">
        <CombinedHealthcarePage />
      </section>
      <section className="bg-gradient-to-b from-black to-gray-900">
        <BenefitsGrid />
      </section>

      <section className="bg-gradient-to-b from-gray-900 to-black">
        <FeatureStepsDemo />
      </section>
      <section className="bg-gradient-to-b from-black to-gray-900">
        <Demo />
      </section>
      <section><HealthcareServices2/></section>

      {/* Latest Insights Section */}
      <section>
        <LatestInsights />
      </section>
      <section className="bg-gradient-to-b from-gray-900 to-black">
        <Carousel />
      </section>
      <section className="bg-gradient-to-b from-black to-gray-900">
        <IndustryInsights />
      </section>
      <section className="bg-gradient-to-b from-gray-900 to-black">
        <CTASection />
      </section>
      <section className="bg-gradient-to-b from-black to-gray-900">
        <FAQSection />
      </section>
      <section>
        <ContactSection />
      </section>
    </>
  );
};

export default Home;
