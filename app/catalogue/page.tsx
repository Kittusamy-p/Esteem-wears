import Link from "next/link";
import Image from "next/image";

export default function Catalogue() {
  return (
    <div className="px-4 md:px-10">
      <h1 className="text-3xl font-bold mb-6">Catalogue</h1>

      <div className="flex flex-col gap-6">
        <Link href="/catalogue/kids">
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
            <Image
              src="/images/banners/kids.jpg"
              alt="Kids wear"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold">Kids Wear</h2>
            </div>
          </div>
        </Link>

        <Link href="/catalogue/men">
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
            <Image
              src="/images/banners/men.jpg"
              alt="Mens wear"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold">Mens Wear</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
