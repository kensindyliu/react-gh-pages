import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Button from './components/Button'; 
import './style/reset.css';
import './style/styles.css'; // You can create this file for global styles

const App = () => {
  const bannerProps = {
    buttonText: 'Primary Button',
    buttonType: 'primary'
  };

  const imageList = [
    { src: "/imgs/movie1.jpeg", alt: "movie1" },
    { src: "/imgs/movie2.jpeg", alt: "movie2" },
    { src: "/imgs/movie3.jpeg", alt: "movie3" },
    { src: "/imgs/movie4.jpeg", alt: "movie4" }
  ];

  const buttonProps = [
    { type: 'btnPrimary', text: 'Primary' },
    { type: 'btnSecondary', text: 'Secondary' },
  ];

  return (
    <div className="app">
      <Banner {...bannerProps} />
      <Header />
      <div className="button-container">
        {buttonProps.map((props, index) => (
          <Button key={index} {...props} />
        ))}
      </div>
      <div className='gallery-container'>
        <Gallery images={imageList} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
