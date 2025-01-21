import React from "react";

const ContentSection = ({
  title,
  description,
  imageSrc,
  isReversed,
  children,
}) => {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 p-6 mb-12`}
    >
      <div className="w-full md:w-1/2">
        <div className="relative h-96">
          {" "}
          {/* Fixed height container */}
          <img
            src={imageSrc}
            alt={title}
            className="rounded-lg shadow-lg w-full h-full object-cover absolute inset-0"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-6 px-4">
        <h2 className="text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
        <p className="text-gray-300 text-xl leading-relaxed">{description}</p>
        {children}
      </div>
    </div>
  );
};

const HealthcareServices2 = () => {
  const sections = [
    {
      title: "The Future of Healthcare is Digital",
      description:
        "We believe that technology has the power to transform healthcare and improve the lives of patients and healthcare providers. As a trusted healthcare software development company, we are committed to building innovative solutions that address the evolving needs of the healthcare industry.",
      imageSrc:
        "https://i.pinimg.com/736x/d9/48/aa/d948aa108871eaff1d6d8068f3525350.jpg",
      isReversed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 px-6 md:px-12">
      {sections.map((section, index) => (
        <ContentSection
          key={index}
          title={section.title}
          description={section.description}
          imageSrc={section.imageSrc}
          isReversed={section.isReversed}
        >
          <button className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
            Learn More
          </button>
        </ContentSection>
      ))}
    </div>
  );
};

export default HealthcareServices2;
