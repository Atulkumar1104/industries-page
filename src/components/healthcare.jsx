import React, { useState } from "react";

const HealthcareServices = () => {
  const [activeService, setActiveService] = useState(1);

  const services = [
    {
      id: 1,
      number: "01.",
      title:
        "Electronic Health Records (EHR) and Electronic Medical Records (EMR) Systems",
      description:
        "We develop robust and user-friendly EHR/EMR systems that facilitate efficient patient data management, improve care coordination, and enhance clinical decision-making. These systems are designed to be HIPAA compliant and interoperable with other healthcare systems.",
    },
    {
      id: 2,
      number: "02.",
      title: "Telehealth and Telemedicine Platforms",
      description:
        " Our telehealth solutions enable remote patient consultations, virtual check-ups, and remote monitoring, expanding access to care and improving patient convenience. We focus on creating secure and reliable platforms that facilitate seamless communication between patients and healthcare providers.",
    },
    {
      id: 3,
      number: "03.",
      title: "Medical Practice Management Software",
      description:
        "We build practice management software that automates administrative tasks such as appointment scheduling, billing, claims processing, and patient communication. This helps healthcare practices improve efficiency, reduce costs, and focus on delivering quality care.",
    },
    {
      id: 4,
      number: "04.",
      title: "Pharmacy Management Systems",
      description:
        "Our pharmacy management systems streamline prescription processing, inventory management, and patient medication tracking. These systems help pharmacies improve accuracy, reduce errors, and ensure compliance with regulations.",
    },
    {
      id: 5,
      number: "05.",
      title: "Healthcare Data Analytics and Business Intelligence",
      description:
        "We develop data analytics solutions that help healthcare organizations extract valuable insights from their data. These insights can be used to improve patient outcomes, optimize operations, and make data-driven decisions.",
    },
    {
      id: 6,
      number: "06.",
      title: "Medical Imaging Software",
      description:
        " We create software for storing, viewing, and analyzing medical images such as X-rays, CT scans, and MRIs. These solutions help radiologists and other healthcare professionals improve diagnostic accuracy and efficiency.",
    },
    {
      id: 7,
      number: "07.",
      title: "Mobile Health (mHealth) Applications",
      description:
        "We develop mobile apps for patients and healthcare providers that facilitate remote monitoring, medication reminders, appointment scheduling, and other healthcare-related tasks. These apps empower patients to take control of their health and improve communication with their care providers.",
    },
    {
      id: 8,
      number: "08.",
      title: "Custom Healthcare Software Development",
      description:
        " We understand that every healthcare organization has unique needs. That's why we offer custom software development services to create tailored solutions that address specific requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 p-4 md:p-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-16 pt-8">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-white text-center mb-8 leading-tight">
          What We Do: Our Healthcare Software Development Services
        </h1>
        <p className="text-gray-300 text-lg text-center mx-auto md:text-xl max-w-4xl leading-relaxed">
          We offer a comprehensive suite of healthcare software development
          services tailored to meet the diverse needs of hospitals, clinics,
          pharmacies, research institutions, and other healthcare organizations.
          Our expertise spans a wide range of areas, including:
        </p>
      </div>

      {/* Services Section */}
      <div className="backdrop-blur-lg bg-gradient-to-r from-black to-violet-500/30 rounded-3xl overflow-hidden border border-white/10 shadow-2xl max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row h-[500px]">
          {/* Left scrollable panel with hidden scrollbar */}
          <div className="w-full md:w-1/2 overflow-y-auto p-6 bg-gradient-to-b from-orange-400 to-red-500 border-r border-white/10 scrollbar-hide">
            <style>
              {`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}
            </style>
            {services.map((service) => (
              <div
                key={service.id}
                className={`cursor-pointer mb-8 border-b border-white/10 pb-3 transition-all duration-300 hover:bg-white/5 rounded-lg p-3 ${
                  activeService === service.id
                    ? "bg-white/10 shadow-lg"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <div className="text-white font-bold text-lg  mb-1">
                  {service.number}
                </div>
                <div className="text-white text-xl font-semibold">
                  {service.title}
                </div>
              </div>
            ))}
          </div>

          {/* Right fixed panel */}
          <div className="w-full md:w-1/2 p-8 bg-black/40 backdrop-blur-md flex items-center">
            <div className="max-w-xl">
              <div>
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-200 to-red-200 text-transparent bg-clip-text">
                  {services[activeService - 1].title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {services[activeService - 1].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareServices;
