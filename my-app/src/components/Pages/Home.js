import React from 'react'
import Hero from '../HomePart/Hero';
import HomeAbout from '../HomePart/HomeAbout';
import DestinationHome from '../Destina/DestinationHome';
import MostPopular from '../Popular/MostPopular';
import WaveBackground from '../WaveBackground';
import Download from '../Download/Download';
import Work from '../Work/Work';
import Gallery from '../HomePart/Gallery/Gallery';

function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <DestinationHome />
      <MostPopular />
      <Download />
      <Work />
      <Gallery/>
      <WaveBackground/>
    </div>
  )
}

export default Home;
