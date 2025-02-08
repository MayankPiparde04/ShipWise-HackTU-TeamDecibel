import React from "react";
import { FaTruck, FaSmile, FaDollarSign, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

const benefits = [
    {
        icon: <FaTruck />,
        title: "Inventory Management for Products and Cartons",
        description: "Efficiently track and manage products with optimized carton utilization.",
    },
    {
        icon: <FaSmile />,
        title: "Optimal Logistics",
        description: "Streamline shipping routes to reduce costs and improve delivery times.",
    },
    {
        icon: <FaDollarSign />,
        title: "Shippee AI",
        description: "Leverage AI to select cost-effective couriers and minimize expenses.",
    },
    {
        icon: <FaCogs />,
        title: "EV Route",
        description: "Optimize routes for electric vehicles to enhance sustainability and efficiency.",
    },
];


const BenefitsSection = () => (
    <section className="flex flex-col  md:flex-col lg:flex-row md:justify-center md:items-center md:gap-5 relative text-white py-20 container mx-auto px-10 md:px-12 lg:mt-20">
        {/* Heading and Description Section */}
        <motion.div
            className="flex flex-col justify-center space-y-4 mb-8 px-10 md:px-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
            <h3 className="text-purple-400 text-xl text-start font-semibold">Benefits</h3>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Path to <span className="text-blue-400">Smarter Shipping Success</span>
            </h2>
            <p className="text-lg md:text-xl font-light">
                Optimize your logistics, reduce costs, and enhance customer satisfaction with ShipWise’s powerful tools.
            </p>
        </motion.div>

        {/* Benefits Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {benefits.map((benefit, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col items-start p-6 bg-gray-900 bg-opacity-70 border border-gray-400"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25, delay: index * 0.2 }} // Delay for staggered effect
                >
                    <motion.div className="flex items-center justify-center text-purple-400 text-3xl">
                        {benefit.icon}
                    </motion.div>
                    <motion.h4 className="text-xl font-semibold mt-4">{benefit.title}</motion.h4>
                    <motion.p className="text-sm text-gray-400 mt-2">{benefit.description}</motion.p>
                </motion.div>
            ))}
        </div>
    </section>
);

export default BenefitsSection;
