import Head from 'next/head';
import logo from '@/public/logo.png';

const SEO = () => {
  return (
    <Head>
      <title>Caltech Racing - Formula SAE Team</title>
      <meta name="description" content="Caltech Racing combines multiple disciplines, uniting students from various fields to design, build, and race a high-performance car. Join us in our journey of innovation and excellence." />
      <meta name="keywords" content="Caltech Racing, Formula SAE, high-performance cars, engineering, racing team, aerodynamics, thermodynamics, electrical systems, drivetrain design, suspension design" />
      <meta name="author" content="Caltech Racing" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="Caltech Racing - Formula SAE Team" />
      <meta property="og:description" content="Caltech Racing combines multiple disciplines, uniting students from various fields to design, build, and race a high-performance car. Join us in our journey of innovation and excellence." />
      <meta property="og:image" content={logo} />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Caltech Racing - Formula SAE Team" />
      <meta name="twitter:description" content="Caltech Racing combines multiple disciplines, uniting students from various fields to design, build, and race a high-performance car. Join us in our journey of innovation and excellence." />
      <meta name="twitter:image" content={logo} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;