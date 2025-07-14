import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">
          Javier Puerto
        </Link>
        <ul className="flex gap-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}