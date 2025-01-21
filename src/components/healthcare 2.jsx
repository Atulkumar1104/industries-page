import React, { useState } from "react";
import { BarChart2, Camera, Wifi, Database, Brain, Shield } from "lucide-react";

const CombinedHealthcarePage = () => {
  const [activeService, setActiveService] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const technologies = [
    {
      id: 1,
      icon: BarChart2,
      title: "AI-Powered Diagnostics and Treatment Planning",
      description:
        "Leveraging AI/ML for diagnosis, outcome prediction, personalized treatment, including image analysis, risk stratification, and drug discovery support.",
      bgColor: "from-blue-900/20 to-blue-800/10",
    },
    {
      id: 2,
      icon: Camera,
      title: "Blockchain for Secure Data Exchange",
      description:
        "Creating secure and transparent platforms for sharing patient data, managing clinical trials, and tracking pharmaceuticals.",
      bgColor: "from-purple-900/30 to-purple-800/10",
    },
    {
      id: 3,
      icon: Wifi,
      title: "Internet of Things (IoT) in Remote Patient Monitoring",
      description:
        "Integrating with wearables and IoT sensors for remote monitoring of vital signs, activity, and medication adherence.",
      bgColor: "from-green-900/30 to-green-800/10",
    },
    {
      id: 4,
      icon: Database,
      title: "Cloud-Based Healthcare Solutions",
      description:
        " Developing scalable, accessible, and cost-effective cloud-based software with robust security for patient data.",
      bgColor: "from-red-900/40 to-red-800/10",
    },
    {
      id: 5,
      icon: Brain,
      title: "Healthcare API Integration",
      description:
        "Building and integrating APIs for seamless data exchange between different healthcare systems.",
      bgColor: "from-yellow-900/50 to-yellow-800/10",
    },
    {
      id: 6,
      icon: Shield,
      title: "Cybersecurity in Healthcare",
      description:
        " Implementing robust security measures, including data encryption, access controls, and regular audits, to protect patient data from cyber threats.",
      bgColor: "from-teal-900/20 to-teal-800/10",
    },
  ];

  const services = [
    {
      id: 1,
      number: "01.",
      title: "EMR/EHR Software",
      description:
        "We create electronic medical records (EMR) and electronic health records (EHR) software that makes it easy for healthcare professionals to keep track of patient health information, improving care and streamlining workflow.",
    },
    {
      id: 2,
      number: "02.",
      title: "Healthcare CRM",
      description:
        "Our healthcare CRM solutions help providers manage patient relationships, streamline communications, and improve engagement throughout the care journey.",
    },
    {
      id: 3,
      number: "03.",
      title: "Patient Engagement Software",
      description:
        "Build stronger connections with patients through our engagement platforms, enabling better communication and care coordination.",
    },
    {
      id: 4,
      number: "04.",
      title: "Hospital Management Software",
      description:
        "Comprehensive solutions for managing hospital operations, from patient records to resource allocation and staff scheduling.",
    },
    {
      id: 5,
      number: "05.",
      title: "Software for Medical Devices",
      description:
        "Custom software solutions for medical devices, ensuring accuracy, reliability, and regulatory compliance.",
    },
    {
      id: 6,
      number: "06.",
      title: "Pharmacy Management Software",
      description:
        "Streamline pharmacy operations with our comprehensive management solutions, from inventory control to prescription processing.",
    },
  ];

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* First Section */}
      <div className="flex relative">
        {/* Left Sticky Section */}
        <div className="w-1/2 sticky top-0 h-screen p-12 bg-gradient-to-b from-gray-900 to-gray-900 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-8 mt-8">
            Technology-Driven
            <br />
            Healthcare Solutions
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Step into the future of healthcare with our cutting-edge suite of
            innovative technologies, meticulously crafted to transform your
            business. As a leading healthcare software development company, our
            team creates advanced healthcare solutions that offer a seamless
            patient-centric experience.
          </p>
          <img
            src="https://i.pinimg.com/736x/04/e6/f7/04e6f7113cd5324e0501ac881bb352b5.jpg"
            alt=""
            className="h-72"
          />
        </div>

        {/* Right Scrollable Section */}
        <div className="w-1/2 p-12 space-y-8">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className={`p-6 rounded-xl bg-gradient-to-br ${tech.bgColor} border border-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gray-700/50`}
              onMouseEnter={() => setHoveredIcon(tech.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gray-900/80 rounded-lg">
                  <tech.icon
                    className={`w-6 h-6 transition-colors duration-300 ${
                      hoveredIcon === tech.id ? "text-blue-400" : "text-white"
                    }`}
                  />
                </div>
                <h2 className="text-2xl text-white font-bold">{tech.title}</h2>
              </div>
              <p className="text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second Section (Healthcare Services) - Original Design */}
      <div className="bg-black">
        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="container bg-gradient-to-b from-gray-900 to-black mx-auto px-4 h-[500px] max-w-full">
          <div className="flex gap-16 h-full">
            {/* Left Floating Section */}
            <div className="w-1/2 py-12 p-12">
              <div className="max-w-xl">
                <h1 className="text-5xl font-bold text-white mb-8 leading-tight">
                  Specialized Healthcare Software Niches:
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  In the fast-evolving world of healthcare, the right software
                  can transform patient care and administrative efficiency. As a
                  leading provider of custom software development for
                  healthcare, here's a look at the different types of healthcare
                  software we develop:
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-1/2 border-l border-gray-800 overflow-y-auto h-full hide-scrollbar">
              <div className="pl-16 py-12">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="border-b border-gray-800 py-2"
                  >
                    <button
                      onClick={() => toggleService(service.id)}
                      className="w-full text-left py-4 flex items-center justify-between group hover:bg-gray-900/30"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-orange-500 text-lg font-medium">
                          {service.number}
                        </span>
                        <h3 className="text-2xl text-white font-medium">
                          {service.title}
                        </h3>
                      </div>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform ${
                          activeService === service.id ? "rotate-90" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>

                    {/* Expandable Content */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        activeService === service.id
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="py-4">
                        <p className="text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedHealthcarePage;
