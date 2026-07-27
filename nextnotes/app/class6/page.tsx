export default function Class6Page() {
  const subjects = [
    "Mathematics",
    "Science",
    "Social Science",
    "English",
    "Hindi",
    "Odia",
    "Sanskrit",
    "ICT",
    "General Knowledge",
  ];

  return (
    <main className="min-h-screen bg-gray-100">

      {/* Header */}
      <section className="bg-blue-700 text-white py-12 text-center">
        <h1 className="text-5xl font-bold">Class 6 Study Material</h1>
        <p className="mt-3 text-xl">
          Notes • MCQs • PDFs • Question Papers
        </p>
      </section>

      {/* Subject Cards */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Subjects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <div
              key={subject}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-700">
                {subject}
              </h3>

              <ul className="mt-4 space-y-2 text-gray-600">
                <li>📘 Chapter Notes</li>
                <li>❓ MCQ Practice</li>
                <li>📄 Question Bank</li>
                <li>📥 PDF Download</li>
                <li>📝 Previous Year Questions</li>
              </ul>

              <button className="mt-6 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">
                Open {subject}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">

          <div className="shadow rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-700">
              📘 Notes
            </h3>
            <p className="mt-3">
              Easy chapter-wise notes.
            </p>
          </div>

          <div className="shadow rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-700">
              ❓ MCQs
            </h3>
            <p className="mt-3">
              Practice with answers.
            </p>
          </div>

          <div className="shadow rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-700">
              📄 PDFs
            </h3>
            <p className="mt-3">
              Download printable study material.
            </p>
          </div>

          <div className="shadow rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-700">
              📝 Question Papers
            </h3>
            <p className="mt-3">
              Previous year and sample papers.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-5">
        © 2026 NextNotes | Class 6 Study Portal
      </footer>

    </main>
  );
}