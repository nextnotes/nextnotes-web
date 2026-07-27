export default function MathematicsPage() {
  const chapters = [
    { id: 1, title: "Patterns in Mathematics" },
    { id: 2, title: "Lines and Angles" },
    { id: 3, title: "Number Play" },
    { id: 4, title: "Data Handling and Presentation" },
    { id: 5, title: "Prime Time" },
    { id: 6, title: "Perimeter and Area" },
    { id: 7, title: "Fractions" },
    { id: 8, title: "Playing with Constructions" },
    { id: 9, title: "Symmetry" },
    { id: 10, title: "The Other Side of Zero" },
  ];

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <section className="bg-blue-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-sm">
            Home &gt; Class 6 &gt; Mathematics
          </p>

          <h1 className="text-5xl font-bold mt-3">
            Class 6 Mathematics
          </h1>

          <p className="mt-3 text-lg">
            NCERT Ganita Prakash
          </p>

        </div>
      </section>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-6 mt-10">

        <input
          type="text"
          placeholder="Search Chapters..."
          className="w-full border rounded-lg p-4 shadow"
        />

      </section>

      {/* Chapters */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold mb-8">
          Chapters
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {chapters.map((chapter) => (

            <div
              key={chapter.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >

              <div className="flex items-center justify-between">

                <span className="bg-blue-700 text-white px-3 py-1 rounded-full">
                  Chapter {chapter.id}
                </span>

                <span className="text-3xl">
                  📘
                </span>

              </div>

              <h3 className="text-xl font-bold mt-5">
                {chapter.title}
              </h3>

              <div className="grid grid-cols-2 gap-3 mt-6">

                <button className="bg-blue-600 text-white rounded-lg py-2">
                  Notes
                </button>

                <button className="bg-green-600 text-white rounded-lg py-2">
                  MCQs
                </button>

                <button className="bg-purple-600 text-white rounded-lg py-2">
                  PDF
                </button>

                <button className="bg-red-600 text-white rounded-lg py-2">
                  Worksheet
                </button>

              </div>

              <button className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg">
                Open Chapter
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-5">

        © 2026 NextNotes | Class 6 Mathematics

      </footer>

    </main>
  );
}