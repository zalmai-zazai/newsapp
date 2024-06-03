import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY // Ensure that VITE_API_KEY is correctly set in your environment variables
        }`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
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
