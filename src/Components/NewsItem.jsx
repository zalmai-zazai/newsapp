import React from 'react';
import image from '../Components/News.jpg';
const NewsItem = ({ title, description, url, src }) => {
  return (
    <div
      className="card mb-4 d-inline-block my-3 mx-3"
      style={{ maxWidth: '345px' }}
    >
      <img
        src={src ? src : image}
        style={{ height: '200px', width: '360px' }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "This item does'nt have the description click on more to see more"}
        </p>
        <a href={url} className="btn btn-primary">
          See More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
