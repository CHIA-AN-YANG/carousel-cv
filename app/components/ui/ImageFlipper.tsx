import { useState } from "react";

interface ImageFlipperPropType {
  images: string[];
  className?: string;
}

const ImageFlipper: React.FC<ImageFlipperPropType> = ({ images, className }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleHover = () => {
    if (isFlipping) return;
    setIsFlipping(true);

    const timerImgSwitch = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      clearTimeout(timerImgSwitch);
    }, 1250);

    const timerFlipping = setTimeout(() => {
      setIsFlipping(false);
      clearTimeout(timerFlipping);
    }, 3000);
  };

  return (
    <div className={className + " content__picture"} onMouseEnter={handleHover}>
      <div className={`${isFlipping ? "flipping" : ""}` + " image__wrapper"} >
        <img
          src={images[currentIndex]}
          alt={`selfie ${[currentIndex]}`}
        />
      </div>
    </div>
  );
};

export default ImageFlipper;
