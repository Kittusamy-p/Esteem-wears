import Image from "next/image";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow">
      <div className="relative h-40 w-full">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-2">
        <h2 className="font-semibold">{product.name}</h2>
      </div>
    </div>
  );
}