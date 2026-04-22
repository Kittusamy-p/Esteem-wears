import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <h1 className="text-xl font-bold">Esteem Innerwears</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/catalogue">Catalogue</Link>
      </div>
    </nav>
  );
}
