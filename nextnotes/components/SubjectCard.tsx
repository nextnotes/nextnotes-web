import Link from "next/link";

type SubjectCardProps = {
  title: string;
  href: string;
};

export default function SubjectCard({
  title,
  href,
}: SubjectCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition cursor-pointer">

        <div className="text-5xl text-center">📚</div>

        <h3 className="text-2xl font-bold text-center mt-4 text-blue-700">
          {title}
        </h3>

        <p className="text-center text-gray-600 mt-3">
          Notes • MCQs • PDFs • Question Bank
        </p>

        <button className="mt-6 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">
          Open Subject
        </button>

      </div>
    </Link>
  );
}