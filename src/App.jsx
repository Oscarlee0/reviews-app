import { useState } from "react";
import reviews from "./data";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNum = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const prevReviews = () => {
    setIndex((oldIndex) => {
      const newIndex = oldIndex - 1;
      return checkNum(newIndex);
    });
  };
  const nextReviews = () => {
    setIndex((newIndex) => {
      const newIn = newIndex + 1;
      return checkNum(newIn);
    });
  };

  const random = () => {
    let randomPerson = Math.floor(Math.random() * reviews.length);
    if (randomPerson === index) {
      randomPerson = index + 1;
    }
    setIndex(checkNum(randomPerson));
  };

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button type='button' className='prev-btn' onClick={prevReviews}>
            <FaChevronCircleLeft />
          </button>
          <button type='button' className='next-btn' onClick={nextReviews}>
            <FaChevronCircleRight />
          </button>
        </div>
        <button className='btn btn-hipster' type='button' onClick={random}>
          Random Review
        </button>
      </article>
    </main>
  );
};
export default App;
