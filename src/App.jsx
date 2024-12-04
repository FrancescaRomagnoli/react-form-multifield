import { useState, useEffect } from "react";

function App() {
  const [articlesList, setArticleList] = useState([]);
  const [articleFields, setArticleFields] = useState({
    title: "",
    content: "",
  });

  const handleArticleForm = (e) => {
    setArticleFields({
      ...articleFields,
      [e.target.name]: e.target.value,
    });
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();

    const newArticle = {
      title: articleFields.title,
      content: articleFields.content,
    };

    const updatedArticlesList = [...articlesList, newArticle];

    setArticleList(updatedArticlesList);
  };

  useEffect(() => {
    console.log(articlesList);
  }, [articlesList]);

  return (
    <>
      <header>
        <h1>Crea un nuovo post</h1>
      </header>
      <main>
        <div>
          <form onSubmit={handlePostSubmit}>
            <div>
              {/* input titolo articolo */}
              <label htmlFor="post-title">Inserisci il titolo del post</label>
              <input
                onChange={handleArticleForm}
                value={articleFields.title}
                type="text"
                id="post-title"
                name="title"
              />
            </div>
            <div>
              {/* input contenuto articolo */}
              <label htmlFor="post-content">Inserisci contenuto</label>
              <input
                onChange={handleArticleForm}
                value={articleFields.content}
                type="text"
                id="post-content"
                name="content"
              />
            </div>
            {/* bottone submit */}
            <button>Crea</button>
          </form>
        </div>
        <div>
          <h3>I tuoi post:</h3>
          <div>
            {articlesList.map((article) => {
              return (
                <div key={article.title}>
                  <h4>{article.title}</h4>
                  <p>{article.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
