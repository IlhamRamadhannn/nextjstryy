
import { notFound } from "next/navigation";

interface ArticleProps {
  params: {
    id: string;
  };
}

const ArticleDetail = async ({ params }: ArticleProps) => {
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
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="mt-4">{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
