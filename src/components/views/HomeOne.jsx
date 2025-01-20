import React from 'react'
import Hero from '../Hero'
import Footer from '../common/Footer'
import Header from '../common/Header'

const HomeOne = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Footer />
    </div>
      // useEffect(() => {
      //   const handleOverflow = () => {
      //     if (nav && window.innerWidth < 768) {
      //       document.body.classList.add("overflow-hidden");
      //     } else {
      //       document.body.classList.remove("overflow-hidden");
      //     }
      //   };
    
      //   handleOverflow();
      //   window.addEventListener("resize", handleOverflow);
    
      //   return () => {
      //     document.body.classList.remove("overflow-hidden");
      //     window.removeEventListener("resize", handleOverflow);
      //   };
      // }, [nav]);
  )
}

export default HomeOne