"use client";

import { dataMap } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();

  const category = Array.isArray(params.category)
    ? params.category[0]
    : params.category;

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const categoryKey = category?.toLowerCase();

  const products = categoryKey ? dataMap[categoryKey] : undefined;
  const product = products?.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  const lowestPrice = Math.min(...product.sizes.map((s) => s.price));

  const avgRating =
    product.links.reduce((a, l) => a + l.rating, 0) / product.links.length;

  return (
    <div className="px-4 md:px-10 py-6">
      {/* TOP SECTION */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="md:col-span-2 bg-white rounded-xl p-4 flex justify-center overflow-hidden"
        >
          <div className="relative w-full h-[400px]">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-contain hover:scale-110 transition duration-500"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
          </div>
        </motion.div>

        {/* BUY BOX */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-1"
        >
          <div className="card p-4 sticky top-6 space-y-4 bg-white">
            <h1 className="text-xl font-semibold leading-snug">
              {product.name}
            </h1>

            <p className="text-2xl font-bold text-green-600">₹{lowestPrice}</p>

            <div className="flex gap-2 items-center">
              <span className="badge badge-yellow">
                ⭐ {avgRating.toFixed(1)}
              </span>
              <span className="text-sm text-gray-500">
                {product.links.length} stores
              </span>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <span
                    key={s.size}
                    className="px-3 py-1 border rounded bg-white text-sm hover:bg-gray-50 transition"
                  >
                    {s.size} - ₹{s.price}
                  </span>
                ))}
              </div>
            </div>

            <button className="btn btn-yellow w-full">View Best Deals</button>
          </div>
        </motion.div>
      </div>

      {/* STORE CARDS */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-4">Buy From Trusted Stores</h2>

        <div className="grid sm:grid-cols-3 gap-5">
          {product.links.map((l, i) => (
            <motion.div
              key={l.platform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card p-4 bg-white hover:shadow-xl hover:-translate-y-1 transition"
            >
              <p className="font-semibold capitalize text-lg">{l.platform}</p>

              <p className="text-xs text-gray-500">Seller: {l.seller}</p>

              <span className="badge badge-yellow w-fit mt-2">
                ⭐ {l.rating}
              </span>

              <a
                href={l.url}
                target="_blank"
                className="btn btn-yellow mt-4 text-center block"
              >
                Buy Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DETAILS */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="card p-4 bg-white">
          <h3 className="font-semibold mb-2">Product Details</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Premium innerwear designed for comfort, durability, and everyday
            use.
          </p>
        </div>

        <div className="card p-4 bg-white">
          <h3 className="font-semibold mb-2">Size Chart</h3>

          {product.sizeChart ? (
            <div className="relative w-full h-64">
              <Image
                src={product.sizeChart}
                alt="Size Chart"
                fill
                className="object-contain"
              />
            </div>
          ) : (
            <p className="text-sm text-gray-500">No size chart available</p>
          )}
        </div>
      </div>
    </div>
  );
}
