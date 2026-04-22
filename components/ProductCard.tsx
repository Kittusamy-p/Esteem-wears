import Image from "next/image";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  const lowestPrice = Math.min(...product.sizes.map((s) => s.price));

  const avgRating =
    product.links.reduce((acc, l) => acc + l.rating, 0) / product.links.length;

  return (
    <div className="card overflow-hidden group bg-white">
      {/* IMAGE */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* rating badge */}
        <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-semibold">
          ⭐ {avgRating.toFixed(1)}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3 space-y-2">
        <h2 className="font-semibold text-sm line-clamp-2">{product.name}</h2>

        {/* price */}
        <p className="text-lg font-bold text-green-600">From ₹{lowestPrice}</p>

        {/* platforms */}
        <div className="flex gap-2 flex-wrap text-xs">
          {product.links.map((l) => (
            <span
              key={l.platform}
              className={`badge ${
                l.platform === "amazon"
                  ? "badge-blue"
                  : l.platform === "flipkart"
                    ? "badge-yellow"
                    : "badge-red"
              }`}
            >
              {l.platform}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="btn btn-yellow w-full mt-2">View Product</button>
      </div>
    </div>
  );
}
