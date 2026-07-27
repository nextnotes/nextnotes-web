import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/" className="text-3xl font-bold">
          📘 NextNotes
        </Link>

        <div className="hidden md:flex gap-8 text-lg">

          <Link href="/">Home</Link>

          <Link href="/class6">Class 6</Link>

          <Link href="/class7">Class 7</Link>

          <Link href="/class8">Class 8</Link>

          <Link href="/subjects">Subjects</Link>

          <Link href="/login">Login</Link>

        </div>

      </div>
    </nav>
  );
}