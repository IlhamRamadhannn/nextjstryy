import { notFound } from "next/navigation";

interface ArticleProps {
  params: {
    id: string;
  };
}

export default async function ArticleDetail({ params }: ArticleProps) {
  const { id } = params;

  const article = {
    id,
    title: `Article ${id}`,
    content: `Content for article ${id}`,
  };

  if (!article) {
    notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Article {id}</h1>
      <p>detail untuk article <strong>{id}</strong>.</p>
    </div>
  );
}
