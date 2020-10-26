import React, { useState } from 'react';
import people from '../../reviews/data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import './review.css';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, image, text } = people[index];

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }
    return <article className="review">
        <div className="content">
            <div className="img-container">
                <img src={image} alt="review image" className="person-img" />
                {/* <span className="quote-icon">
                    <FaQuoteRight />
                </span> */}
            </div>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            {/* <h4 className="author">{name}</h4> */}
            <p className="info">{text}</p>
        </div>
    </article>
};

export default Review;