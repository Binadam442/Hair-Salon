import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-900 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">   Puro_Beauty</Link>
        <div className="flex gap-4">
          <Link href="/" className="text-xl font-bold">   Puro_Beauty</Link>
        </div>
      </div>
    </nav>
  );
}