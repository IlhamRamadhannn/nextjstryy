import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white-600 text-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/articles" className="hover:underline">
              Articles
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
