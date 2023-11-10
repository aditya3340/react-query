import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel flex items-center justify-center">
      <button
        onClick={prevImage}
        className="text-4xl text-gray-600 hover:text-gray-800"
      >
        <FaArrowLeft />
      </button>
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="mx-4 rounded-lg shadow-lg"
      />
      <button
        onClick={nextImage}
        className="text-4xl text-gray-600 hover:text-gray-800"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
