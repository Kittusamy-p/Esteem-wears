"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div
      className="px-4 md:px-10 py-10 max-w-6xl mx-auto 
    bg-gradient-to-br from-yellow-50 via-white to-pink-50 rounded-xl"
    >
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Built on Experience. Trusted by Thousands.
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Based in Tiruppur — India’s textile hub — Esteem Innerwear brings
          decades of manufacturing expertise into modern e-commerce.
        </p>
      </motion.div>
      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 items-stretch">
        {[
          { value: "30+", label: "Years in Business" },
          { value: "10+", label: "Years in E-commerce" },
          { value: "1L+", label: "Customer Reviews" },
          { value: "10L+", label: "Satisfied Customers" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            className="bg-white border rounded-xl p-6 text-center shadow-md 
      hover:shadow-xl transition h-full min-h-[120px] flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-yellow-500">{item.value}</h3>
            <p className="text-gray-500 text-sm">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* ABOUT */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Our Roots</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded and led by <strong>Krishnaswamy P</strong>, born in
            Tiruppur, Esteem Innerwear is built on a deep understanding of
            textiles and garment manufacturing. With over 40+ years of
            experience, the brand focuses on delivering comfort, durability, and
            consistent quality.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <p className="text-gray-600 leading-relaxed">
            We create innerwear for the entire family — from kids to adults —
            using 100% organic cotton with high-quality dye, ensuring comfort
            that lasts all day.
          </p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          What Sets Us Apart
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Premium Cotton",
              desc: "100% organic cotton with superior dye quality.",
            },
            {
              title: "Reliable Supply",
              desc: "Regular and immediate availability.",
            },
            {
              title: "Family Range",
              desc: "Innerwear for all age groups.",
            },
            {
              title: "Affordable",
              desc: "Best quality at a fair price.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white border rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-2 text-yellow-600">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ECOMMERCE CARDS */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Available On Leading Platforms
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* AMAZON */}
          <a
            href="https://www.amazon.in/your-seller-link"
            target="_blank"
            className="block"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="rounded-xl p-6 text-white 
              bg-gradient-to-br from-red-500 to-yellow-500 shadow-lg"
            >
              <h3 className="text-lg font-semibold">Amazon</h3>
              <p className="text-sm opacity-90">Prime Seller</p>
              <p className="mt-3 text-xs underline">Visit Store →</p>
            </motion.div>
          </a>

          {/* FLIPKART (FIXED) */}
          <a
            href="https://www.flipkart.com/your-seller-link"
            target="_blank"
            className="block"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="rounded-xl p-6 text-white 
              bg-gradient-to-br from-blue-500 to-yellow-300 shadow-lg"
            >
              <h3 className="text-lg font-semibold">Flipkart</h3>
              <p className="text-sm opacity-90">Golden Seller</p>
              <p className="mt-3 text-xs underline">Visit Store →</p>
            </motion.div>
          </a>

          {/* MEESHO */}
          <a
            href="https://www.meesho.com/your-seller-link"
            target="_blank"
            className="block"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="rounded-xl p-6 text-white 
              bg-gradient-to-br from-pink-500 to-pink-700 shadow-lg"
            >
              <h3 className="text-lg font-semibold">Meesho</h3>
              <p className="text-sm opacity-90">Top Seller</p>
              <p className="mt-3 text-xs underline">Visit Store →</p>
            </motion.div>
          </a>
        </div>

        <p className="text-center text-gray-600 mt-6">
          1 lakh+ reviews with an average rating of <strong>4.1+</strong>
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/catalogue"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 
          text-black font-semibold px-6 py-3 rounded-lg transition shadow-md"
        >
          Explore Products
        </Link>
      </div>
    </div>
  );
}
