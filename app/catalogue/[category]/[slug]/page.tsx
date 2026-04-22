import { dataMap } from "@/data";

export default function ProductPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const products = dataMap[params.category];
  const product = products?.find((p) => p.slug === params.slug);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{product.name}</h1>

      <div className="mt-4">
        {product.sizes.map((s) => (
          <p key={s.size}>
            Size {s.size} - ₹{s.price}
          </p>
        ))}
      </div>

      <div className="mt-4">
        {product.links.map((l) => (
          <a key={l.platform} href={l.url} className="block">
            {l.platform} ⭐ {l.rating}
          </a>
        ))}
      </div>
    </div>
  );
}
