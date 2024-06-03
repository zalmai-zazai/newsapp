import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const newsResponse = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    };
    newsResponse();
  }, [category]);

  return (
    <div className="mt-4 text-center">
      <h2 className="text-center ">
        Latest <span className="badge text-bg-danger">NEWS</span>
      </h2>
      {articles.map((data, index) => {
        return (
          <NewsItem
            key={index}
            title={data.title}
            description={data.description}
            url={data.url}
            src={data.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
