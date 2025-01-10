type ArticleProps = {
    params: { id: string };
  };
  
  export default function ArticleDetail({ params }: ArticleProps) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Article {params.id}</h1>
        <p>
          detail untuk artiwkle <strong>{params.id}</strong>.
        </p>
      </div>
    );
  }
  