import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import Navbar from '../Navbar/Navbar';
import TopText from '../TopText/TopText';
import Hero from '../Hero/Hero';
import Home from '../Home/Home';
import WhoWorks from '../WhoWorks/WhoWorks';
import HowWeWork from '../HowWeWork/HowWeWork';
import Contact from '../Contact/Contact';
import BottomText from '../BottomText/BottomText';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <TopText />
      <Hero />
      <Home />
      <WhoWorks />
      <HowWeWork />
      <Contact />
      <BottomText />
      <ScrollToTop />
    </div>
  );
}

export default App;