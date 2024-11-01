"use client"

import Image from 'next/image';
const About = () => {
  return (
    <div className="container2">
      <h1>About Us</h1>
      <div className="content">
        <Image src="/image/redrose.jpg" alt="Perfume" width={400} height={400} className="image" />
        <p>
        Our perfume gift sets make it easy to explore new scents without the commitment
        of a full bottle. Each set combines popular fragrances with useful items like lotions or
        travel sizes, making them practical for daily use or travel. This way, you can enjoy luxury perfumes
         while finding what truly suits you.
         
        </p>
      </div>
    </div>
  );
};

export default About;