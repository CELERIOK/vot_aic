import React from 'react';
import Banner from '../components/Banner';
import Description from '../components/Description';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm1';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <>
    <Header/>
        <main>
        <Banner />
        <Description />
        <Services />
        <ContactForm />
        <Footer />
        </main>
    </>
  );
};

export default Home;