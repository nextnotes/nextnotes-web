import Hero from "../components/Hero";
import ClassCard from "../components/ClassCard";
import SubjectCard from "../components/SubjectCard";

export default function Home() {
  const classes = [
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
  ];

  const subjects = [
    "Mathematics",
    "Science",
    "Social Science",
    "English",
    "Hindi",
    "Odia",
    "Sanskrit",
    "Computer / ICT",
    "General Knowledge",
  ];

  return (
    <>
      <Hero />

      <main className="min-h-screen bg-slate-100">

        {/* Classes */}
        <section className="max-w-6xl mx-auto py-16 px-6">

          <h2 className="text-4xl font-bold text-center mb-10">
            Choose Your Class
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {classes.map((item, index) => (
  <ClassCard
    key={item}
    title={item}
    href={`/class${index + 6}`}
    subjects={9}
  />
))}
          </div>

        </section>

        {/* Subjects */}
        <section className="max-w-6xl mx-auto pb-20 px-6">

          <h2 className="text-4xl font-bold text-center mb-10">
            Popular Subjects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {subjects.map((subject) => (
  <SubjectCard
    key={subject}
    title={subject}
    href={`/subjects/${subject
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace("/", "")}`}
  />
))}
          </div>

        </section>

      </main>
    </>
  );
}