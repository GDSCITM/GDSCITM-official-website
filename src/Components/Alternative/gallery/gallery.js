import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './gallery.module.css';



export default function Gallery() {
  const [fetchedImages, setFetchedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch images asynchronously
  const fetchImages = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/GDSCITM/GDSC-dataStore/main/Gallery/data.json');
      const data = await response.json();
      setFetchedImages(data);
    } catch (error) {
      console.error('Failed to fetch images:', error);
    }
  };

  useEffect(() => {
    fetchImages();

    // Set up an interval to change the image every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % fetchedImages.length);
    }, 3000);

    // Clean up the interval when the component unmounts or when fetchedImages changes
    return () => clearInterval(intervalId);
  }, [fetchedImages]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + fetchedImages.length) % fetchedImages.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % fetchedImages.length);
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainHolderTwoItemDesign}>
        
      </div>
      <div className={styles.mainHolder}>
        <div className={styles.mainHolderOne}>
          <div className={styles.mainHolderOneItem}>
            <div className={styles.mainHolderOneItemHeader}>
              <p style={{ background: '#FE2C25' }}></p>
              <p style={{ background: '#2785FC' }}></p>
              <p style={{ background: '#FBBC12' }}></p>
            </div>
            <div className={styles.mainHolderOneItemContainer}>
            <Carousel
          selectedItem={currentImageIndex}
          onChange={(index) => setCurrentImageIndex(index)}
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          stopOnHover={true}
        >
          {fetchedImages.map((image, index) => (
            <div key={index}>
              <img src={image.image} alt={image.alt} />
            </div>
          ))}
        </Carousel>
              
            </div>
          </div>
        </div>
        <div className={styles.mainHolderTwo}>
          <div className={styles.mainHolderTwoItem}>
            <div className={styles.mainHolderTwoItemHeading}>
              <h2>GDSC ITM</h2>
              <p>Beginning of infinity <b>∞</b></p>
            </div>
            <div className={styles.mainHolderTwoItemContainer}>
              <p>
                GDSC's primary aim lies in empowering students with development skills and other technical abilities for growth and advancement. We believe in innovation and evolution. For students to grow their skills to tackle problems and to bring about change.
                <br />
                <br />
                The club is intended as a space for students to try out new ideas and collaborate to solve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
