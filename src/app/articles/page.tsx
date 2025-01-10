import Link from "next/link";

export default function Articles() {
  const articles = [
    { id: 1, title: "Hati kecil uyntuk", img: "/people.png" },
    { id: 2, title: "Tanaman indah budidaya", img: "/tanaman.png" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Articles</h1>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <li
            key={article.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="w-full h-56 border-4 border-gray-300 rounded-lg overflow-hidden">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-4">
              <Link
                href={`/articles/${article.id}`}
                className="text-xl font-semibold text-gray-800 hover:underline"
              >
                {article.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
