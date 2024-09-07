import { useState, useEffect } from 'react';
import data from './CarouselData';
import './Carousel.scss';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalTime = 3000;

    const nextSlide = () => {
        setCurrentSlide((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, intervalTime);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="carousel">
            {data.map((slide, index) => {
                let className = 'carousel-item';

                if (index === currentSlide) {
                    className += ' active';
                } else if (index === (currentSlide === 0 ? data.length - 1 : currentSlide - 1)) {
                    className += ' prev';
                } else if (index === (currentSlide === data.length - 1 ? 0 : currentSlide + 1)) {
                    className += ' next';
                }

                return (
                    <div
                        key={slide.id}
                        className={className}
                    >
                        <img
                            src={slide.image}
                            alt={`Slide ${slide.id}`}
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <button onClick={prevSlide} className="btn btn-circle">❮</button>
                            <button onClick={nextSlide} className="btn btn-circle">❯</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
