import { dataMap } from "@/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params; // ⭐ FIX HERE

  const key = category.toLowerCase();
  const products = dataMap[key];

  if (!products) {
    return <div className="text-red-500">Category not found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">{key} Collection</h1>

      <div className="grid md:grid-cols-4 gap-4 mt-6">
        {products.map((p) => (
          <Link key={p.slug} href={`/catalogue/${key}/${p.slug}`}>
            <ProductCard product={p} />
          </Link>
        ))}
      </div>
    </div>
  );
}
