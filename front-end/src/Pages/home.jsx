import React from 'react';
import Hero from '../components/hero';
import LatestCollection from '../context/LatestCollection';
import BestSellers from '../context/BestSellers';
import Ourpolicy from '../components/Ourpolicy';
import NewsletterBox from '../components/NewsletterBox';


const Home = () => {
  console.log("Home Page Loaded");

  return (
    <div className="px-4">
      <Hero />
      <LatestCollection />
      <BestSellers />
      <Ourpolicy/>
      <NewsletterBox/>

    </div>
  );
};

export default Home;
