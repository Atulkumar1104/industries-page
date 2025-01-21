import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  description = "Follow our comprehensive process to find and hire the perfect Next.js developer for your team. We ensure each candidate meets our high standards of expertise and cultural fit.",
  autoPlayInterval = 3000,
}) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className={cn("min-h-screen flex flex-col", className)}>
      <div className="flex-1 w-full max-w-[1350px] mx-auto p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold mb-4 text-center">
          {title}
        </h2>
        <p className="text-lg text-gray-300 md:text-xl text-muted-foreground text-center max-w-4xl mx-auto mb-16">
          {description}
        </p>

        <div className="flex flex-col md:grid text-white md:grid-cols-2 gap-6 md:gap-10 h-full">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
                    index === currentFeature
                      ? "bg-primary border-primary text-primary-foreground scale-110"
                      : "bg-muted border-muted-foreground"
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-lg text-muted-foreground">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="order-1 md:order-2 relative h-full min-h-screen md:min-h-screen rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 w-full h-full"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeatureStepsDemo() {
  const features = [
    {
      step: "Step 1",
      title: "Discovery and Requirements Gathering",
      content:
        "We work closely with our clients to understand their needs and gather detailed requirements for the software.",
      image:
        "https://i.pinimg.com/736x/73/43/07/7343070e6b2d686e8c1687f257c02e93.jpg",
    },
    {
      step: "Step 2",
      title: "Design and Prototyping",
      content:
        "We create wireframes and prototypes to visualize the software's functionality and user interface.",
      image:
        "https://i.pinimg.com/736x/60/ce/f0/60cef02538f35f51224d4e51a148beaa.jpg",
    },
    {
      step: "Step 3",
      title: "Development",
      content:
        "Our experienced developers build the software using the latest technologies and best practices.",
      image:
        "https://i.pinimg.com/736x/21/72/39/217239b5a11a0102a938461440a6ef3d.jpg",
    },
    {
      step: "Step 4",
      title: "Testing and Quality Assurance",
      content:
        "  We conduct rigorous testing to ensure that the software is bug-free and meets all requirements.",
      image:
        "https://i.pinimg.com/736x/fa/47/b2/fa47b2d5d772969c35551f0b8317dffb.jpg",
    },
    {
      step: "Step 5",
      title: "Deployment and Implementation",
      content:
        "We deploy the software to our clients' environment and provide training and support to ensure a smooth transition.",
      image:
        "https://i.pinimg.com/736x/71/75/f3/7175f30818bd87f9e6a5d2559f2c4eb8.jpg",
    },
    {
      step: "Step 6",
      title: "Maintenance and Support",
      content:
        "We provide ongoing maintenance and support to ensure that the software continues to perform optimally.",
      image:
        "https://i.pinimg.com/736x/ee/56/56/ee5656ef389215b3599fdc9c489c9973.jpg",
    },
    {
      step: "Step 7",
      title: "Security and Compliance Review",
      content:
        "We conduct thorough security and compliance reviews at each stage of the development process, ensuring adherence to HIPAA and other relevant regulations.",
      image:
        "https://i.pinimg.com/736x/ee/56/56/ee5656ef389215b3599fdc9c489c9973.jpg",
    },
  ];

  return (
    <FeatureSteps
      features={features}
      title="Our Process: From Concept to Deployment"
      description="We follow a well-defined development process to ensure that every project is delivered on time and within budget. Our process includes:"
      autoPlayInterval={4000}
    />
  );
}
