import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/themoviedb-api';



export default function ReviewList({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  // console.log(reviews);


  return (
    <div>
      {reviews?.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id} className="item">
                <p className="name">Author: {author}</p>
                <p className="name">{content}</p>
              </li> 
            );
          })}
        </ul>
      ) : (
        <p>'We don't have any reviews for this movie.'</p>
      )}
    </div>
  );
};

