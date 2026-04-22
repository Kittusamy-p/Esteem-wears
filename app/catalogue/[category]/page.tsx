import { dataMap } from "@/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const key = category.toLowerCase();
  const products = dataMap[key];

  if (!products || products.length === 0) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-red-500">Category not found</h1>
        <p className="text-gray-500 mt-2">
          No products available in this section yet.
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 py-6">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold capitalize">
          {key} Collection
        </h1>

        <p className="text-gray-500 mt-2">
          Explore premium innerwear for {key}.
        </p>

        <div className="mt-2 text-sm text-gray-600">
          Total Products:{" "}
          <span className="font-semibold">{products.length}</span>
        </div>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/catalogue/${key}/${p.slug}`}
            className="h-full"
          >
            <div className="h-full">
              <ProductCard product={p} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
