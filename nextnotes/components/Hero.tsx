import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold mb-6">
          📚 India's Free Learning Platform
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold">
          NextNotes
        </h1>

        <p className="mt-6 text-2xl font-semibold">
          Learn Smarter. Score Better.
        </p>

        <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
          Complete Study Material for Classes 6–10 including Notes,
          MCQs, PDFs, Worksheets, Question Papers and Previous Year Questions.
        </p>

        {/* Search Box */}
        <div className="mt-10 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="🔍 Search Notes, Chapters, MCQs..."
            className="w-full p-4 rounded-xl text-black text-lg shadow-lg"
          />
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/class6"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
          >
            🚀 Start Learning
          </Link>

          <Link
            href="/subjects"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
          >
            📚 Browse Subjects
          </Link>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <div className="bg-white/10 rounded-xl p-5">
            <h2 className="text-3xl font-bold">1000+</h2>
            <p>Study Notes</p>
          </div>

          <div className="bg-white/10 rounded-xl p-5">
            <h2 className="text-3xl font-bold">500+</h2>
            <p>MCQs</p>
          </div>

          <div className="bg-white/10 rounded-xl p-5">
            <h2 className="text-3xl font-bold">300+</h2>
            <p>PDFs</p>
          </div>

          <div className="bg-white/10 rounded-xl p-5">
            <h2 className="text-3xl font-bold">24×7</h2>
            <p>Free Access</p>
          </div>

        </div>

      </div>
    </section>
  );
}