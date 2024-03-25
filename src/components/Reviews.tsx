"use client";
import { useState } from "react";

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handlePrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCurrentSlide(currentSlide === 1 ? 4 : currentSlide - 1);
  };

  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCurrentSlide(currentSlide === 4 ? 1 : currentSlide + 1);
  };

  return (
    <div className="w-full min-h-[200px]">
      <h2 className="text-3xl font-bold text-center mb-5">Reviews</h2>
      <div className="carousel w-full">
        {currentSlide === 1 && (
          <div id="slide1" className="carousel-item relative w-full">
            <blockquote className="w-3/5 mx-auto">
              "We had the pleasure of working with Coach Abdul on swimming
              lessons for our 18 month old. Coach Abdul was always extremely
              patient and adjusted the lessons based on our baby’s progress and
              interests. The lessons were always fun and safe and also very
              educational to us as parents. We are so happy to have had this
              great experience with Coach Abdul and look forward to working with
              him again in the future!"
            </blockquote>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button className="btn btn-circle" onClick={handlePrev}>
                ❮
              </button>
              <button className="btn btn-circle" onClick={handleNext}>
                ❯
              </button>
            </div>
          </div>
        )}

        {currentSlide === 2 && (
          <div id="slide2" className="carousel-item relative w-full">
            <blockquote className="w-3/5 mx-auto">
              "Last summers we took our children for swimming lessons from coach
              Abdulrahman Ebaid. He was fantastic! He has a deep understanding
              of swimming techniques and was able to explain them in a clear and
              concise way. I also appreciated his patience and encouragement,
              which helped my kids overcome their nervousness about learning to
              swim. Overall, we had a wonderful experience with him and would
              highly recommend him to anyone looking to improve their swimming
              skills."
            </blockquote>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button className="btn btn-circle" onClick={handlePrev}>
                ❮
              </button>
              <button className="btn btn-circle" onClick={handleNext}>
                ❯
              </button>
            </div>
          </div>
        )}

        {currentSlide === 3 && (
          <div id="slide3" className="carousel-item relative w-full">
            <blockquote className="w-3/5 mx-auto">
              "Abdulrahman has been a great coach! He taught my 6 year old how to
              swim. He was able to teach the correct skills and make Z
              comfortable in the water. Abdul has a lot of patience and works
              great with young kids! We are exciting to continue swim lessons
              with Abdul this summer"
            </blockquote>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button className="btn btn-circle" onClick={handlePrev}>
                ❮
              </button>
              <button className="btn btn-circle" onClick={handleNext}>
                ❯
              </button>
            </div>
          </div>
        )}

        {currentSlide === 4 && (
          <div id="slide4" className="carousel-item relative w-full">
            <blockquote className="w-3/5 mx-auto">
              "I used to take my daughter to swimming classes in other places for
              a whole 2 years, summer and winter, and she did not have much
              improvement. After Coach Abdulrahman trained her, my daughter was
              able to swim for the first time independently in a very short
              period of time (couple of months). She was even comfortable going
              in the deeper part of the pool (6 feet). Both my kids loved the
              way he taught them and how fun he made his class. He knows how to
              deal with kids and is very patient throughout the whole learning
              process. At the end of the class he gives me a brief summary about
              what he taught them, what they were able to do, and what he will
              teach them next class. I recommend taking your kids to Coach
              Abdelrahman’s swimming classes; he’s a great coach!"
            </blockquote>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button className="btn btn-circle" onClick={handlePrev}>
                ❮
              </button>
              <button className="btn btn-circle" onClick={handleNext}>
                ❯
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
