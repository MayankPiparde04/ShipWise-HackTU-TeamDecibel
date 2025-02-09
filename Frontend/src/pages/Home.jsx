import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Boxes, PackageSearch } from "lucide-react";
import BenefitsSection from "../components/BenefitsSection";
import Features from "../components/Features";
import { StarsCanvas } from "../components/StarBackground";
import Team from "../components/Team";
import Logo from "../assets/HeroLogo.webp";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";

function Home() {
  // Set up state for the text that will change every 3 seconds
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    {
      title: "Your Smart Shipping Partner",
      subtitle: "Shipping Smart, Reducing Waste.",
      description:
        "ShipWise makes shipping smarter by optimizing carton sizes and selecting cost-effective couriers to reduce costs and environmental impact.",
    },
    {
      title: "ShipWise SmartFit: Rotate, Optimize, Ship Efficiently!",
      subtitle: "The Best Fit, Every Time!",
      description:
        "Our algorithm analyzes all possible orientations to find the most space-efficient and secure packing strategy. Less waste, more efficiency—because every inch counts!",
    },
    {
      title: "ShipWise PackPerfect: No Gaps, No Waste!",
      subtitle: "Smart Packing, Maximum Efficiency! ",
      description:
        "Say goodbye to wasted space! ShipWise ensures every box is packed to perfection—fitting products efficiently, cutting costs, and making shipping more sustainable.",
    },
    {
      title: "Turning Invoices into Instant Packaging Plans!",
      subtitle: "Your Invoice, Our Intelligence",
      description:
        "ShipWise AI scans invoices, extracts product details, and matches dimensions from inventory—delivering the smartest, space-saving packaging strategy instantly!",
    },
    {
      title: "ShipWise EV Routing: Smarter Routes, Greener Miles!",
      subtitle: "Charge Smart, Drive Far",
      description:
        "ShipWise maps the shortest, most efficient EV routes while strategically placing charging stops—eliminating range anxiety and maximizing delivery efficiency!",
    },
    // {
    //   title: "ShipWise SmartScan: Click, Pack, Ship!",
    //   subtitle: "Snap the Product, Let ShipWise Handle the Rest!",
    //   description:
    //     "Just capture an image—ShipWise predicts dimensions and delivers the best packing strategy, ensuring zero space waste and maximum efficiency!",
    // },
    // Add more text objects as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length); // Loop through texts every 3 seconds
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <div className="bg-gray-950">
          <StarsCanvas />

          {/* Hero Section */}
          <div className="relative mt-8 z-10 flex flex-col justify-center items-center w-full h-screen gap-8 overflow-hidden min-h-full">
            <motion.section
              className="pt-20 lg:px-20 py-20 md:py-24 lg:py-20 w-full h-full bg-cover bg-center relative text-white flex flex-col 
              lg:flex-row overflow-hidden items-center justify-between px-6 md:px-12 space-y-10 md:space-y-0"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
              viewport={{ once: true }}
            >
              {/* Left Content */}
              <div className="text-center z-20 md:text-left p-2 md:pb-10 relative h-full lg:w-2/3 flex flex-col justify-center items-center lg:items-start">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-indigo-950/15 border border-indigo-500/30 text-sm rounded-full font-medium mb-6 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 25 }}
                >
                  <span className="mr-2">✨</span>
                  <span className="bg-gradient-to-r from-indigo-400 to-teal-400 text-transparent bg-clip-text font-semibold">
                    Minimizing Waste, Maximizing Savings
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 25 }}
                >
                  {texts[textIndex].title.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(10px)", opacity: 0 }}
                      animate={{ filter: "blur(0px)", opacity: 1 }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-xl sm:text-2xl mb-4 text-indigo-100 font-light"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 25 }}
                >
                  {texts[textIndex].subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  className="text-base sm:text-lg font-light mb-8 text-gray-300 max-w-lg sm:max-w-xl mx-auto md:mx-0"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 25 }}
                >
                  {texts[textIndex].description}
                </motion.p>

                {/* Action Links */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start relative z-30">
                  <Link
                    to="/"
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 rounded-lg text-white font-semibold shadow-lg shadow-indigo-500/30 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <PackageSearch className="w-5 h-5" />
                    Get Started
                  </Link>
                  <Link
                    to="/"
                    className="px-8 py-4 bg-gray-900/50 hover:bg-gray-900/70 border border-indigo-500/30 rounded-lg text-white font-semibold backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Boxes className="w-5 h-5" />
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative z-10 md:ml-10 mt-8 lg:mt-0">
                <AnimatedTestimonialsDemo />
              </div>
            </motion.section>
          </div>

          {/* Other Sections */}
          <Team />
          <BenefitsSection />
          <Features />
          <div className="flex items-center justify-center max-h-screen p-6">
            <div className="w-full max-w-7xl bg-gray-950 text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold text-center">
                Subscribe to our Newsletter
              </h2>
              <p className="text-gray-400 text-center mt-2">
                Stay updated with our latest news and updates.
              </p>
              <form className="mt-6">
                <div className="flex flex-col justify-center items-center gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-[85%] p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-[120px] bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg text-white font-semibold"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
