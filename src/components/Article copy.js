import React, { useEffect, useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import fetchArticle from '../api/article';

function Article() {
  const [article, setArticle] = useState(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    let isFetching = true;

    if (isFetching)
      fetchArticle()
        .then(result => setArticle(result))
        .catch(err => setErr(err));
    return () => isFetching = false;
  }, []);

  return (
    <div>
      <h1>Article</h1>
      {article === null ? '...loading' : HTMLReactParser(article.content.rendered.replace(/\n/gi, ''))}
      {err !== false ? JSON.stringify(err) : ''}
    </div>
  );
}

export default Article;