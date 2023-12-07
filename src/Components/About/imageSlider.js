import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-01-ok9t8tqfmw86q6a5qjwdw95uon8m0ro8dme893gop4.jpg',
    'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/farming04-free-img-o9xdxvnzch1gu353cc71s2fv9hgs2o8e1ubsjmmia0.jpg',
    'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-02-ok9thlk7f88j35jeicf161gqa3zxv2i1l1ldi2gemg.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current index, and reset to 0 if it reaches the last image
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{ maxWidth: '100%',height:'60%' }}
      />
    </div>
  );
};

export default ImageSlider;
